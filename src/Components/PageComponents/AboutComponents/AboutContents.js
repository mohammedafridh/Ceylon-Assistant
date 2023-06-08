import classes from './AboutContents.module.css'
import AboutSlideshow from '../../Slideshow/AboutSlideshow';
import Faq from '../../FAQ/Faq'
import ContactContents from './Contact/ContactContents';


function AboutContents() {

  return (
    <div className = {classes.aboutContainer}>
        <div className = {classes.topContainer}>
            <span>About Us</span>
        </div>

        <div className = {classes.aboutMeContainer}>        
            <div className = {classes.activityHeader}>About Ceylon Assistant</div>
            <div className = {classes.activityImage}>
                <img src = 'https://firebasestorage.googleapis.com/v0/b/ceylon-assistant.appspot.com/o/logo%2FWhatsApp%20Image%202023-06-08%20at%2015.16.03.jpeg?alt=media&token=4d6cb193-6b1d-4b9b-b41a-a5487a0bde86&_gl=1*vka2z2*_ga*NDAyMzI1MTA4LjE2NjY5NTk3NTE.*_ga_CW55HF8NVT*MTY4NjIxNjAyNi4yLjEuMTY4NjIxNzczMi4wLjAuMA..' alt = '' />
            </div>
            <div className = {classes.activityParagraph}>
                <div>
                     I am Mohomed Nuzran, owner of <b>Ceylon Assistant</b> website.
                    <b>CeylonAssistant</b> started since 2015 and we are a travel agency that specializes in offering Tailor-made vacations to 
                    Tourists who visit Sri Lanka. We have a welcoming team of experts.
                </div>

                <div className={classes.additionPara}>
                     In addition to that, we concentrate our efforts 
                    on delivering the highest level of customer satisfaction to our visitors and ensuring their 
                    safety throughout their trip to Sri Lanka. The main purpose of this webiste is to provide services to 
                    visiting Tourists by making them easier to hire Tour Guides from the closest district they are with a vehicle.  
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
        <hr/>

        <ContactContents />
    </div>
  )
}

export default AboutContents
