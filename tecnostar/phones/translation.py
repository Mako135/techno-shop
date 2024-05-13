from modeltranslation.translator import translator, TranslationOptions
from phones.models import Phone, News


class PhoneTranslationOptions(TranslationOptions):
    fields = ('title','main_info', 'characteristics', 
              'camera_info', 'sensors', 'kit_info')
    required_languages = ('ru', 'kk')

class NewsTranslationOptions(TranslationOptions):
    fields = ('title', 'description', 'content')
    required_languages = ('ru', 'kk')

translator.register(Phone, PhoneTranslationOptions)
translator.register(News, NewsTranslationOptions)