from django.urls import path, include

urlpatterns = [
    path('v1/', include("aether.api.v1.urls")),
]