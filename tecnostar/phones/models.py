from django.db import models
from gettext import gettext as _
from django.conf import settings
from django.utils.text import slugify

from ckeditor.fields import RichTextField
from django.urls import reverse
from django.conf import settings
from django.urls import reverse


# Create your models here.

class Category(models.Model):
    name = models.CharField(_('Название'), max_length=100, help_text=_('Введите название категории'))
    slug = models.SlugField(max_length=100, unique=True)
    description = models.TextField('Описание', help_text='Введите описание категории', blank=True)

    class Meta:
        verbose_name = _('Категория')
        verbose_name_plural = _('Категории')

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        self.slug = self.slug or slugify(self.name)
        return super().save(*args, **kwargs)

class Color(models.Model):
    name = models.CharField(_('Название цвета'), max_length=100, help_text=_('Введите название цвета'))
    slug = models.SlugField(max_length=100, unique=True)

    class Meta:
        verbose_name = _('Цвет')
        verbose_name_plural = _('Цвета')

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        self.slug = self.slug or slugify(self.name)
        return super().save(*args, **kwargs)
    

class Network(models.Model):
    name = models.CharField(_('Название сети'), max_length=100, help_text=_('Введите название сети'))
    slug = models.SlugField(max_length=100, unique=True)

    class Meta:
        verbose_name = _('Сеть')
        verbose_name_plural = _('Сети')

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        self.slug = self.slug or slugify(self.name)
        return super().save(*args, **kwargs)

class Phone(models.Model):
    DRAFT = 'draft'
    PUBLISHED = 'published'

    STATUS_CHOICES = (
        (DRAFT, 'Не активен'),
        (PUBLISHED, 'Активен')
    )

    category = models.ForeignKey(Category, related_name='phones', on_delete=models.CASCADE)
    title = models.CharField(_('Название'), max_length=100, help_text=_('Введите название телефона'))
    slug = models.SlugField(max_length=100, unique=True) 
    status = models.CharField(_('Статус'), max_length=10, choices=STATUS_CHOICES, default=DRAFT)

    main_info = RichTextField(_('Основная информация'), config_name='awesome_ckeditor', help_text=_('Введите основную информацию о телефоне'))
    characteristics = RichTextField(_('Характеристики'), config_name='awesome_ckeditor',  help_text=_('Введите характеристики телефона'))
    network = models.ManyToManyField(
        'Network', related_name='phones'
    )
    camera_info = RichTextField(_('Камера'), config_name='awesome_ckeditor', help_text=_('Введите информацию о камере'))
    sensors = RichTextField(_('Датчики'), config_name='awesome_ckeditor', help_text=_('Введите информацию о датчиках'))
    kit_info = RichTextField(_('Комплект поставки'), config_name='awesome_ckeditor', help_text=_('Введите информацию о комплекте поставки'))


    class Meta:
        verbose_name = _('Телефон')
        verbose_name_plural = _('Телефоны')
    
    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        self.slug = self.slug or slugify(self.title)
        return super().save(*args, **kwargs)


class Photo(models.Model):
    color = models.ForeignKey(Color, related_name='photos', on_delete=models.CASCADE)
    image = models.ImageField(_(''), upload_to='phones', help_text=_('Загрузите изображение'))
    phone = models.ForeignKey('Phone', related_name='photos', on_delete=models.CASCADE, blank=True, null=True)

    class Meta:
        verbose_name = _('Фото')
        verbose_name_plural = _('Фото')

    def __str__(self):
        return self.color.name
    
    @property
    def image_url(self):
        if self.image:
            return self.image.url
        return None


class News(models.Model):
    
    DRAFT = 'draft'
    PUBLISHED = 'published'

    STATUS_CHOICES = (
        (DRAFT, 'Не активен'),
        (PUBLISHED, 'Активен')
    )


    title = models.CharField(_('Название'), max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    preview_image = models.ImageField(_('Превью'), upload_to='newspapers', help_text=_('Загрузите изображение'), blank=False)
    description = models.TextField(_('Описание'), blank=True,)
    content = RichTextField(_('Контент'), config_name='awesome_ckeditor', help_text=_('Введите контент'))
    status = models.CharField(_('Статус'), max_length=10, choices=STATUS_CHOICES, default=DRAFT)
    created_at = models.DateTimeField(_('Дата создания'), auto_now_add=True)

    class Meta:
        verbose_name = _('Новость')
        verbose_name_plural = _('Новости')
        ordering = ['-created_at']

    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        self.slug = self.slug or slugify(self.title)
        return super().save(*args, **kwargs)

"""
Цвета:
model Color, Photos

Сводная инфоормация:
- Описание цвета:
    AdminSummernote
- Характеристики:
    AdminSummernote
- Сеть и подключение:
    ManyToManyField with related_name='networks'
- Камера:
    AdminSummernote
- Датчики:
    AdminSummernote
- Комплект поставки:
    AdminSummernote
"""