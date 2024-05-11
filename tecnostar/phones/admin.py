from django.contrib import admin
from mptt.admin import MPTTModelAdmin
from modeltranslation.admin import TranslationAdmin
from phones.models import Category, Color, Photo, Network, Phone, News

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
    pass

@admin.register(Category)
class CategoryAdmin(AbstractAdmin):
    pass


class PhotoAdmin(admin.TabularInline):
    model = Photo
    extra = 0


class PhoneAdmin(TranslationAdmin, admin.ModelAdmin):
    list_display = ('title',)
    list_filter = ('title', 'network', 'category',)
    search_fields = ('title', )
    prepopulated_fields = {'slug': ('title',)}
    inlines = [PhotoAdmin]

    
    # class Media:
    #     js = (
    #         '/static/modeltranslation/js/force_jquery.js',
    #         'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.2/jquery-ui.min.js',
    #         '/static/modeltranslation/js/tabbed_translation_fields.js',
    #     )
    #     css = {
    #         'screen': ('/static/modeltranslation/css/tabbed_translation_fields.css',),
    #     }

admin.site.register(Photo)
admin.site.register(Phone, PhoneAdmin) 

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')
    search_fields = ('title', )
    prepopulated_fields = {'slug': ('title',)}
    list_filter = ('created_at', )



