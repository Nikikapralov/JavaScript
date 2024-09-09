from __future__ import annotations
from typing import Any

from django.db import models, transaction
from Games.settings import CHA_ENCRYPTION

from Games.cha_encryption.utils.utils import generate_nonce
from Games.cha_encryption.utils.ciphers import encrypt_val, decrypt_val


class EncryptionModel(models.Model):

    encryption_fields: set = {}

    class Meta:
        abstract = True

    @transaction.atomic
    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        """
        Check if the field has to be encrypted, if so, encrypt it.
        :return:
        """
        try:
            with transaction.atomic():
                self._encrypt_fields()

                super().save(force_insert=force_insert, force_update=force_update,
                             using=using, update_fields=update_fields)
        except Exception as e:
            raise e

    def _encrypt_fields(self) -> None:
        """
        Encrypt the fields as defined in the model's encryption_fields attribute.
        Generate and save a nonce, then encrypt the fields with it.
        :return: None
        """
        for field in self.encryption_fields:
            try:
               value = getattr(self, field)
            except AttributeError:
                raise AttributeError(f"The field that you wish to encrypt: {field}\n"
                                     f"does not exist in the model {self}. \n"
                                     f"Maybe you made a typo in the 'encryption_field' \n"
                                     f"attribute in the model's definition?")
            nonce: bytes = generate_nonce()
            encrypted_value, nonce_str = encrypt_val(value=value, nonce=nonce, key=CHA_ENCRYPTION["key"])
            value_nonce: str = encrypted_value + "kyXrMJMKbeCBqfywhJSLsLVoQcEW7wKN" + nonce_str
            setattr(self, field, value_nonce)

    def decrypt_fields(self) -> dict[str, Any]:
        """
        Decrypt the fields defined in 'encryption_fields'.
        Returns a dictionary holding the decrypted data.
        :return: Dictionary holding the decrypted data.
        """
        decrypted_fields: dict[str, Any] = {}
        for field in self.encryption_fields:
            try:
               value_nonce = getattr(self, field)
            except AttributeError:
                raise AttributeError(f"The field that you wish to encrypt: {field}\n"
                                     f"does not exist in the model {self}. \n"
                                     f"Maybe you made a typo in the 'encryption_field' \n"
                                     f"attribute in the model's definition?")
            value, nonce = value_nonce.split("kyXrMJMKbeCBqfywhJSLsLVoQcEW7wKN")
            decrypted_value: str = decrypt_val(value=value, nonce=nonce, key=CHA_ENCRYPTION["key"])
            decrypted_fields[field] = decrypted_value
        return decrypted_fields