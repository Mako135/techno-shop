"""
Django settings for tecnostar project.

Generated by 'django-admin startproject' using Django 4.1.1.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.1/ref/settings/
"""

from pathlib import Path
from django.utils.translation import gettext_lazy as _
from dotenv import load_dotenv
import os
load_dotenv()

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.getenv('DEBUG')
SIDE_ID = 1
ALLOWED_HOSTS = [
    'tecno-mobile.kz', 'api.tecno-mobile.kz', 
    'www.tecno-mobile.kz','localhost'
]
DOMAIN = os.getenv('DOMAIN')

# CORS and CSRF Settings
CSRF_TRUSTED_ORIGINS = [
        'http://*.tecno-mobile.kz',
        'https://*.tecno-mobile.kz',
        'https://*.tecno-mobile.kz',
]
CSRF_COOKIE_SECURE = os.getenv('CSRF_COOKIE_SECURE')


CORS_ALLOWED_ORIGINS = [
    'http://tecno-mobile.kz',
    'https://tecno-mobile.kz',
    'https://www.tecno-mobile.kz',
]

CORS_ALLOW_CREDENTIALS = True
SESSION_COOKIE_SECURE = os.getenv('SESSION_COOKIE_SECURE')

# Application definition
INSTALLED_APPS = [
    'grappelli',
    'modeltranslation',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Third party apps
    'drf_yasg',
    'rest_framework',
    'corsheaders',
    'ckeditor',
    'rosetta',
    'django_filters',
    'djangoql',
    'admin_reorder',
    'colorfield',

    # Local apps
    'phones',

]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',

    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'admin_reorder.middleware.ModelAdminReorder',

]

ROOT_URLCONF = 'tecnostar.urls'
LOCALE_PATHS = [
    BASE_DIR / 'locale'
]

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                
            ],
        },
    },
]

WSGI_APPLICATION = 'tecnostar.wsgi.application'
WEBSITE_URL = os.getenv('WEBSITE_URL')


# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': os.getenv('DB_NAME'),
#         'USER': os.getenv('DB_USER'),
#         'PASSWORD': os.getenv('DB_PASSWORD'),
#         'HOST': os.getenv('DB_HOST'),
#         'PORT': os.getenv('DB_PORT'),
#     }
# }

# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = 'ru-RU'
LANGUAGES = [
    ('ru', _('Russian')),
    ('kk', _('Kazakh')),
]
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True


# Model translation
MODELTRANSLATION_DEFAULT_LANGUAGE = 'ru'
MODELTRANSLATION_LANGUAGES = ('ru', 'kk')
MODELTRANSLATION_TRANSLATION_REGISTRY = 'phones.translation'


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')


# CKEditor settings
CKEDITOR_BASEPATH = "/static/ckeditor/ckeditor/"
CKEDITOR_UPLOAD_PATH = "uploads/"
CKEDITOR_FILENAME_GENERATOR = 'utils.get_filename'

CKEDITOR_CONFIGS = {
    'awesome_ckeditor': {
        'toolbar': 'Custom',
        'height': 220,
        'skin': 'moono',
    },
    'default': {
        'toolbar':'Full',
    }
}


REST_FRAMEWORK = {
    'DATETIME_FORMAT': '%d-%m-%Y',
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ],
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
    ],
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
        'rest_framework.renderers.BrowsableAPIRenderer',
    ],
    'DEFAULT_THROTTLE_RATES': {
        'question_form': '3/min'
    },

}

SWAGGER_SETTINGS = {
    'SECURITY_DEFINITIONS': {
        'Basic': {
            'type': 'basic'
        }
    }
}

# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

EMAIL_HOST = os.getenv('EMAIL_HOST')
EMAIL_PORT = os.getenv('EMAIL_PORT')
EMAIL_HOST_USER = os.getenv('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = os.getenv('EMAIL_HOST_PASSWORD')
DEFAULT_FROM_EMAIL = os.getenv('DEFAULT_FROM_EMAIL')
EMAIL_USE_TLS = os.getenv('EMAIL_USE_TLS')


# Grappelli settings
GRAPPELLI_ADMIN_TITLE = os.getenv('GRAPPELLI_ADMIN_TITLE')
GRAPPELLI_CLEAN_INPUT_TYPES = os.getenv('GRAPPELLI_CLEAN_INPUT_TYPES')

ADMIN_REORDER = (
    'sites',

    {'app': 'phones', 
    'label': 'Дополнительные модели',
    'models': (
        'phones.Memory',
        'phones.Category',
        'phones.CameraInfo',
        'phones.Color',
        'phones.Network',
        'phones.Photo',
        'phones.Mailing',
        'phones.StoreURLField',
    )},
    
    {'app': 'phones', 
    'label': 'Основные модели',
    'models': (
        'phones.City',
        'phones.Phone',
        'phones.Contact',
        'phones.News',
        'phones.Store'
    )},


    {'app': 'auth', 'label': 'Авторизация'},

    
)