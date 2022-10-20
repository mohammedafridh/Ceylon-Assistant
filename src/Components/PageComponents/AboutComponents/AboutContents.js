import classes from './AboutContents.module.css'
import AboutSlideshow from '../../Slideshow/AboutSlideshow';
import Faq from '../../FAQ/Faq'

function AboutContents() {

  return (
    <div className = {classes.aboutContainer}>
        <div className = {classes.topContainer}>
            <span>About Us</span>
        </div>

        <div className = {classes.aboutMeContainer}>        
            <div className = {classes.activityHeader}>About Ceylon Assistant</div>
            <div className = {classes.activityImage}>
                <img src = 'https://firebasestorage.googleapis.com/v0/b/ceylon-assistant.appspot.com/o/Tour_Guide_Images%2F1.jpgfc743bca-1ffd-4244-8f17-0680537b40f0?alt=media&token=5110128a-e6f0-45db-a051-1708950a6484' alt = '' />
            </div>
            <div className = {classes.activityParagraph}>
                <div>
                    I am Mohomed Afridh, owner of <b>Ceylon Assistant</b> web application. 
                    I have been investigating on the issues that tourists face during their visit in Sri-Lanka and the main problem i found was 
                    that tourists are unable to find tour guides from any closest location they are. So, I thought to develop a website 
                    by getting tourists from all over the country which will make the tourists easy to find tour guides as per the needed 
                    district.
                </div>
                <div className = {classes.paragraph2}>
                    <b>Ceylon Assistant</b> is a travel agency that specializes in offering Tailor-made vacations to 
                    Sri Lanka. We have a welcoming team of experts. In addition to that, we concentrate our efforts 
                    on delivering the highest level of customer satisfaction to our visitors and ensuring their 
                    safety throughout their trip to Sri Lanka.
                </div>
            </div>
        </div>

        <div className = {classes.subParagraph}>
            <div className = {classes.sub}>
                <h4>How we care about you</h4>
                <span>The main purpose of creating Ceylon Assistant website is to provide the tourists 
                    comfort and safety. Enjoyment is not the only thing we have taken into consideration, 
                    but also safety. All our guides are well known and they have met the needed requirements 
                    to ensure the trust of the Tour Guide. So, the tours with our guides can be guranteed </span>
            </div>
            <div className = {classes.sub}>
                <h4>Tailor Made Tours</h4>
                <span>Any destination must be studied before being enjoyed to the fullest. So, Tailor-made tours  could guide 
                    you in planning your vacation in accordance with your needs. Additionally, each individual has a distinct 
                    expectation of their vacation, as do the locations, costs, and expectations. You'll have to spend 
                    a lot of effort and time to this. Discovering a bit about your destination's culture, people, food, 
                    locations, etc. is certainly a smart idea. <b>Ceylon Assistant</b> tour guides can be found from every 
                    city which will enable in offering private tours or host groups.</span>
            </div>
        </div>
        <hr/>

        <div className = {classes.bottomContainer}>
            
            <Faq />
            

            <div className = {classes.forTravelling}>
                <h3>For Travelling</h3>
                <AboutSlideshow />
            </div>
        </div>
    </div>
  )
}

export default AboutContents
