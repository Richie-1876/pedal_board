from django.urls import path
from . import views

urlpatterns = [
    path('api/artist/', views.ArtistListCreate.as_view()),
    path('api/artist/<int:pk>/', views.ArtistRetrieveUpdateDestroy.as_view()),
]