from django.core.mail import EmailMessage
from django.shortcuts import render
from django.utils.translation import gettext as _
# # from django_filters import rest_framework as filters
# from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from django.template.loader import render_to_string
from django.conf import settings



from rest_framework.views import APIView, Response
from rest_framework import mixins, generics, viewsets, permissions
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.filters import SearchFilter, OrderingFilter




from phones.models import Phone, News, Contact, Memory, CameraInfo, Mailing
from phones.serializers import (
    PhoneSerializer, 
    PhoneListSerializer, 
    NewsSerializer, 
    ContactListSerializer, 
    NewsListSerializer, 
    QuestionContactSerializer,
    MemeorySerializer,
    CameraInfoSerializer)
from phones.filters import PhoneFilter, ContactFilter
from phones.throttling import QuestionFormThrottling
from phones import services

import os
from threading import Thread  


class ListApiViewAbstract(generics.ListAPIView):
    permission_classes = (permissions.AllowAny, )

class MemoryList(ListApiViewAbstract):
    queryset = services.get_all_objects(Memory.objects)
    serializer_class = MemeorySerializer

class CameraList(ListApiViewAbstract):
    queryset = services.get_all_objects(CameraInfo.objects)
    serializer_class = CameraInfoSerializer

class PhoneViewSet(viewsets.ModelViewSet):
    queryset = services.get_list_phones(Phone.published)
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
    queryset = services.get_news_list(News.published)
    lookup_field = 'slug' 
    
    def list(self, request):
        serializer = NewsListSerializer(
            self.queryset, 
            many=True, 
            context={'request': request}
        )
        return Response(serializer.data)
    
    def retrieve(self, request, slug=None):
        try:
            news = services.get_news_by_slug(self.queryset, slug)
        except News.DoesNotExist:
            return Response({
                "error": _("Сервис центр не найден")
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


class QuestionContactView(APIView):
    """
    Отправка вопроса на почту:
    - name: имя (str)
    - email: почта (str)
    - question_text: текст вопроса (str)
    - is_followed_mailing: подписка на рассылку (bool)
    """
    permission_classes = [permissions.AllowAny]
    throttle_classes = [QuestionFormThrottling]

    def post(self, request):
        try:
            serializer = QuestionContactSerializer(data=request.data)
            if serializer.is_valid():
                applicant_name = serializer.validated_data['name']
                applicant_email = serializer.validated_data['email']
                applicant_question_text = serializer.validated_data['question_text']
                applicant_follow_status = serializer.validated_data ['is_followed_mailing']

                if applicant_follow_status:
                    Mailing.objects.create(
                        email=applicant_email
                    )


                html = render_to_string('email_form.html', {
                    'name': applicant_name,
                    'email': applicant_email,
                    'question': applicant_question_text
                })

                email = EmailMessage(
                    subject=_(f'Вопрос от {applicant_name} на сайте'),
                    body=html,
                    from_email=os.getenv('EMAIL_HOST_USER'),
                    to=[os.getenv('CUSTOMER_SUPPORT_EMAIL')]
                )
                email.content_subtype = 'html'
                email.send()

                message = _('Сообщение успешно отправлено')
                return Response({'message': message}, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

memory_list = MemoryList.as_view()
camera_list = CameraList.as_view()
question_form = QuestionContactView.as_view()
# phones_view = PhoneViewSet.as_view({'get':'list'})
# phone_detail = PhoneViewSet.as_view({'get':'retrieve'})
# news_view = NewsViewSet.as_view({'get':'list'})
# news_detail = NewsViewSet.as_view({'get':'retrieve'})

