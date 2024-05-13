from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter

from phones.views import PhoneViewSet, NewsViewSet

router = DefaultRouter()
router.register('phones', PhoneViewSet, basename='phone')
router.register('news', NewsViewSet, basename='news')
urlpatterns = router.urls
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

