# AI Generation from on https://pollinations.ai/
import urllib.parse
import urllib.request
from urllib.error import HTTPError
import random
import base64

POLLINATION_URL = 'https://image.pollinations.ai/'
USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0' # polliinations prevents urllib user-agent

'''
    args:
        theme - String of the image theme
    returns: Image file (typically JPEG)
'''
def getAIImage(theme: str) -> object:
    seed = random.randint(1, 10)
    API_ENDPOINT = 'prompt/'
    prompt = urllib.parse.quote(f'real life {theme}')
    seed = f'seed={seed}'
    logo = f'nologo=true'
    finalUrl = POLLINATION_URL + API_ENDPOINT + prompt + '?' + seed + '&' + logo
    req = urllib.request.Request(url=finalUrl)
    req.headers={
         'User-Agent': USER_AGENT
    }
    try:
        with urllib.request.urlopen(req) as response:
            apiResponse = response
            apiResponse = apiResponse.read()
            imageBase64 = base64.b64encode(apiResponse)
            res = {'url': imageBase64}
            return res
    except (HTTPError) as err:
        print('HTTP Error', err.read().decode())
        return None
