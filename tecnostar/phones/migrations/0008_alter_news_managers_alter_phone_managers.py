# Generated by Django 5.0.4 on 2024-05-13 15:38

import django.db.models.manager
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('phones', '0007_phone_main_info_kk_phone_main_info_ru'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='news',
            managers=[
                ('published', django.db.models.manager.Manager()),
            ],
        ),
        migrations.AlterModelManagers(
            name='phone',
            managers=[
                ('published', django.db.models.manager.Manager()),
            ],
        ),
    ]
