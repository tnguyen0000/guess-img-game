from django.urls import path

from .images.views import (
    GetImageView,
    TestView,
)


urlpatterns = [
    #path('admin/', admin.site.urls),
    path('test/', TestView.as_view(), name="test"),
    path('getImages/', GetImageView.as_view(), name="getImages"),
]
