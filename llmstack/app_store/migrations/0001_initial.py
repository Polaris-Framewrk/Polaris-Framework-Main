# Generated by Django 5.0.6 on 2024-07-20 17:49

import django.contrib.postgres.fields
import llmstack.app_store.models
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AppStoreApp',
            fields=[
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('slug', models.SlugField(max_length=100, unique=True)),
                ('app_data', models.JSONField(blank=True, default=dict, null=True)),
                ('icon', models.UUIDField(blank=True, default=None, null=True)),
                ('icon128', models.UUIDField(blank=True, default=None, null=True)),
                ('icon256', models.UUIDField(blank=True, default=None, null=True)),
                ('icon512', models.UUIDField(blank=True, default=None, null=True)),
                ('rank', models.IntegerField(default=0, help_text='Rank of the instance')),
                ('is_archived', models.BooleanField(default=False, help_text='Is the app archived')),
                ('search_vector', django.contrib.postgres.fields.ArrayField(base_field=models.FloatField(), blank=True, default=list, null=True, size=None)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='AppStoreAppAssets',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uuid', models.UUIDField(default=uuid.uuid4, editable=False, help_text='UUID of the asset', unique=True)),
                ('metadata', models.JSONField(blank=True, default=dict, help_text='Metadata for the asset', null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('ref_id', models.UUIDField(blank=True, help_text='UUID of the app store app this asset belongs to')),
                ('file', models.FileField(blank=True, null=True, storage=llmstack.app_store.models.AppStoreAppAssets.select_storage, upload_to=llmstack.app_store.models.AppStoreAppAssets.appstore_upload_to)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
