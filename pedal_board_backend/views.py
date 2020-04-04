from django.shortcuts import render

# Create your views here.

from .models import Artist
from .serializers import ArtistSerializer
from rest_framework import generics

class ArtistListCreate(generics.ListCreateAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

class ArtistRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer