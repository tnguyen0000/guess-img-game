import urllib.request
from urllib.error import HTTPError
from dotenv import load_dotenv
import os
import json

load_dotenv()

UNSPLASH_URL = 'https://api.unsplash.com/'
UNSPLASH_ACCESS_KEY = os.getenv('UNSPLASH_ACCESS_KEY')

'''
    args:
        theme - String of the image theme
        numImages - Positive integer of how many random images to retrieve
    returns: https://unsplash.com/documentation#get-a-random-photo
'''
def getRealImage(theme: str, numImages: int) -> object:
    API_ENDPOINT = '/photos/random'
    query = f'query={theme}'
    count = f'count={numImages}'
    finalUrl = UNSPLASH_URL + API_ENDPOINT + '?' + query + '&' + count
    req = urllib.request.Request(url=finalUrl)
    req.add_header('Authorization', f'Client-ID {UNSPLASH_ACCESS_KEY}')
    try:
        with urllib.request.urlopen(req) as response:
            apiResponse = response.read()
            apiResponse = apiResponse.decode()
            apiResponse = json.loads(apiResponse)
            return apiResponse
    except (HTTPError) as err:
        print('HTTP Error', err)
        return None
