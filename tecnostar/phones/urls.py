from django.urls import path, include
from phones.views import PhoneList, PhoneDetailPage, NewsList, NewsDetailPage, home

urlpatterns = [
    path('phones/', PhoneList.as_view(), name='phones'),
    path('phones/<slug:slug>/', PhoneDetailPage.as_view(), name='phone_detail'),
    path('news/', NewsList.as_view(), name='news'),
    path('news/<slug:slug>/', NewsDetailPage.as_view(), name='news_detail'),
    path('i18-test/', home, name='home')
]
