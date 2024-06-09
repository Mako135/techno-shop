from django.contrib import admin
from django.urls import reverse
from django.utils.html import format_html
from djangoql.admin import DjangoQLSearchMixin

from mptt.admin import MPTTModelAdmin
from modeltranslation.admin import TranslationAdmin



from phones.models import (
    Category, 
    Color, 
    Photo,
    Network, 
    Phone, 
    News, 
    CameraInfo, 
    Memory,
    City,
    Contact,
    Store,
    StoreURLField,
    Mailing
)

# Register your models here.



class AbstractAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    search_fields = ('name', )
    prepopulated_fields = {'slug': ('name',)}

    class Meta:
        abstract = True

@admin.register(Color)
class ColorAdmin(AbstractAdmin):
    pass

@admin.register(Network)
class NetworkAdmin(AbstractAdmin):
    list_display = ('name',)
    search_fields = ('name', )

@admin.register(Category)
class CategoryAdmin(AbstractAdmin):
    pass

@admin.register(Store)
class StoreAdmin(AbstractAdmin):
    pass

@admin.register(City)
class CityAdmin(AbstractAdmin):
    pass

class LinkAdmin(admin.TabularInline):
    classes = ('grp-collapse grp-open',)
    model = StoreURLField
    extra = 0

class PhotoAdmin(admin.TabularInline):
    classes = ('grp-collapse grp-open',)
    model = Photo
    extra = 0

@admin.register(Memory)
class MemoryAdmin(admin.ModelAdmin):
    list_display = ('size', )
    search_fields = ('size', )

class PhoneAdmin(TranslationAdmin, admin.ModelAdmin):

    # Настроики отображения в админке
    list_display = ('title', 'category', 'display', 'status', 'display_phone_url', )
    list_select_related = ('category',)
    list_filter = ('status', 'network', 'category',)
    readonly_fields = ('display_phone_url',)
    search_fields = ('title',)
    prepopulated_fields = {'slug': ('title',)}
    inlines = [PhotoAdmin, LinkAdmin]

    # Настройки заполнения полей
    radio_fields = {
        'category': admin.HORIZONTAL,
        'display': admin.HORIZONTAL,
        'resolution': admin.HORIZONTAL,
        'front_camera': admin.HORIZONTAL,
        'back_camera': admin.HORIZONTAL,
    }
    autocomplete_fields = ['memories', 'network']

    add_fieldsets = (
        ('Основные характеристики (ТЕХНИЧЕСКИЕ)', {
            'classes': ('wide',),
            'fields': ('category', 'title', 'slug', 'price', 'display', 'memories', 'resolution', 'network', 'front_camera', 'back_camera', 'has_touch_id', 'battery', )
        }),
        ('Подробное описание (ПОДДЕРЖИВАЕТ МНОГОЯЗЫЧНОСТЬ)', {
            'classes': ('wide',),
            'fields':  ('operating_system', 
            'cpu_info',
            'size',
            'display_info',
            'resolution_info',
            'camera_info',
            'connection',
            'sensors',
            'battery_info',
            'sound_info',
            'cellurral_info',
            'audio_video_info',
            'complete_set',
            'biometric_info',
            'parameters_info',
            'record_video',
            'possible_connection',)
        })
    )

    fieldsets = (
        ('Основные характеристики (ТЕХНИЧЕСКИЕ)', {
            'classes': ('grp-collapse grp-open',),
            'fields': ('category', 'title', 'slug', 'price','status', 'display', 'memories', 'resolution', 'network', 'front_camera', 'back_camera', 'has_touch_id', 'battery')
        }),
        ('Подробное описание (ПОДДЕРЖИВАЕТ МНОГОЯЗЫЧНОСТЬ)', {
            'classes': ('grp-collapse grp-open',),
            'fields': ('operating_system', 
            'cpu_info',
            'size',
 
            'resolution_info',
            'camera_info',
            'connection',
            'sensors',
            'battery_info',
            'display_info',
            'sound_info',
            'cellurral_info',
            'audio_video_info',
            'complete_set',
            'biometric_info',
            'parameters_info',
            'record_video',
            'possible_connection',)
        })
    )

    def display_phone_url(self, obj):
        link = reverse('phone-detail', args=[obj.slug])
        return format_html('<a href="{}">Смотреть на сайте</a>', link, obj.slug)
    
    display_phone_url.short_description = 'Ссылка на сайте'


# TODO: Исправить ссылку по требованям фронтенда

class NewsAdmin(TranslationAdmin, admin.ModelAdmin):
    list_display = ('title', 'pattern', 'status', 'created_at', 'display_news_url')
    search_fields = ('title', )
    prepopulated_fields = {'slug': ('title',)}
    list_filter = ('created_at', 'pattern')

    def display_news_url(self, obj):
        link = reverse('news-detail', args=[obj.slug])
        return format_html('<a href="{}">Смотреть на сайте</a>', link, obj.slug)
    
    display_news_url.short_description = 'Ссылка на сайте'


admin.site.register(Photo)
admin.site.register(Contact)
admin.site.register(Mailing)
admin.site.register(CameraInfo)
admin.site.register(Phone, PhoneAdmin) 
admin.site.register(News, NewsAdmin)
