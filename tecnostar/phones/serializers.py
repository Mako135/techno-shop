from rest_framework.serializers import ModelSerializer, Serializer
from rest_framework import serializers
from django.utils.translation import gettext as _


from phones.models import (
    Phone, 
    Category, 
    Color, 
    Network, 
    Photo, 
    News,
    Memory,
    CameraInfo,
    Contact,
    City, 
    Store,
    StoreURLField
)

class CameraInfoSerializer(ModelSerializer):
    class Meta:
        model = CameraInfo
        fields = '__all__'

class MemeorySerializer(ModelSerializer):
    class Meta:
        model = Memory
        fields = '__all__'

class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ColorSerializer(ModelSerializer):
    class Meta:
        model = Color
        fields = '__all__'

class NetworkSerializer(ModelSerializer):
    class Meta:
        model = Network
        fields = '__all__'

class PhotoSerializer(ModelSerializer):
    color = ColorSerializer(read_only=True)
    class Meta:
        model = Photo
        fields = ('__all__')

class CitySerilizer(ModelSerializer):
    class Meta:
        model = City
        fields = ('__all__')

class StoreSerializer(ModelSerializer):
    class Meta:
        model = Store
        fields = ('id', 'name', 'slug')


class StoreLinkSerializer(ModelSerializer):
    store = StoreSerializer(read_only=True)
    class Meta:
        model = StoreURLField
        fields = ('__all__')


class PhoneListSerializer(ModelSerializer):
    photos = PhotoSerializer(read_only=True, many=True)
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Phone
        fields = ('id', 'category', 'slug', 'title', 'photos')


class PhoneSerializer(ModelSerializer):
    network = NetworkSerializer(read_only=True, many=True)
    category = CategorySerializer(read_only=True)
    photos = PhotoSerializer(read_only=True, many=True)
    memories = MemeorySerializer(read_only=True, many=True)
    front_camera = CameraInfoSerializer(read_only=True)
    back_camera = CameraInfoSerializer(read_only=True)
    stores = StoreLinkSerializer(read_only=True, many=True)


    class Meta:
        model = Phone
        fields = (
            'network', 
            'category', 
            'memories', 
            'front_camera', 
            'back_camera', 
            'title', 
            'slug', 
            'main_info', 
            'characteristics', 
            'camera_info', 
            'sensors', 
            'kit_info', 
            'photos',
            'stores'
        )
        


class NewsSerializer(ModelSerializer):
    class Meta:
        model = News
        fields = ('title', 'slug', 'description', 'content', 'created_at', 'pattern', 'preview_image')

class NewsListSerializer(ModelSerializer):
    class Meta:
        model = News
        fields = ('title', 'slug', 'description', 'created_at', 'pattern', 'preview_image')


class CitySerializer(ModelSerializer):
    class Meta:
        model = City
        fields = ('__all__')

class ContactListSerializer(ModelSerializer):
    city = CitySerializer(read_only=True, many=False)
    class Meta:
        model = Contact
        fields = ('__all__')

class QuestionContactSerializer(Serializer):
    name = serializers.CharField(
        max_length=100, write_only=True, help_text=_("Имя"))
    email = serializers.EmailField(max_length=100, help_text=_("Электронная почта"))
    question_text = serializers.CharField(max_length=255, help_text=_("Текст вопроса"))
    is_followed_mailing = serializers.BooleanField(help_text=_('Подписка на рассылку'))
