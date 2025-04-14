from rest_framework.views import APIView
from rest_framework.response import Response
from ..utils import getTheme
from ..api.unsplashAPI import getRealImage

REAL_IMAGE_NUM = 3

class TestView(APIView):
    def get(self, request):
        return Response(data={'message': 'Hello World!'})
    
class GetImageView(APIView):
    def get(self, request):
        theme = getTheme()
        realImages = getRealImage(theme, REAL_IMAGE_NUM)
        if realImages == None:
            return Response(data={'TODO': '123'})
        # TODO!: add AI generation, process/sanitise data to send back
        return Response(data=realImages)