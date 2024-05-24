from email.message import EmailMessage
from django.shortcuts import render
from django.utils.translation import gettext as _
# # from django_filters import rest_framework as filters
# from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from django.template.loader import render_to_string



from rest_framework.views import APIView, Response
from rest_framework import mixins, generics, viewsets, permissions
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.filters import SearchFilter, OrderingFilter



from phones.models import Phone, News, Contact
from phones.serializers import PhoneSerializer, PhoneListSerializer, NewsSerializer, ContactListSerializer, NewsListSerializer, QuestionContactSerializer
from phones.filters import PhoneFilter, ContactFilter
from phones import services

import os
from threading import Thread  



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

# user = request.user
#         email = request.user.email
#         subject = "Подтверждение почты"
#         message = render_to_string('users/verify_email_message.html', {
#                 'request': request,
#                 'user': user,
#                 'domain': current_site.domain,
#                 'uid':urlsafe_base64_encode(force_bytes(user.pk)),
#                 'token':account_activation_token.make_token(user),
#         })
#         email = EmailMessage(
#             subject, message, to=[email]
#         )
#         email.content_subtype = 'html'
#         email.send()

#         context =  {
#             "status" : "На вашу почту была отправлена инструкция для активации аккаунта"
#         }
#     else:
#         context =  {
#             "status" : "Ваш аккаунт уже был подтвержден."
#         }
    
# @method_decorator(ensure_csrf_cookie, name='dispatch')
class QuestionContactView(APIView):
    permission_classes = [permissions.AllowAny]
    # throttle_classes = [ContactThrottling]

    def send_email_async(self, html, email_subject):
        email = EmailMessage(
            subject=email_subject,
            body=html,
            from_email=settings.EMAIL_HOST_USER,
            to=[os.getenv('CUSTOMER_EMAIL')]
        )
        email.content_subtype = 'html'
        email.send()

    def post(self, request):
        serializer = QuestionContactSerializer(data=request.data)
        if serializer.is_valid():
            applicant_name = serializer.validated_data['name']
            applicant_email = serializer.validated_data['email']
            applicant_question_text = serializer.validated_data['question_text']
            applicant_follow_status = serializer.validated_data['is_followed_mailing']

            html = render_to_string('question.html', {
                'name': applicant_name,
                'email': applicant_email,
                'question': applicant_question_text
            })

            email_subject = f"Вопрос от клиента: {applicant_email}"

            
            email_thread = Thread(target=self.send_email_async, args=(html, email_subject))
            email_thread.start()

            message = _('Message was sent successfully')
            return Response({'message': message}, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


# phones_view = PhoneViewSet.as_view({'get':'list'})
# phone_detail = PhoneViewSet.as_view({'get':'retrieve'})
# news_view = NewsViewSet.as_view({'get':'list'})
# news_detail = NewsViewSet.as_view({'get':'retrieve'})

