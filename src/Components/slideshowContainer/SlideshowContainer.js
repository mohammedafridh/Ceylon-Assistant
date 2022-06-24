import classes from './SlideshowContainer.module.css'
import React from 'react'
import {Carousel} from 'react-bootstrap'

function SlideshowContainer(){
    return(
        <Carousel className={classes.container}>
  <Carousel.Item>
    <img
      className={classes.image}
      src="https://st2.depositphotos.com/3837271/7343/i/600/depositphotos_73438943-stock-photo-sri-lanka-wooden-sign.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className = {classes.h3}>Welcome to Sri-Lanka</h3>
      <p  className = {classes.p}>Enjoy your visit with our Tour Guides</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className={classes.image}
      src="https://withlocals-com-res.cloudinary.com/image/upload/w_769,h_360,c_fill,g_auto,q_auto,dpr_3.0,f_auto/website/locals-page/WL_-_Guidesearch_Header_-_88_3x"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className = {classes.h3}>Learn new Cultures, Historics etc...</h3>
      <p className = {classes.p}>Learn all you need with friendly tour guides</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className={classes.image}
      src="https://media-cdn.tripadvisor.com/media/photo-s/0c/88/e8/51/tour-guide-srilanka.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className = {classes.h3}>Enjoy your vacation</h3>
      <p className = {classes.p}>Have a happy time at Sri-Lanka.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        
    )
}

export default SlideshowContainer;