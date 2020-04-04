from django.db import models

# Create your models here.

class Artist(models.Model):
    name = models.CharField(max_length=100)
    band = models.CharField(max_length=100)
    image = models.CharField(max_length=1000)
    wiki = models.CharField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
