from rest_framework.views import APIView
from rest_framework.response import Response
from ..utils import getTheme
from ..api.unsplashAPI import getRealImage
from ..api.pollinationAPI import getAIImage

REAL_IMAGE_NUM = 3

class TestView(APIView):
    def get(self, request):
        return Response(data={'message': 'Hello World!'})
    
class GetImageView(APIView):
    def get(self, request):
        theme = getTheme()
        realImages = getRealImage(theme, REAL_IMAGE_NUM)
        if realImages == None:
            return Response(data={'error': 'Trouble retrieving real images!'})

        aiImage = getAIImage(theme)
        if aiImage == None:
            return Response(data={'error': 'Trouble retrieving AI images'}) 

        response = list(map(lambda x: {
            'url': x['urls']['regular'],
            'isCorrect': False
        }, realImages))

        aiImage['isCorrect'] = True
        response.append(aiImage)


        return Response(data=response)