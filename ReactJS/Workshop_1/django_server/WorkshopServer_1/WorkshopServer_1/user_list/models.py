import uuid

from django.db import models
from django.core import validators
from WorkshopServer_1.user_list.validators import (custom_email_validator,
                                                   custom_url_validator, custom_phone_number_validator)

from WorkshopServer_1.cha_encryption.models import EncryptionModel
# Create your models here.


class Address(EncryptionModel, models.Model):
    """
    An address model.
    An address can be shared by multiple people.
    If no people share an address, it gets deleted. (By a celery scheduled cron job, once a day).
    """

    encryption_fields = {"country", "city", "street", "street_number"}

    uid: models.UUIDField = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    country: models.CharField = models.CharField(max_length=10000)

    city: models.CharField = models.CharField(max_length=10000)

    street: models.CharField = models.CharField(max_length=10000)

    street_number: models.CharField = models.CharField(max_length=10000)


class UserExtension(models.Model):
    """
    A user model to extend the user authentication model.
    Each user has an address.
    """

    uid: models.UUIDField = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    first_name: models.CharField = models.CharField(max_length=255,
                                  validators=[validators.MinLengthValidator(limit_value=3)])

    last_name: models.CharField = models.CharField(max_length=255,
                                 validators=[validators.MinLengthValidator(limit_value=3)])

    email: models.EmailField = models.EmailField(max_length=255,
                              validators=[validators.EmailValidator,
                                          custom_email_validator])

    imageUrl: models.URLField = models.URLField(max_length=255,
                               validators=[custom_url_validator])

    phone_number: models.CharField = models.CharField(max_length=10,
                                    validators=[custom_phone_number_validator])

    created_at: models.DateTimeField = models.DateTimeField(auto_now_add=True)

    address: models.ForeignKey = models.ForeignKey(to=Address, on_delete=models.DO_NOTHING)



