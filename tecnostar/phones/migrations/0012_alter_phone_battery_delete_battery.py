# Generated by Django 5.0.4 on 2024-05-15 12:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('phones', '0011_battery_camerainfo_memory_phone_display_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='phone',
            name='battery',
            field=models.FloatField(default=3500, help_text='Введите емкость батареи', verbose_name='Батарея'),
        ),
        migrations.DeleteModel(
            name='Battery',
        ),
    ]