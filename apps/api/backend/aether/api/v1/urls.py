from django.urls import path, include
from rest_framework.routers import DefaultRouter

from projects.views import ProjectViewSet, TagsViewSet
from core.views import rootView

router = DefaultRouter()
router.register(r'projects', ProjectViewSet, basename='projects')
router.register(r'tags', TagsViewSet, basename='tags')

urlpatterns = [
    path('', rootView.as_view(), name='api-root'),
    path('', include(router.urls)),

]
