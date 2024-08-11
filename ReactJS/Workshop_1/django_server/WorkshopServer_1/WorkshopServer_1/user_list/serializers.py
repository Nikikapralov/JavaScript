from __future__ import annotations
from typing import Any, TYPE_CHECKING

if TYPE_CHECKING:
    pass

from django.db import transaction
from django.core import validators
from rest_framework import serializers
from django.core.exceptions import ValidationError
from WorkshopServer_1.user_list.models import UserExtension, Address
from WorkshopServer_1.cha_encryption.serializers import DecryptionSerializerMixin


class AddressSerializerGetPostUpdate(DecryptionSerializerMixin, serializers.ModelSerializer):
    """
    A serializer used for the listing and creation of all addresses.
    """
    class Meta:
        model: Address = Address
        fields: list[str, ...] = ["uid", "street", "street_number", "city", "country"]

    def to_representation(self, instance: Address) -> dict[str, Any]:
        """
        Since this is a model serializer and we have a char field as the street number (it is encrypted
        as string data), the decrypted street number will always be returned as a string.
        We have to manually cast it to integer in the data dict before we return it.
        :param instance: The address instance.
        :return: The data dictionary with the address attributes.
        """
        data: dict[str, Any] = super().to_representation(instance=instance)
        data["street_number"] = int(data["street_number"]) # Return the data as a string
        return data

    def validate(self, attrs: dict[str, Any]) -> dict[str, Any]:
        """
        We cannot use database validations since the fields there accept the already encrypted data.
        As such, we must do all of the validation on the serializer level.
        First, we declare the fields and the specific validation for each field and
        then we validate them.
        :param attrs: The validated data.
        :return: The validated data.
        """
        fields_validator_map: dict[str, validators.MinLengthValidator | validators.MinValueValidator] = {
            "street": validators.MinLengthValidator(limit_value=3),
            "city": validators.MinLengthValidator(limit_value=3),
            "country": validators.MinLengthValidator(limit_value=2),
            "street_number": validators.MinValueValidator(limit_value=1),
        }

        attrs["street_number"] = int(attrs["street_number"])

        # Collect all the exception in one dictionary.
        exceptions_dict: dict[str, str] = {}

        for key, value in attrs.items():
            validator = fields_validator_map[key]
            try:
                # Apply the validator to the field value
                validator(value)
            except ValidationError as e:
                # Raise a validation error with a meaningful message
                exceptions_dict.update({key: str(e)})

        # Return all the exceptions at once for a better user experience.
        if exceptions_dict:
            raise ValidationError(exceptions_dict)

        return attrs


class UserExtensionSerializerLimited(serializers.ModelSerializer):
    """
    A user extension serializer used for GET methods that limits the amount of fields
    and lookups one has to perform.
    """

    class Meta:
        model: UserExtension = UserExtension
        fields: list[str, ...] = ["uid", "first_name", "last_name", "email",
                                  "imageUrl", "phone_number", "created_at"]


class UserExtensionSerializerFull(serializers.ModelSerializer):
    """
    A serializer used for the listing of all users
    and the creation of new users.
    """

    address: AddressSerializerGetPostUpdate = AddressSerializerGetPostUpdate()

    class Meta:
        model: UserExtension = UserExtension
        fields: list[str, ...] = ["uid", "first_name", "last_name",
                                  "email", "imageUrl", "phone_number",
                                  "address", "created_at"]

    @transaction.atomic
    def create(self, validated_data: dict[str, Any]) -> UserExtension:
        """
        Create a new user with a mapped address.
        Check if an address already exists (can hash addresses to a key: hash table for faster lookup),
        create it if not, create a new user instance and map the address to it.
        Wrap in a transaction to ensure both actions pass or fail.
        :param validated_data: Data from the user request.
        :return: The created instance.
        """
        validated_data_for_address: dict[str, Any] = validated_data.pop("address")
        try:
            with transaction.atomic():
                address, created = Address.objects.get_or_create(**validated_data_for_address)
                instance: UserExtension = self.Meta.model.objects.create(address=address, **validated_data)
        except Exception as e:
            raise e
        return instance

    @transaction.atomic
    def update(self, instance: UserExtension, validated_data: dict[str, Any]) -> UserExtension:
        """
        Update an existing user data instance, including the address.
        Simply update both the address and the instance. More effective than retrieving old ones, deciding
        on which changes have happened and then creating a specialised query.
        :param instance: Current instance of the model.
        :param validated_data: Data from the user request.
        :return: The new updated instance.
        """
        try:
            validated_data_for_address: dict[str, Any] = validated_data.pop("address")
        except KeyError:
            validated_data_for_address: None = None

        try:
            with transaction.atomic():
                # This architecture does not allow for an update to the address
                # Since multiple people can live at the same address.
                # A new address is always created or a person is assigned to an existing one.
                # A cron job clears all addresses with 0 assigned people every night at 3 am.
                # Yes, this is a bad idea, but this if an example Workshop project for React.
                if validated_data_for_address:
                    address, created = Address.objects.get_or_create(**validated_data_for_address)
                    instance.address = address

                for attr, value in validated_data.items():
                    setattr(instance, attr, value)

                instance.save()
        except Exception as e:
            raise e
        return instance

    def validate(self, data: dict[str, Any]) -> dict[str, Any]:
        """
        Validate the nested address data and if any errors are found,
        make sure to bubble the errors for the specific fields.
        :param data: Json Data
        :return: The validated data.
        """
        # Validate the nested address data
        address_data: dict[str, Any] = data['address']
        if address_data:
            address_serializer = AddressSerializerGetPostUpdate(data=address_data)
            if not address_serializer.is_valid():
                # If the nested serializer has errors, include them in the main error response
                raise serializers.ValidationError({
                    'address': address_serializer.errors
                })

        return data





    # Deprecated through .get_or_create()
    # @staticmethod
    # def _get_address(validated_address_data: dict[str, Any]) -> QuerySet | None:
    #     """
    #     Get an existing address from the database or return None.
    #     :param validated_address_data: The data for the requested address.
    #     :return: Address/None
    #     """
    #     query: str = "Address.objects"
    #     for key, value in validated_address_data.items():
    #         query += f".filter({key}__exact='{value}')"
    #     query += ".first()"
    #     query_set: QuerySet = eval(query)
    #     return query_set







