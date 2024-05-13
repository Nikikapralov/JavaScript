from __future__ import annotations
from typing import Any


class DecryptionSerializerMixin:

    def to_representation(self, instance) -> dict[str, Any]:
        """
        This method is called whenever data from the database is retrieved.
        :param instance:
        :return:
        """
        decrypted_fields: dict[str, Any] = instance.decrypt_fields()
        data = super().to_representation(instance=instance)
        data.update(decrypted_fields)
        return data