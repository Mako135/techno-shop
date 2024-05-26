# Generated by Django 5.0.4 on 2024-05-25 12:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('phones', '0015_alter_storeurlfield_options_phone_price_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Mailing',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(help_text='Введите адрес электронной почты', max_length=100, verbose_name='Электронная почта')),
            ],
            options={
                'verbose_name': 'Подписчик',
                'verbose_name_plural': 'Подписчики',
            },
        ),
    ]