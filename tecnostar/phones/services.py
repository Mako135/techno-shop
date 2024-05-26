from phones import models
from rest_framework import generics

def defer_objects_decorators(func:callable):
    def defer_objects_wrapper(objects, defer=(), *args, **kwargs):
        result = func(objects, *args, **kwargs)
        if result is not None:
            return result.defer(*defer) if defer else result
        else:
            return None
    return defer_objects_wrapper


def only_objects_decorator(func: callable):
    def only_objects_wrapper(objects, only=(), *args, **kwargs):
        result = func(objects, *args, **kwargs)
        if result is not None:
            return result.only(*only) if only else result
        else:
            return None
    return only_objects_wrapper



@defer_objects_decorators
@only_objects_decorator
def get_all_objects(objects):
    return objects.all()


def get_list_phones(objects):
    phones = get_all_objects(
        objects, 
        only=('category', 'title', 'slug', 'status')
    )
    return phones.filter(status=models.PUBLISHED)

def get_news_list(objects):
    return get_all_objects(objects)\
        .defer('content')

def get_news_by_slug(objects, slug):
    queryset = get_news_list(objects)
    return generics.get_object_or_404(
        queryset=queryset,
        slug=slug
    )

def get_service_center_list(objects):
    objects = get_all_objects(objects)
    return objects.filter(status=models.PUBLISHED)

