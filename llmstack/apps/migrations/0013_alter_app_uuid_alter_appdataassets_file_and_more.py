# Generated by Django 4.2.11 on 2024-04-30 19:16

import uuid

from django.db import migrations, models

import llmstack.apps.models


class Migration(migrations.Migration):

    dependencies = [
        ("apps", "0012_appdataassets"),
    ]

    operations = [
        migrations.AlterField(
            model_name="app",
            name="uuid",
            field=models.UUIDField(default=uuid.uuid4, help_text="Identifier for the app", unique=True),
        ),
        migrations.AlterField(
            model_name="appdataassets",
            name="file",
            field=models.FileField(
                blank=True,
                null=True,
                storage=llmstack.apps.models.AppDataAssets.select_storage,
                upload_to=llmstack.apps.models.AppDataAssets.appstore_upload_to,
            ),
        ),
        migrations.AlterField(
            model_name="appdataassets",
            name="uuid",
            field=models.UUIDField(default=uuid.uuid4, editable=False, help_text="UUID of the asset", unique=True),
        ),
        migrations.AlterField(
            model_name="appsession",
            name="uuid",
            field=models.UUIDField(default=uuid.uuid4, help_text="UUID for the run", unique=True),
        ),
        migrations.AlterField(
            model_name="appsessionfiles",
            name="uuid",
            field=models.UUIDField(default=uuid.uuid4, editable=False, help_text="UUID of the asset", unique=True),
        ),
        migrations.AlterUniqueTogether(
            name="appdata",
            unique_together={("app_uuid", "version")},
        ),
    ]