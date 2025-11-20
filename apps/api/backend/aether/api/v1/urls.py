from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from projects.views import ProjectViewSet, TagsViewSet
from core.views import rootView

router = DefaultRouter()
router.register(r'projects', ProjectViewSet, basename='projects')
router.register(r'tags', TagsViewSet, basename='tags')

urlpatterns = [
    # default root
    path('', rootView.as_view(), name='api-root'),
    # CRUD routes
    path('', include(router.urls)),
    # JWT Auth
    path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

]
