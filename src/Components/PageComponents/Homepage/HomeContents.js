import classes from './HomeContents.module.css'
import TopGuides from './TopGuides'
import {Link} from 'react-router-dom'
 
function HomeContents() {
  return (
    <div>
      <div className = {classes.contentsContainer}>
        <div className = {classes.homepageImageContainer}>
            <span>Sri Lankans are happy to welcome you!</span>
        </div>
          <div className = {classes.introContainer}>
            <div className = {classes.introduction}>
              <h4 className = {classes.introTitle}><u>Ceylon Assistant Guides</u></h4>
              <p>"We have the best tour guides with an in-depth knowledge 
                  about Sri-Lanka. All our guides are ready to provide the best experiences. 
                  Plan your trip and enjoy the tour with our <b>Tour Guides</b>" 
              </p>
            </div>
          </div>
          <div className = {classes.optionsContainer}>
            <Link to = '/tourGuides'>
              <div className = {classes.tiles}>
                <div className={classes.imageContainer}>
                  <img src = 'https://lh3.googleusercontent.com/p/AF1QipOZLaOBgO8nHL7f8pFugf1i1wUhIPBm_bVlM8iP=w768-h768-n-o-v1' alt = ''/>
                </div>
                <div className = {classes.textContainer}>
                    <p>Guides</p>
                </div>
              </div>
            </Link>

            <Link to = '/bookings'>
              <div className = {classes.tiles}>
                <div className={classes.imageContainer}>
                <img src = 'https://st2.depositphotos.com/1579454/6699/i/450/depositphotos_66997573-stock-photo-online-booking-concept.jpg' alt = ''/>
                </div>
                <div className = {classes.textContainer}>
                    <p>Bookings</p>
                </div>
              </div>
            </Link>

            <Link to = '/tours'>
              <div className = {classes.tiles}>
                <div className={classes.imageContainer}>
                  <img src = 'http://www.marktours.lk/assets/img/main/couple-in-a-car.jpg' alt = ''/>
                </div>
                <div className = {classes.textContainer}>
                    <p>Tours</p>
                </div>
              </div>
            </Link>  
          </div>
          <TopGuides />
      </div>
    </div>
  )
}

export default HomeContents