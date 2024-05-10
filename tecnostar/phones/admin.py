from django.contrib import admin
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

@admin.register(Phone)
class PhoneAdmin(admin.ModelAdmin):
    list_filter = ('title', 'network', 'category',)
    search_fields = ('title', )
    prepopulated_fields = {'slug': ('title',)}
    inlines = [PhotoAdmin]

admin.site.register(Photo)

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')
    search_fields = ('title', )
    prepopulated_fields = {'slug': ('title',)}
    list_filter = ('created_at', )
