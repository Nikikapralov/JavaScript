from __future__ import annotations
from typing import TYPE_CHECKING, Any

if TYPE_CHECKING:
    from django.db.models import QuerySet

import django_filters
from django.http import Http404

from WorkshopServer_1.user_list.models import UserExtension


class UserExtensionFilter(django_filters.FilterSet):
    """
    A filter to implement the requested search
    functionality for a specific user.
    """

    first_name: django_filters.CharFilter = django_filters.CharFilter(lookup_expr="icontains")
    last_name: django_filters.CharFilter = django_filters.CharFilter(lookup_expr="icontains")
    email: django_filters.CharFilter = django_filters.CharFilter(lookup_expr="icontains")
    phone_number: django_filters.CharFilter = django_filters.CharFilter(lookup_expr="icontains")
    created_at: django_filters.CharFilter = django_filters.CharFilter(lookup_expr="icontains")

    class Meta:
        model: UserExtension = UserExtension
        fields: list[str, ...] = ["first_name", "last_name", "email",
                  "phone_number", "created_at"]

    def filter_queryset(self, queryset: QuerySet[Any, ...]) -> QuerySet[Any, ...]:
        """
        Check if the queryset exists after filtering.
        Normally one would return an empty list but here
        we have to return an HTTP Error 404.
        :param queryset: The pure queryset that we received from the view.
        :return: The filtered queryset.
        """
        queryset: QuerySet[Any, ...] = super().filter_queryset(queryset=queryset)
        if not queryset.exists():
            # Faster than evaluating the queryset by accessing the DB for the records.
            # If many are returned, using len() or other methods requires the Query to be type casted to list which
            # is very slow.
            # https://dev.to/codereviewdoctor/why-queryset-exists-is-more-efficient-than-queryset-count-2f3h
            # Exists reads just one record in the most optimised way.
            raise Http404("The data you were looking for was not found.")
        return queryset



