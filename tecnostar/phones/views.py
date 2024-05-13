from django.shortcuts import render
# from rest_framework.views import APIView, Response
from rest_framework import mixins, generics, viewsets
from rest_framework.response import Response
# from rest_framework import status
from django.utils.translation import gettext as _
from rest_framework.decorators import api_view

from phones.models import Phone, News
from phones.serializers import PhoneSerializer, PhoneListSerializer, NewsSerializer



class PhoneViewSet(viewsets.ViewSet):
    queryset = Phone.published.all()
    lookup_field = 'slug'
    
    def list(self, request):
        serializer = PhoneListSerializer(self.queryset, many=True, context={'request': request})
        return Response(serializer.data)
    
    def retrieve(self, request, slug=None):
        phone = generics.get_object_or_404(self.queryset, slug=slug)
        serializer = PhoneSerializer(phone, context={'request': request})
        return Response(serializer.data)
    


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
    


# def get(self, request):

#         try:
#             manufactor = request.GET.get('manufactor')
#             ram = request.GET.get('ram')
#             cores = request.GET.get('cores')
#             response = self.parser.getPhones(manufactor, ram, cores)

#             return Response(data=response, status=status.HTTP_200_OK)
#         except Exception as e:
#             return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

# phones_view = PhoneViewSet.as_view({'get':'list'})
# phone_detail = PhoneViewSet.as_view({'get':'retrieve'})
# news_view = NewsViewSet.as_view({'get':'list'})
# news_detail = NewsViewSet.as_view({'get':'retrieve'})

