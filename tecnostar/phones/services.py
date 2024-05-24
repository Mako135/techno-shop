from phones import models


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
    return get_all_objects(
        objects, 
        only=('category', 'title', 'slug', 'status')
    )

def get_phone_by_slug(objects, slug):
    return defer_objects_decorators(objects.get)(slug=slug) \
        .defer('front_camera', )

def get_service_center_list(objects):
    objects = get_all_objects(objects)
    return objects.filter(status=models.PUBLISHED)

def get_service_center_by_city(objects, city_slug):
    return objects.filter(
        city__slug=city_slug, 
        status=models.PUBLISHED
    )
