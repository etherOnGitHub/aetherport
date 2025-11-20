from rest_framework import serializers
from projects.models import Project, Tag

# -------------------------------
# Utility Serializers
# -------------------------------

class TagsSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name']



# -------------------------------
# Project Serializers
# -------------------------------

class ProjectSerialiser(serializers.ModelSerializer):
    tags = TagsSerialiser(many=True, read_only=True)

    class Meta:
        model = Project
        fields = "__all__"