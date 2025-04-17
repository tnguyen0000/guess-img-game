import '../styles/images.css'
import { ImageCardProp } from '../types';
function ImageCard(props: ImageCardProp) {
    const {imageUrl, isCorrect, selectedValue, setSelectedValue} = props;
    // AI images are Base64 encoded whilst real images should be urls
  return (
    <div className='image-card'
        onClick={(e) => {
            e.preventDefault();
            if (selectedValue === null) {
                setSelectedValue(isCorrect);
            }
        }}
    >
        <img className='image-card-img'
            src={isCorrect ? `data:image/jpeg;base64,${imageUrl}` : imageUrl}
        />
    </div>
  )
}

export default ImageCard;