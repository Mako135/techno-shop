# Generated by Django 5.0.4 on 2024-05-25 11:30

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('phones', '0014_store_rename_title_city_name_phone_inner_link_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='storeurlfield',
            options={'verbose_name': 'Ссылка на покупку ', 'verbose_name_plural': 'Ссылки на покупки'},
        ),
        migrations.AlterField(
            model_name='photo',
            name='color',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='photos', to='phones.color', verbose_name='Цвет'),
        ),
        migrations.AlterField(
            model_name='photo',
            name='image',
            field=models.ImageField(help_text='Загрузите изображение', upload_to='phones', verbose_name='Фото'),
        ),
        migrations.AlterField(
            model_name='storeurlfield',
            name='store',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='phones.store', verbose_name='Магазин'),
        ),
    ]