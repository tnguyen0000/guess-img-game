# guess-img-game
This React-Django app will provide the user with 4 images centred around a particular theme, there will be 3 real images and 1 AI generated image. The user must then correctly guess the AI image.

[Unsplash](https://unsplash.com/developers) was used for the real image retrieval. \
[Pollinations.ai](https://pollinations.ai/) was used for the AI image generation. 

To run, simply use Docker with 'docker compose up --build' in the root directory.

You will need 2 '.env' files, one in the './backend' and the other in './frontend'.

The frontend .env file should contain:
```
PORT=*PORT NUMBER ['3000' for default]*
VITE_PORT_BACK=*PORT NUMBER FOR BACKEND ['8000' for default]*
VITE_URL_BACK=*URL FOR BACKEND ['http://localhost' for default]*
```

The backend .env file should contain:
```
UNSPLASH_ACCESS_KEY=*API Access key from Unsplash Developers app*
```

