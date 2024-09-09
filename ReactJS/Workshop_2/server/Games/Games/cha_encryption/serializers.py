from __future__ import annotations
from typing import Any


class DecryptionSerializerMixin:
    """
    Decrypt the fields and add them to the returned data.
    """

    def to_representation(self, instance) -> dict[str, Any]:
        """
        This method is called whenever data from the database is retrieved.
        :param instance: The instance.
        :return: The data with the decrypted fields.
        """
        decrypted_fields: dict[str, Any] = instance.decrypt_fields()
        data = super().to_representation(instance=instance)
        data.update(decrypted_fields)
        return data