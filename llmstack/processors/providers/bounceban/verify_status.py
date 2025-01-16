import logging
from typing import Any, Dict, Optional

from asgiref.sync import async_to_sync
from pydantic import Field

from llmstack.apps.schemas import OutputTemplate
from llmstack.common.utils.prequests import get
from llmstack.processors.providers.api_processor_interface import (
    ApiProcessorInterface,
    ApiProcessorSchema,
)
from llmstack.processors.providers.metrics import MetricType

logger = logging.getLogger(__name__)


class VerifyStatusProcessorInput(ApiProcessorSchema):
    id: str = Field(description="The unique ID for a single email verification task.")


class VerifyStatusProcessorOutput(ApiProcessorSchema):
    response: str = Field(description="The response from the API call as a string", default="")
    response_json: Optional[Dict[str, Any]] = Field(
        description="The response from the API call as a JSON object", default={}
    )
    response_objref: Optional[str] = Field(description="The reference to the response object", default=None)
    headers: Optional[Dict[str, str]] = Field(description="The headers from the API call", default={})
    code: int = Field(description="The status code from the API call", default=200)
    size: int = Field(description="The size of the response from the API call", default=0)
    time: float = Field(description="The time it took to get the response from the API call", default=0.0)


class VerifyStatusProcessorConfiguration(ApiProcessorSchema):
    pass


class EchoProcessor(
    ApiProcessorInterface[VerifyStatusProcessorInput, VerifyStatusProcessorOutput, VerifyStatusProcessorConfiguration],
):
    """
    Single email verification result processor
    """

    @staticmethod
    def name() -> str:
        return "Email Verification Status"

    @staticmethod
    def slug() -> str:
        return "verify_status"

    @staticmethod
    def description() -> str:
        return "Get the verification result for single email verification."

    @staticmethod
    def provider_slug() -> str:
        return "bounceban"

    @classmethod
    def get_output_template(cls) -> OutputTemplate | None:
        return OutputTemplate(
            markdown="{{response}}",
            jsonpath="$.response",
        )

    def process(self) -> dict:
        provider_config = self.get_provider_config(provider_slug=self.provider_slug(), processor_slug="*")
        deployment_config = self.get_provider_config(provider_slug=self.provider_slug(), processor_slug="*")
        api_key = deployment_config.api_key
        response = get(
            url="https://api.bounceban.com/v1/verify/single/status",
            headers={"Authorization": f"{api_key}"},
            params=self._input.model_dump(),
        )
        self._usage_data.append(
            (
                f"{self.provider_slug()}/*/*/*",
                MetricType.API_INVOCATION,
                (provider_config.provider_config_source, 1),
            )
        )
        async_to_sync(self._output_stream.write)(
            VerifyStatusProcessorOutput(
                response=response.text,
                response_json=response.json(),
                headers=response.headers,
                code=response.status_code,
                size=len(response.content),
                time=response.elapsed.total_seconds(),
            )
        )

        output = self._output_stream.finalize()
        return output
