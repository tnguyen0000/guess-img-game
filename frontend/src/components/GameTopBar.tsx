import '../styles/gamePage.css'
import { GameTopBarProp } from '../types';

function GameTopBar(props: GameTopBarProp) {
  const {theme, score, page} = props;
  return (
    <div id='game-top-bar'>
      <div></div>
      <h2 id='theme-name'>{theme}</h2>
      <div id='game-information-container'>
        <h3 className='game-information-child'>Score: {score}</h3>
        <h3 className='game-information-child'>Page: {page}</h3>
      </div>
    </div>
  ) // TODO!: change Page tracker
}

export default GameTopBar;
