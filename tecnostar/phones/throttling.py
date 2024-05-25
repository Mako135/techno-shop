from rest_framework.throttling import AnonRateThrottle, UserRateThrottle
from rest_framework import status

class QuestionFormThrottling(UserRateThrottle):
    scope = 'question_form'
    
    def allow_request(self, request, view):
        if request.method == 'POST':
            return super().allow_request(request, view)
        return True