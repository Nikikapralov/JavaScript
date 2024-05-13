from __future__ import annotations
from typing import Any, TYPE_CHECKING

if TYPE_CHECKING:
    pass

from django.db import transaction

from rest_framework import serializers
from WorkshopServer_1.user_list.models import UserExtension, Address
from WorkshopServer_1.cha_encryption.serializers import DecryptionSerializerMixin


class AddressSerializerGetPostUpdate(DecryptionSerializerMixin, serializers.ModelSerializer):
    """
    A serializer used for the listing and creation of all addresses.
    """
    class Meta:
        model: Address = Address
        fields: list[str, ...] = ["uid", "street", "street_number", "city", "country"]


class UserExtensionSerializerLimited(serializers.ModelSerializer):
    """
    A user extension serializer used for GET methods that limits the amount of fields
    and lookups one has to perform.
    """

    class Meta:
        model: UserExtension = UserExtension
        fields: list[str, ...] = ["uid", "first_name", "last_name", "email", "imageUrl", "phone_number"]


class UserExtensionSerializerFull(serializers.ModelSerializer):
    """
    A serializer used for the listing of all users
    and the creation of new users.
    """

    address: AddressSerializerGetPostUpdate = AddressSerializerGetPostUpdate()

    class Meta:
        model: UserExtension = UserExtension
        fields: list[str, ...] = ["uid", "first_name", "last_name",
                                  "email", "imageUrl", "phone_number", "address"]

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







