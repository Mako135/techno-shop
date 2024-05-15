from django.shortcuts import render
from django.utils.translation import gettext as _
# # from django_filters import rest_framework as filters
# from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend


# from rest_framework.views import APIView, Response
from rest_framework import mixins, generics, viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.filters import SearchFilter, OrderingFilter



from phones.models import Phone, News
from phones.serializers import PhoneSerializer, PhoneListSerializer, NewsSerializer
from phones.filters import PhoneFilter


class PhoneViewSet(viewsets.ModelViewSet):
    queryset = Phone.published.all()
    lookup_field = 'slug'
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_class = PhoneFilter
    search_fields = [
        'title', 
        'category__name', 
        'display',
        'resolution',
        'main_info',
        'characteristics',
        'camera_info',
        'sensors',
        'kit_info'
    ]
    

    def get_serializer_class(self):
        if self.action == 'list':
            return PhoneListSerializer
        return PhoneSerializer
    


class NewsViewSet(viewsets.ViewSet):
    queryset = News.published.all()
    lookup_field = 'slug' 
    
    def list(self, request):
        serializer = NewsSerializer(self.queryset, many=True, context={'request': request})
        return Response(serializer.data)
    
    def retrieve(self, request, slug=None):
        news = generics.get_object_or_404(self.queryset, slug=slug)
        serializer = NewsSerializer(news, context={'request': request})
        return Response(serializer.data)
    

@api_view(['GET'])
def get_phone_by_params(request):
    try:
        model = request.data['model']
        print(f"Model: {model}")
        result = Phone.published.filter(category__name=model)
        print(f"DATA: {result}")
        return Response(data={"key":"success"}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response(str(e), status=status.HTTP_400_BAD_REQUEST)


# phones_view = PhoneViewSet.as_view({'get':'list'})
# phone_detail = PhoneViewSet.as_view({'get':'retrieve'})
# news_view = NewsViewSet.as_view({'get':'list'})
# news_detail = NewsViewSet.as_view({'get':'retrieve'})

