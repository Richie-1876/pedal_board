from rest_framework import serializers
from .models import Artist, Pedal


class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = ('id', 'name', 'band', 'image', 'wiki', 'pedals', 'created_at')

class PedalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pedal
        fields = ('id', 'model', 'brand', 'image', 'created_at')