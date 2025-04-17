import '../styles/gamePage.css'
import ImageCard from './ImageCard'
import { getImages } from '../api/imageFetch'
import { useEffect, useState } from 'react'
import GameTopBar from './GameTopBar';
import { Image, ImageError, Images, isImageError } from '../types';

function GamePage() {
  const [score, setScore] = useState(0);
  const [page, setPage] = useState(0);
  const [theme, setTheme] = useState('');
  const [images, setImages] = useState<Images | ImageError>([]);
  const [selectedValue, setSelectedValue] = useState<boolean | null>(null);

  useEffect(() => {
    console.log(page)
  }, [page]);

  useEffect(() => {
    if (!isImageError(images) && images.length === 0) {
      const fetchImagesPromise = getImages();
      fetchImagesPromise.then((res) => {
        setImages(res.images);
        setTheme(res.theme);
      }).catch((err) => {
        setImages(err)
        console.log(err)
      })
    }
  }, [images]);

  return (
    <div id='game-page'>
      <GameTopBar
        theme={theme ? theme : "Loading..."}
        score={score}
        page={page}
      />

      <div id='game-content-container'>
        {
          (() => {
            if (isImageError(images)) {
              return (images.error);
            } else {
              if (images.length > 0) {
                return images.map((i: Image) => (
                  <ImageCard 
                    key={i.url}
                    imageUrl={i.url}
                    isCorrect={i.isCorrect}
                    selectedValue={selectedValue}
                    setSelectedValue={setSelectedValue}
                  />
                ));
              } else {
                return ('Loading...');
              }
            }
          })()
        }
      </div>
    </div>
  )
}

export default GamePage;
