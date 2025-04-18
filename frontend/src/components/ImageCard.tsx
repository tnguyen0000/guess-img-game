import '../styles/images.css'
import { ImageCardProp } from '../types';
function ImageCard(props: ImageCardProp) {
    const {imageUrl, isCorrect, selectedValue, setSelectedValue} = props;
    // AI images are Base64 encoded whilst real images should be urls
  return (
    <div className='image-card'>
        <img 
            className={selectedValue !== null ? 'image-content-disabled' : 'image-content-enabled'}
            style={selectedValue !== null ? {border: isCorrect ? '10px solid green' : '10px solid red'} : {}}
            onClick={(e) => {
                e.preventDefault();
                if (selectedValue === null) {
                    setSelectedValue(isCorrect);
                }
            }}
            src={isCorrect ? `data:image/jpeg;base64,${imageUrl}` : imageUrl}
        />
    </div>
  )
}

export default ImageCard;