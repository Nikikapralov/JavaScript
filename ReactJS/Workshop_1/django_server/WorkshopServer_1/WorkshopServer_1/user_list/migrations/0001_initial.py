# Generated by Django 5.0.4 on 2024-05-13 23:14

import WorkshopServer_1.user_list.validators
import django.core.validators
import django.db.models.deletion
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('uid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('country', models.CharField(max_length=10000)),
                ('city', models.CharField(max_length=10000)),
                ('street', models.CharField(max_length=10000)),
                ('street_number', models.CharField(max_length=10000)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='UserExtension',
            fields=[
                ('uid', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('first_name', models.CharField(max_length=255, validators=[django.core.validators.MinLengthValidator(limit_value=3)])),
                ('last_name', models.CharField(max_length=255, validators=[django.core.validators.MinLengthValidator(limit_value=3)])),
                ('email', models.EmailField(max_length=255, validators=[django.core.validators.EmailValidator, WorkshopServer_1.user_list.validators.custom_email_validator])),
                ('imageUrl', models.URLField(max_length=255, validators=[WorkshopServer_1.user_list.validators.custom_url_validator])),
                ('phone_number', models.CharField(max_length=10, validators=[WorkshopServer_1.user_list.validators.custom_phone_number_validator])),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('address', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='user_list.address')),
            ],
        ),
    ]