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



from phones.models import Phone, News, Contact
from phones.serializers import PhoneSerializer, PhoneListSerializer, NewsSerializer, ContactListSerializer
from phones.filters import PhoneFilter, ContactFilter
from phones import services


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
        serializer = NewsSerializer(
            self.queryset, 
            many=True, 
            context={'request': request}
        )
        return Response(serializer.data)
    
    def retrieve(self, request, slug=None):
        try:
            news = generics.get_object_or_404(self.queryset, slug=slug)
        except News.DoesNotExist:
            return Response({
                "error": "Service Center Not Found"
            }, status=status.HTTP_404_NOT_FOUND)
        serializer = NewsSerializer(news, context={'request': request})
        return Response(serializer.data)
    

class ServiceViewSet(viewsets.ModelViewSet):
    """
    Первичный ключ (pk) служит вместо slug
    """
    queryset = services.get_service_center_list(Contact.objects)
    serializer_class = ContactListSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_class = ContactFilter
    search_fields = [
        'title',
        'address_line',
        'phone_line',
        'email_line'
    ]

# phones_view = PhoneViewSet.as_view({'get':'list'})
# phone_detail = PhoneViewSet.as_view({'get':'retrieve'})
# news_view = NewsViewSet.as_view({'get':'list'})
# news_detail = NewsViewSet.as_view({'get':'retrieve'})

