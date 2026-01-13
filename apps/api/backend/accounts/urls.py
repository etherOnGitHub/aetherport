from django.urls import path
from .views import (LoginView, LogoutView, RefreshView, RegisterView, MeView)

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('refresh/', RefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='register'),
    path('account/', MeView.as_view(), name='account'),
]