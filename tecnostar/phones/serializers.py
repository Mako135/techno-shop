from rest_framework.serializers import ModelSerializer
from rest_framework.serializers import SerializerMethodField


from phones.models import Phone, Category, Color, Network, Photo, News

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


class PhoneListSerializer(ModelSerializer):
    photos = PhotoSerializer(read_only=True, many=True)

    class Meta:
        model = Phone
        fields = ('id', 'slug', 'title', 'photos')




class PhoneSerializer(ModelSerializer):
    network = NetworkSerializer(read_only=True, many=True)
    category = CategorySerializer(read_only=True)
    photos = PhotoSerializer(read_only=True, many=True)

    class Meta:
        model = Phone
        fields = ('network', 'category', 'title', 'slug', 'main_info', 'characteristics', 'camera_info', 'sensors', 'kit_info', 'photos')
        





class NewsSerializer(ModelSerializer):
    class Meta:
        model = News
        fields = ('title', 'slug', 'description', 'content', 'created_at', 'pattern', 'preview_image')


