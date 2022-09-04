import {useState} from 'react'
import Layout from '../../layouts/Layout'
import MailList from '../Homepage/MailList';
import classes from './SelectedGuide.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import BookGuide from './BookGuide';

function SelectedGuide(props) {

  return (
    <Layout>
        <div className = {classes.guideContainer}>
            <div className={classes.guideWrapper}>
                <div className = {classes.guideDetails}>
                <div className = {classes.mainDetails}>
                    <img src = "https://firebasestorage.googleapis.com/v0/b/ceylon-assistant.appspot.com/o/Tour_Guide_Images%2Fff2ab708-d1ef-4400-9c02-1adabd3a2a27.jpg428f69cd-af41-4d8b-b7dc-fa46fdcb994c?alt=media&token=aabcbf7d-4f43-47da-9cef-674db5357da5"
                    alt = 'abc' className = {classes.guideImage}/>
                    <div className = {classes.guideDescription}>
                        <div className = {classes.main}>
                            <h3 className = {classes.guideName}>Guide Name</h3>
                            <div className = {classes.location}>
                                <FontAwesomeIcon icon = {faLocationDot} className = {classes.locationIcon} />
                                <span>Matara</span>
                        </div> 
                        </div>            
                        <div className = {classes.ratingBar}>
                            <span className = {classes.ranking}>Ranking</span>
                            <span className = {classes.rank}>5.0</span>
                        </div>  
                        <div className= {classes.rateTab}>
                            <span className = {classes.rate}>$123</span>
                            <span className = {classes.day}>per day</span>
                        </div>
                        <span className = {classes.cancel}>* Cancellation Free</span>    
                        <span className = {classes.intro}>Book to get the best services. Hurry up!</span>
                    </div>
                    </div>
                    <div className = {classes.guideAbout}>
                            <h2 className = {classes.about}>About</h2><hr></hr>
                            <div className = {classes.moreDetails}>
                                <span><b>Email : </b></span>
                                <span><b>Phone : </b></span>
                                <span><b>Age : </b></span>
                                <span><b>Gender : </b></span>
                                <span><b>Address : </b></span>
                                <span><b>Vehicle Type : </b></span>
                                <span><b>Vehicle Model : </b></span>
                                <span><b>Per KM rate : </b></span>
                                <span><b>Max Passengers : </b></span>
                            </div>
                        </div>       
                </div>
            <div className = {classes.guideBooking}>
                <div className = {classes.descriptionForm}>
                    <p>"Tour Guide rate is mentioned on the profile and total tour 
                        cost is dependent on the travelling distance"</p>
                    <div className = {classes.rateFormula}>
                        <h6>Total tour cost calculation formula : </h6>
                        <div className = {classes.formulaCal}>
                            <span>Guide rate (per day)</span>
                            <span>+</span>
                            <span>(number of Kms travelled * per Km rate)</span>
                        </div>   
                    </div>
                </div>

                <div className = {classes.bookingForm}>
                    <BookGuide />
                </div>
                    
                </div>
            </div>
        </div>
        
    <MailList />
    </Layout>
  )
}

export default SelectedGuide;



