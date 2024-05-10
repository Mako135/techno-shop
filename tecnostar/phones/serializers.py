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

class PhoneListSerializer(ModelSerializer):
    photos = SerializerMethodField()

    class Meta:
        model = Phone
        fields = ('id', 'slug', 'title', 'photos')

    def get_photos(self, obj):
        request = self.context.get('request')
        base_url = request.build_absolute_uri('/')[:-1] if request else ''
        photos_data = PhotoSerializer(obj.photos.all(), many=True).data
        for photo in photos_data:
            photo['image'] = base_url + photo['image']
        return photos_data


class PhotoSerializer(ModelSerializer):
    color = ColorSerializer(read_only=True)

    class Meta:
        model = Photo
        fields = ('__all__')



class PhoneSerializer(ModelSerializer):
    network = NetworkSerializer(read_only=True, many=True)
    category = CategorySerializer(read_only=True)
    photos = SerializerMethodField()

    class Meta:
        model = Phone
        fields = ('__all__')
        
    def get_photos(self, obj):
        request = self.context.get('request')
        base_url = request.build_absolute_uri('/')[:-1] if request else ''
        photos_data = PhotoSerializer(obj.photos.all(), many=True).data
        for photo in photos_data:
            photo['image'] = base_url + photo['image']
        return photos_data



class NewsSerializer(ModelSerializer):
    class Meta:
        model = News
        fields = ('__all__')