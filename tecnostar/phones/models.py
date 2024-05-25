from django.db import models
from django.utils.translation import gettext as _
from django.conf import settings
from django.utils.text import slugify

from ckeditor.fields import RichTextField
from django.urls import reverse
from django.conf import settings
from django.urls import reverse

from phones.managers import PublishedManager


# Create your models here.

DRAFT = 'draft'
PUBLISHED = 'published'

STATUS_CHOICES = (
    (DRAFT, 'Не активен'),
    (PUBLISHED, 'Активен')
)

class City(models.Model):
    name = models.CharField(_('Название'), max_length=50)
    slug = models.SlugField(max_length=50, unique=True)

    class Meta:
        verbose_name = _('Город')
        verbose_name_plural = _('Города')
    
    def __str__(self):
        return f"{self.name}"
    

class Memory(models.Model):
    size = models.PositiveIntegerField(_("Объем памяти"), help_text=_('Введите объем памяти'))

    class Meta:
        verbose_name = _('Память')
        verbose_name_plural = _('Память')

    def __str__(self) -> str:
        return f"{self.size} GB"


    
class CameraInfo(models.Model):
    megapixels = models.PositiveIntegerField(_('Мегапиксели'), help_text=_('Введите количество мегапикселей'))

    class Meta:
        verbose_name = _('Мегапиксель')
        verbose_name_plural = _('Мегапиксели')
    
    def __str__(self) -> str:
        return f"{self.megapixels} MP"
    

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

    FIVE_INCH = 5.0
    FIVE_FIVE_INCH = 5.5
    FIVE_SIX_FIVE_INCH = 5.65
    FIVE_SEVEN_INCH = 5.7
    SIX_INCH = 6.0
    SIX_ONE_INCH = 6.1
    SIX_TWO_INCH = 6.2
    SIX_THREE_FIVE_INCH = 6.35
    SIX_FOUR_INCH = 6.4

    DISAPLAY_CHOICES = (
        (FIVE_INCH, '5,6"'),
        (FIVE_FIVE_INCH, '5,5"'),
        (FIVE_SIX_FIVE_INCH, '5,65"'),
        (FIVE_SEVEN_INCH, '5,7"'),
        (SIX_INCH, '6"'),
        (SIX_ONE_INCH, '6,1"'),
        (SIX_TWO_INCH, '6,2"'),
        (SIX_THREE_FIVE_INCH, '6,35"'),
        (SIX_FOUR_INCH, '6,4"')
    )

    FHD = 'FHD'
    HD = 'HD'
    FWVGA = 'FWVGA'
    WVGA = 'WVGA'

    RESOLUTION_CHOICES = (
        (FHD, 'FHD'),
        (HD, 'HD'),
        (FWVGA, 'FWVGA'),
        (WVGA, 'WVGA')
    )

    category = models.ForeignKey(Category, related_name='phones', on_delete=models.CASCADE)
    title = models.CharField(_('Название'), max_length=100, help_text=_('Введите название телефона'))
    slug = models.SlugField(max_length=100, unique=True) 
    status = models.CharField(_('Статус на сайте'), max_length=10, choices=STATUS_CHOICES, default=DRAFT)

    display = models.FloatField(_('Дисплей'), choices=DISAPLAY_CHOICES, help_text=_('Выберите диагональ дисплея'), default=FIVE_INCH)

    price = models.FloatField(_('Цена'), help_text=_('Введите цену телефона'), default=100000)
    memories = models.ManyToManyField(
        'Memory', related_name='phones'
    )
    resolution = models.CharField(_('Разрешение'), max_length=10, choices=RESOLUTION_CHOICES, help_text=_('Выберите разрешение экрана'), default=HD)
    front_camera = models.ForeignKey('CameraInfo', related_name='front_camera', on_delete=models.CASCADE, blank=True, null=True)
    back_camera = models.ForeignKey('CameraInfo', related_name='back_camera', on_delete=models.CASCADE, blank=True, null=True)
    has_touch_id = models.BooleanField(_('Есть Touch ID'), default=False)
    battery = models.FloatField(_('Батарея'), help_text=_('Введите емкость батареи'), default=3500)
    inner_link = models.URLField(_(''), max_length = 200, blank=True)
    
    main_info = RichTextField(_('Основная информация'), config_name='awesome_ckeditor', help_text=_('Введите основную информацию о телефоне'))
    characteristics = RichTextField(_('Характеристики'), config_name='awesome_ckeditor',  help_text=_('Введите характеристики телефона'))
    network = models.ManyToManyField(
        'Network', related_name='phones'
    )
    camera_info = RichTextField(_('Камера'), config_name='awesome_ckeditor', help_text=_('Введите информацию о камере'))
    sensors = RichTextField(_('Датчики'), config_name='awesome_ckeditor', help_text=_('Введите информацию о датчиках'))
    kit_info = RichTextField(_('Комплект поставки'), config_name='awesome_ckeditor', help_text=_('Введите информацию о комплекте поставки'))

    published = PublishedManager()

    class Meta:
        verbose_name = _('Телефон')
        verbose_name_plural = _('Телефоны')
    
    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        self.slug = self.slug or slugify(self.title)
        return super().save(*args, **kwargs)

