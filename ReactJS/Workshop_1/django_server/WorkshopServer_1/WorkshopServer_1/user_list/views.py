from __future__ import annotations
from typing import TYPE_CHECKING


if TYPE_CHECKING:
    from django.db.models import QuerySet

from django import shortcuts
from rest_framework import  generics
from WorkshopServer_1.user_list.models import UserExtension
from WorkshopServer_1.user_list.serializers import UserExtensionSerializerFull, \
    UserExtensionSerializerLimited
from WorkshopServer_1.utils.serializers.dynamic_multiple_serializers import DynamicMultipleSerializersMixin


# Create your views here.


class UserExtensionView(DynamicMultipleSerializersMixin,
                        generics.ListCreateAPIView):

    model: UserExtension = UserExtension
    serializers: dict[str, UserExtensionSerializerFull |
                           UserExtensionSerializerLimited] = {
        "POST": UserExtensionSerializerFull,
        "GET": UserExtensionSerializerLimited
    }

    def get_queryset(self) -> QuerySet[UserExtension, ...]:
        """
        Retrieve all user extension data from the database.
        Prefetch the addresses in order to minimize the load on the database from
        executing multiple queries. (DEPRECATED since we decided to return less data anyway).
        :return: The queryset.
        """
        queryset: QuerySet[UserExtension, ...] = shortcuts.get_list_or_404(klass=self.model)
        return queryset


class UserExtensionDetailedView(DynamicMultipleSerializersMixin,
                                generics.RetrieveUpdateDestroyAPIView):
    model = UserExtension
    serializers: dict[str, UserExtensionSerializerFull] = {
        "PUT": UserExtensionSerializerFull,
        "GET": UserExtensionSerializerFull,
        "PATCH": UserExtensionSerializerFull,
    }

    lookup_field: str = "id"

    def get_object(self) -> UserExtension:
        """
        Get the requested object or raise error 404.
        :return: The requested object/rais 404.

        DOES NOT WORK WITH QUERYSET, unless the get_queryset on the model is modified.
        """
        objekt: UserExtension = shortcuts.get_object_or_404(klass=self.model.objects.select_related("address"),
                                                            uid=self.kwargs["uid"])

        return objekt
