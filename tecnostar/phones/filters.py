from django_filters.rest_framework import FilterSet
from django_filters import NumberFilter
from phones.models import Phone

class PhoneFilter(FilterSet):
    min_battery = NumberFilter(field_name='battery', lookup_expr='gte')
    max_battery = NumberFilter(field_name='battery', lookup_expr='lte')

    class Meta:
        model = Phone
        fields =(
            'category',
            'display',
            'resolution',
            'memories',
            'front_camera',
            'back_camera',
            'has_touch_id',
            'min_battery',
            'max_battery',
        )

"""
(Единичный)
Filter by series: [Phantom, Camon, Spark, Pova, Pop]
Display: [5.0, 5.5, 5.65, 5.7, 6.0, 6.1, 6.2, 6.35, 6.4] "
5
Память: [8, 16, 32, 64, 128, 256] GB
Фронтальная камера: [8, 13, 16, 20, 24, 32] MP
Основная камера: [5, 8, 13, 16, 21] MP
Отпечаток пальцев: true / false
Батарея: [< 3000, between 3000 and 5000 (include), => 5000] mAh
"""