class Store(models.Model):
    name = models.CharField(_('Название'), max_length=100)
    slug = models.SlugField(max_length=100, unique=True) 
    description = models.TextField(_('Описание описание'), blank=True)
    
    class Meta:
        verbose_name = _('Магазин')
        verbose_name_plural = _('Магазины')

    def __str__(self):
        return self.name

class StoreURLField(models.Model):
    store = models.ForeignKey(
        "Store", 
        verbose_name=_("Магазин"), 
        on_delete=models.CASCADE
    )
    link = models.URLField(_('Ссылка на телефон'))
    phone = models.ForeignKey('Phone', related_name='stores', on_delete=models.CASCADE, blank=True, null=True)

    class Meta:
        verbose_name = _('Ссылка на покупку ')
        verbose_name_plural = _('Ссылки на покупки')

    def __str__(self):
        return self.store.name


class Photo(models.Model):
    color = models.ForeignKey(
        'Color', 
        verbose_name=_("Цвет"), 
        related_name='photos', 
        on_delete=models.CASCADE
    )
    image = models.ImageField(
        _("Фото"),
        upload_to='phones', 
        help_text=_('Загрузите изображение')
    )
    phone = models.ForeignKey('Phone', related_name='photos', on_delete=models.CASCADE, blank=True, null=True)

    class Meta:
        verbose_name = _('Фото')
        verbose_name_plural = _('Фото')

    def __str__(self):
        return self.color.name


class News(models.Model):
    SLIDER = 'slider_news'
    SECOND_FORM = 'second_form_news'

    NEWS_TYPE_CHOICES = (
        (SLIDER, 'На слайдере'),
        (SECOND_FORM, 'На основной странице')
    )

    title = models.CharField(_('Название'), max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    pattern = models.CharField(_('Тип'), max_length=20, choices=NEWS_TYPE_CHOICES, default=SECOND_FORM)
    preview_image = models.ImageField(_('Превью'), upload_to='newspapers', help_text=_('Загрузите изображение'), blank=False)
    description = models.TextField(_('Краткое описание'), blank=True)
    content = RichTextField(_('Основной текст'), config_name='awesome_ckeditor', help_text=_('Введите контент'))
    status = models.CharField(_('Статус'), max_length=10, choices=STATUS_CHOICES, default=DRAFT)
    created_at = models.DateTimeField(_('Дата создания'), auto_now_add=True)

    inner_link = models.URLField(_('Ссылка (если имеется)'), max_length = 200, blank=True)
    city = models.ForeignKey('City', verbose_name=_('Местоположение'), on_delete=models.CASCADE, null=True, blank=True)

    published = PublishedManager()

    class Meta:
        verbose_name = _('Новость')
        verbose_name_plural = _('Новости')
        ordering = ['-created_at']

    def __str__(self):
        return self.title

    def get_preview_image(self):
        return f"sdfsdf{self.preview_image.url}"
    
    def save(self, *args, **kwargs):
        self.slug = self.slug or slugify(self.title)
        return super().save(*args, **kwargs)


class Contact(models.Model):
    city = models.ForeignKey(
        'City', 
        verbose_name=_('Город'), 
        on_delete=models.CASCADE
    )
    title = models.CharField(_('Название'), max_length=100, help_text=_('Введите название центра'))
    address_line = models.CharField(_('Адрес'), max_length=255, help_text=_('Введите адрес центра'))
    phone_line = models.CharField(_('Контакты'), max_length=255, help_text=_('Введите контакты (номера для связи)'))
    email_line = models.CharField(_('Почта'), max_length=255, help_text=_('Введите адрес электронной почты'))
    latitude = models.FloatField(_('Широта'), help_text=_('Введите широту'))
    longitude = models.FloatField(_('Долгота'), help_text=_('Введите долготу'))
    
    status = models.CharField(_('Статус сервиса'), max_length=10, choices=STATUS_CHOICES, default=DRAFT)

    class Meta:
        verbose_name = _('Сервисный центр')
        verbose_name_plural = _('Сервисные центры')
        ordering = ('title', )

    def __str__(self):
        return f"{self.title} - {self.address_line}"
    

class Mailing(models.Model):
    email = models.EmailField(_('Электронная почта'), max_length=100, help_text=_('Введите адрес электронной почты'))

    class Meta:
        verbose_name = _('Подписчик')
        verbose_name_plural = _('Подписчики')

    def __str__(self):
        return self.email