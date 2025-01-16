# Generated by Django 4.2.11 on 2024-04-30 20:11

from django.db import migrations, models

import llmstack.apps.models


class Migration(migrations.Migration):

    dependencies = [
        ("apps", "0013_alter_app_uuid_alter_appdataassets_file_and_more"),
    ]

    operations = [
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
    ]