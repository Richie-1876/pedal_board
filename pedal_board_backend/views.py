from django.shortcuts import render

# Create your views here.

from .models import Artist, Pedal
from .serializers import ArtistSerializer, PedalSerializer
from rest_framework import generics

class ArtistListCreate(generics.ListCreateAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

class ArtistRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

class PedalListCreate(generics.ListCreateAPIView):
    queryset = Pedal.objects.all()
    serializer_class = PedalSerializer

class PedalRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Pedal.objects.all()
    serializer_class = PedalSerializer
