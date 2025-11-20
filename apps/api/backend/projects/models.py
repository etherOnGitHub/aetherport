from django.db import models
from django.utils.text import slugify

# Create your models here.
# -------------------------------
# Utilities
# -------------------------------
class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name



# -------------------------------
# Main Model
# -------------------------------
class Project(models.Model):
    # Basic Info
    title = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    tagline = models.CharField(max_length=150, blank=True)
    description = models.TextField(blank=True)
    # Media & Links
    image_url = models.URLField(blank=True)
    gallery_images = models.JSONField(default=list, blank=True)
    tags = models.ManyToManyField(Tag, related_name='projects', blank=True)
    github_link = models.URLField(blank=True)
    live_link = models.URLField(blank=True)
    extra_links = models.JSONField(default=list, blank=True)
    # Status & Metadata
    completed = models.BooleanField(default=False)
    featured = models.BooleanField(default=False)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    class Meta:
        ordering = ['order', '-created_at']