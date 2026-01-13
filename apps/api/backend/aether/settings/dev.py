from .base import *
from urllib.parse import urlparse, parse_qs

DEBUG = True

CORS_ALLOW_ALL_ORIGINS = True

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv("DJANGO_SECRET_KEY", "your-default-secret-key")

ALLOWED_HOSTS = ["*"]

DATABASE_URL = os.environ.get("DEV_DATABASE_URL")


if DATABASE_URL:
    stripURL = DATABASE_URL.split('?')[0]
    parsed = urlparse(stripURL)
    print("Using DEV database")
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

else:
    print("Using fallback database, DEV url could not be parsed.")
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.sqlite3",
            "NAME": BASE_DIR / "db.sqlite3",
        }
    }
    
    