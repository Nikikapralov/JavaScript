from .config_env import DATABASE_PASSWORD

DATABASE = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "Workshop_2",
        "USER": "postgres",
        "PASSWORD": DATABASE_PASSWORD,
        "HOST": "127.0.0.1",
        "PORT": "5432",
    }
}

# python -m pip install "psycopg[binary]"