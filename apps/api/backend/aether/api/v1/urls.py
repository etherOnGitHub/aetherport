from django.urls import path, include
from core.views import rootView

urlpatterns = [
    path('', rootView.as_view(), name='api-root'),
]
