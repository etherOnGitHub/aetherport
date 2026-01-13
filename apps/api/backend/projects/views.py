from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Project, Tag
from .serialisers import TagsSerialiser, ProjectSerialiser

# Create your views here.
#-------------------------------
# Tags ViewSet
#-------------------------------
class TagsViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all().order_by('name')
    serializer_class = TagsSerialiser
    permission_classes = [IsAuthenticatedOrReadOnly]
#-------------------------------
# projects ViewSet
#-------------------------------
class ProjectViewSet(ReadOnlyModelViewSet):
    queryset = Project.objects.all().order_by("-created_at")
    serializer_class = ProjectSerialiser
    lookup_field = 'slug'