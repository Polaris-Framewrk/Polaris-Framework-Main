# Generated by Django 5.0.6 on 2024-09-26 18:47

import llmstack.sheets.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sheets', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='promptlysheet',
            name='data',
            field=models.JSONField(blank=True, default=dict, help_text='The data of the sheet', null=True),
        ),
        migrations.AlterField(
            model_name='promptlysheetrunentry',
            name='data',
            field=models.JSONField(blank=True, default=llmstack.sheets.models.default_sheet_data, help_text='The data of the sheet', null=True),
        ),
    ]
