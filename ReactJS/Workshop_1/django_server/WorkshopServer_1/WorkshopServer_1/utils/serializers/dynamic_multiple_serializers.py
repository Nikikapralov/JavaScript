from __future__ import annotations
from typing import TYPE_CHECKING, Any
if TYPE_CHECKING:
    pass


class DynamicMultipleSerializersMixin:

    serializers: dict[str, Any] = {}

    def get_serializer_class(self):
        """
        Return the specific serializer class.
        :return: The correct serializer class.
        """
        try:
           serializer = self.serializers[self.request.method]
        except KeyError:
            raise ValueError(f"No serializer found for method {self.request.method}."
                             f"Make sure to define 'serializers' as a dictionary of METHOD: SERIALIZER in the view.")
        return serializer