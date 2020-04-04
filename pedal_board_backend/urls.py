from django.urls import path
from . import views

urlpatterns = [
    path('api/artist/', views.ArtistListCreate.as_view()),
    path('api/artist/<int:pk>/', views.ArtistRetrieveUpdateDestroy.as_view()),
    path('api/pedal/', views.PedalListCreate.as_view()),
    path('api/pedal/<int:pk>/', views.PedalRetrieveUpdateDestroy.as_view()),
]