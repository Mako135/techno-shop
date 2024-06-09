from modeltranslation.translator import translator, TranslationOptions
from phones.models import Phone, News


class PhoneTranslationOptions(TranslationOptions):
    fields = ('title',
              'operating_system', 
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
              'possible_connection'
              )
    required_languages = ('ru', 'kk')

class NewsTranslationOptions(TranslationOptions):
    fields = ('title', 'description', 'content')
    required_languages = ('ru', 'kk')

translator.register(Phone, PhoneTranslationOptions)
translator.register(News, NewsTranslationOptions)