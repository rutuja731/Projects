from django.urls import path
from .import views

urlpatterns=[
path('', views.home, name='home'),
    path('tryus/', views.try_us, name='tryus'),
    path('joinus/', views.joinus_view, name='joinus'),  # ✅ Fixed here
    path('personaltraining/', views.personal_training, name='personal_training'),
    path('classes/', views.classes, name='classes'),
    path('offers/', views.offers, name='offers'),
    path('location/', views.location, name='location'),
    path('success/', views.success, name='success'),


]


