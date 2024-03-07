from django.urls import include, path

urlpatterns = [
    path('', include('moderator.urls')),
    path('moderator/', include('moderator.urls')),
]
