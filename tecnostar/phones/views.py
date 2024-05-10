from django.shortcuts import render
# from rest_framework.views import APIView, Response
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.response import Response
# from rest_framework import status
from django.utils.translation import gettext as _
from rest_framework.decorators import api_view

from phones.models import Phone, News
from phones.serializers import PhoneSerializer, PhoneListSerializer, NewsSerializer



# TODO:
#Optimize by principal of DRY and migrate to functional views

class PhoneList(ListAPIView):
    queryset = Phone.objects.filter(status='published')
    serializer_class = PhoneListSerializer

class PhoneDetailPage(RetrieveAPIView):
    queryset = Phone.objects.filter(status='published')
    serializer_class = PhoneSerializer
    lookup_field = 'slug'

class NewsList(ListAPIView):
    queryset = News.objects.filter(status='published')
    serializer_class = NewsSerializer

class NewsDetailPage(RetrieveAPIView):
    queryset = News.objects.filter(status='published')
    serializer_class = NewsSerializer
    lookup_field = 'slug'


@api_view(['GET'])
def home(request):
    return Response({"lanuage":_('Привет')})



