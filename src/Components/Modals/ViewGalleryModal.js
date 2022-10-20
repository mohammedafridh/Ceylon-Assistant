import './ViewGalleryModal.css';
import 'swiper'
import ViewGallerySlider from '../Slideshow/ViewGallerySlider';
import { Gallery } from '../PageComponents/Tours gallery/Gallery'

function ViewGalleryModal() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        width: '800px',
        height: '700px',
        backgroundColor: '#fff',
        padding: '20px'
      }}>
        <ViewGallerySlider images={Gallery} />
      </div>
    </div>
  );
}

export default ViewGalleryModal;