# Generated by Django 5.0.4 on 2024-05-26 09:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('phones', '0016_mailing'),
    ]

    operations = [
        migrations.AlterField(
            model_name='phone',
            name='inner_link',
            field=models.URLField(blank=True, verbose_name='Внутренняя ссылка'),
        ),
    ]
