from django.db import models

# Create your models here.

class Pedal(models.Model):
    brand = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    image = models.CharField(max_length=1000)
    description = models.CharField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)


class Artist(models.Model):
    name = models.CharField(max_length=100)
    band = models.CharField(max_length=100)
    image = models.CharField(max_length=1000)
    wiki = models.CharField(max_length=1000)
    pedals = models.ManyToManyField(Pedal)
    created_at = models.DateTimeField(auto_now_add=True)
