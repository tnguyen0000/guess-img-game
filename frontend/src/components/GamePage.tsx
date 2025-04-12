import '../styles/gamePage.css'
import ImageCard from './ImageCard'
import { test } from '../api/imageFetch'
import { useEffect, useState } from 'react'
import GameTopBar from './GameTopBar';

function GamePage() {
  const [score, setScore] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    console.log(page)
  }, [page]);

  return (
    <div id='game-page'>
      <GameTopBar
        theme={'TODO!'}
        score={score}
        page={page}
      />
    </div>
  )
}

export default GamePage;
