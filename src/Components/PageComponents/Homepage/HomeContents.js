import classes from './HomeContents.module.css'
import TopGuides from './TopGuides'
import {Link} from 'react-router-dom'
import HomeDiscover from './HomeDiscover'
 
function HomeContents() {
  return (
      <div className = {classes.contentsContainer}>
        <div className = {classes.homepageImageContainer}>
          <div className={classes.tileContainer}>
          <div className = {classes.tiles}>
            <div className={classes.infoTile}>
              <span>123</span>
              <span>All Tourists</span>
            </div>
            
            <div className={classes.infoTile}>
              <span>123</span>
              <span>All Tour Guides</span>
            </div>

            <div className={classes.infoTile}>
              <span>123</span>
              <span>All Bookings</span>
            </div>

            <div className={classes.infoTile1}>
              <span>123</span>
              <span>All Tours</span>
            </div>
          </div>
        </div>
        </div>
          <div className = {classes.introContainer}>
            <div className = {classes.introduction}>
              <h4 className = {classes.introTitle}>Who we Are ?</h4>
              <span>We are one of the tour guide agency in Sri-Lanka who are providing the best tour guides with an 
                in-depth knowledge about Sri-Lanka. With a 03 years of experience in offering tour guides with vehicles,
                we gurantee you an unforgettable holiday for a reasonable price.</span> 

                <span>We are currently a growing tour guide company with a worldwide happy client base. 
                  All of our guides are ready to provide the best experiences. Plan your trip and book our 
                  guides to make your tour a success.<b> Hurry Up!</b> </span>
            </div>

            <div className = {classes.introductionLogo}>
              <img src = 'https://firebasestorage.googleapis.com/v0/b/ceylon-assistant.appspot.com/o/logos%2FwhiteLogo.jpeg?alt=media&token=a8063bdd-0566-45f8-9523-08b8016b235a' alt = '' />
            </div>
          </div>
          {/* <div className = {classes.optionsContainer}>
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
          </div> */}
          <TopGuides />

          <div className = {classes.countryDescription}>
              <div className = {classes.description}>
                  <h3>About Sri-Lanka</h3>
                  <span>Sri Lanka is an island country in the Indian Ocean that awaits to provide
                     you with a wide range of activities, including beaches, the outdoors, wildlife, 
                     a rich culture, ancient history, and delicious cuisine. With its mixed population 
                     of Sinhalese, Tamils, Muslims, Christians, Burghers, Malays, and other races and 
                     religions, Sri Lanka has a rare combination of cultures that you won't find anywhere 
                     else in the world.
                  </span>

                  <span>Known as the Wonder of Asia and the Jewel of the Indian Ocean, Sri Lanka never drags 
                    down visitors, whether they are searching for adventure, peace, a romantic getaway, a single 
                    trip, a honeymoon, or a family vacation. The island's varied ecosystem gives you plenty of 
                    opportunities to see wildlife up close, and its unspoiled coastline is residence to beaches 
                    that enable you to relax and engage in water sports. Travelers from all over the world are 
                    attracted by the gorgeous hill area, which offers mountains which are covered with mist, tea 
                    plantations, waterfalls, and bungalows in the British style. Your visit to Sri Lanka will also 
                    contain a lot of iconic scenes from the cities with strong colonial effects.
                  </span>
              </div>

              <div className = {classes.countryImage}>
                <img src = 'http://2.bp.blogspot.com/_uB1yH88iS1Q/THUotuG0GqI/AAAAAAAAAAk/gB4eav85JYc/s1600/MySriLankaMap.JPG' alt ='' />
                
              </div>
          </div>
          <HomeDiscover />
      </div>
  )
}

export default HomeContents