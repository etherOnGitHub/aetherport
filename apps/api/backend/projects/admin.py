from django.contrib import admin
from .models import Tag, Project

# Register your models here.
admin.site.site_header = "AetherPort Projects Admin"
admin.site.site_title = "AetherPort Projects Admin Portal"
admin.site.index_title = "Welcome to AetherPort Projects Admin"
admin.site.empty_value_display = "- Data field is empty -"

@admin.register(Tag)
class TagsAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)
    

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'featured', 'order', 'created_at')
    search_fields = ('title', 'tagline',)
    list_filter = ('featured', 'completed',)
    ordering = ('order', '-created_at')
    filter_horizontal = ('tags',)