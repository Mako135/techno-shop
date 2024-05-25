from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter

from phones.views import PhoneViewSet, NewsViewSet, ServiceViewSet, camera_list, memory_list

router = DefaultRouter()
router.register('phones', PhoneViewSet, basename='phone')
router.register('news', NewsViewSet, basename='news')
router.register('contacts', ServiceViewSet, basename='contacts')
urlpatterns = router.urls
urlpatterns = [
    path('memories/', memory_list),
    path('cameras/', camera_list)
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

