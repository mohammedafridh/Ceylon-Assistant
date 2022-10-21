import { Modal, useMantineTheme} from '@mantine/core';
import Carousel from 'react-bootstrap/Carousel';
import './ViewGalleryModal.css'

function ViewGalleryModal({modalOpened,setModalOpened,galleryData}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.20}
      overlayBlur={1}
      size = '50%'
      opened = {modalOpened}
      onClose = {()=>setModalOpened(false)}
      className = 'form'
    >

        <div className = 'galleryCarousel'>
            <Carousel variant="dark" className = 'carousel'>
                <Carousel.Item className = 'carouselItem'>
                  <img
                    className="d-block w-90"
                    src={galleryData.img1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item className = 'carouselItem'>
                  <img
                    className="d-block w-90"
                    src={galleryData.img2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item className = 'carouselItem'>
                  <img
                    className="d-block w-90"
                    src={galleryData.img3}
                    alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item className = 'carouselItem'>
                  <img
                    className="d-block w-90"
                    src={galleryData.img4}
                    alt="Third slide"
                  />
                </Carousel.Item>
            </Carousel>
        </div>
    </Modal>
  );
}

export default ViewGalleryModal




