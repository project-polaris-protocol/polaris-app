from . import views
from django.urls import include, path
from django.views.generic import TemplateView
from django.views.decorators.cache import cache_control

app_name = ''
urlpatterns = [
    path('', views.client, name='client'),
    path('admin/', views.admin, name='host'),
    path('manage/', views.manage, name='manage')
]