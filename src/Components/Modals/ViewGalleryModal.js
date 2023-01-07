import {useState, useEffect} from 'react'
import { Modal, useMantineTheme} from '@mantine/core';
import Carousel from 'react-bootstrap/Carousel';
import './ViewGalleryModal.css'

function ViewGalleryModal({modalOpened,setModalOpened,galleryData}) {
  const theme = useMantineTheme();

  const[mainImage,setMainImage] = useState(galleryData.mainImage)
  const[image1,setImage1] = useState(galleryData.image1)
  const[image2,setImage2] = useState(galleryData.image2)
  const[image3,setImage3] = useState(galleryData.image3)
  const[image4,setImage4] = useState(galleryData.image4)

  useEffect(()=>{
    setMainImage(galleryData.mainImage)
    setImage1(galleryData.image1)
    setImage2(galleryData.image1)
    setImage3(galleryData.image1)
    setImage4(galleryData.image1)
  },[galleryData])

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
                    src={galleryData.mainImage}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item className = 'carouselItem'>
                  <img
                    className="d-block w-90"
                    src={galleryData.image1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item className = 'carouselItem'>
                  <img
                    className="d-block w-90"
                    src={galleryData.image2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item className = 'carouselItem'>
                  <img
                    className="d-block w-90"
                    src={galleryData.image3}
                    alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item className = 'carouselItem'>
                  <img
                    className="d-block w-90"
                    src={galleryData.image4}
                    alt="Third slide"
                  />
                </Carousel.Item>
            </Carousel>
        </div>
    </Modal>
  );
}

export default ViewGalleryModal




