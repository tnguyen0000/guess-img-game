import '../styles/images.css'
import { ImageCardProp } from '../types';
function ImageCard(props: ImageCardProp) {
    const {imageUrl, isCorrect, score, setScore, page, setPage} = props;
  return (
    <div className='image-card'
        onClick={(e) => {
            e.preventDefault();
            if (isCorrect) {
                setScore(score + 1);
            }
            setPage(page + 1);
        }}
    >
        <img src={imageUrl} alt="" />
    </div>
  )
}

export default ImageCard;