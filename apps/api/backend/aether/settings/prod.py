from .base import * 
from urllib.parse import urlparse

DEBUG = False

FLY = os.environ.get("FLYIO_HOST")

FLYURL = f"{FLY}.fly.dev" if FLY else None

ALLOWED_HOSTS = [
    FLYURL,
    "localhost",
    "127.0.0.1",
    "api.aetherwave.dev",
]

ALLOWED_HOSTS = [host for host in ALLOWED_HOSTS if host] # Remove any None values so no type errors occur

print("Using PROD database")
DATABASE_URL = os.environ.get("PROD_DATABASE_URL")
if DATABASE_URL:
    parsed = urlparse(DATABASE_URL)
    DATABASES = {
        'default': {
            "ENGINE": "django.db.backends.postgresql",
            "NAME": parsed.path.lstrip('/'),
            "USER": parsed.username,
            "PASSWORD": parsed.password,
            "HOST": parsed.hostname,
            "PORT": parsed.port or "5432",
            "OPTIONS": {
                "sslmode": "require",
            },
        }
    }

if FLY:
    CSRF_TRUSTED_ORIGINS = [f"https://{FLYURL}"]
else:
    CSRF_TRUSTED_ORIGINS = []