from django.shortcuts import render
from rest_framework import viewsets
from .models import Project, Tag
from .serialisers import TagsSerialiser, ProjectSerialiser

# Create your views here.
#-------------------------------
# Tags ViewSet
#-------------------------------
class TagsViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all().order_by('name')
    serialiser_class = TagsSerialiser
#-------------------------------
# projects ViewSet
#-------------------------------
class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all().order_by("-created_at")
    serializer_class = ProjectSerialiser