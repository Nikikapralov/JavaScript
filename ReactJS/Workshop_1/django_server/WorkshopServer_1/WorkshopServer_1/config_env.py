from __future__ import annotations

import binascii
from typing import Any

SECRET_KEY = 'django-insecure-be@w6rhao_q)97qo^-w)d06a80@s--_y-&*48(d+d72=5v)yeh'

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "Workshop",
        "USER": "postgres",
        "PASSWORD": "admin",
        "HOST": "127.0.0.1",
        "PORT": "5432",
    }
}

CHA_ENCRYPTION: dict[str, Any] = {
    "key": b'\xa2\xac\x97\x17t`\x90Z\xd7z>:\x10\xd2\x1a\xb5\xbb\xcc\xe4z)\xfc\\\xb80+m8\xc9\xf9N\xbb',
    "nonce": b'\xf0Q\xed\x94y5\x13Y\x84\xff\x85\xdc\xdd\x97\xda\xee\x92\x13\x96\xa5L\xc1\xd55',
}
