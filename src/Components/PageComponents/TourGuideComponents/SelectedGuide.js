import {useState, useEffect} from 'react'
import Layout from '../../layouts/Layout'
import MailList from '../Homepage/MailList';
import classes from './SelectedGuide.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import BookGuide from './BookGuide';
import {useLocation} from 'react-router-dom'

function SelectedGuide(props) {

    const location = useLocation()
    console.log(location)

    useEffect(()=>{

    },[])

  return (
    <Layout>
        <div className = {classes.guideContainer}>
            <div className={classes.guideWrapper}>
                <div className = {classes.guideDetails}>
                <div className = {classes.mainDetails}>
                    <img src = {location.state.image}
                    alt = {location.state.name} className = {classes.guideImage}/>
                    <div className = {classes.guideDescription}>
                        <div className = {classes.main}>
                            <h3 className = {classes.guideName}>{location.state.name}</h3>
                            <div className = {classes.location}>
                                <FontAwesomeIcon icon = {faLocationDot} className = {classes.locationIcon} />
                                <span>{location.state.district}</span>
                        </div> 
                        </div>            
                        <div className = {classes.ratingBar}>
                            <span className = {classes.ranking}>Ranking</span>
                            <span className = {classes.rank}>5.0</span>
                        </div>  
                        <div className= {classes.rateTab}>
                            <span className = {classes.rate}>{location.state.rate}</span>
                            <span className = {classes.day}>per day</span>
                            <span className = {classes.day}> + {location.state.perKmRate} Per Travelling KM</span>
                        </div>
                        <span className = {classes.cancel}>* Cancellation Free</span>    
                        <span className = {classes.intro}>Book to get the best services. Hurry up!</span>
                    </div>
                    </div>
                    <div className = {classes.guideAbout}>
                            <h2 className = {classes.about}>About</h2><hr></hr>
                            <div className = {classes.moreDetails}>
                                <span><b>Email : </b>{location.state.email}</span>
                                <span><b>Phone : </b>{location.state.contact_Number}</span>
                                <span><b>Age : </b>{location.state.age}</span>
                                <span><b>Gender : </b>{location.state.gender}</span>
                                <span><b>Address : </b>{location.state.address}</span>
                                <span><b>Vehicle Type : </b>{location.state.vehicle_type}</span>
                                <span><b>Vehicle Model : </b>{location.state.model}</span>
                                <span><b>Languages : </b></span>
                                <span><b>Max Passengers : </b>{location.state.No_of_passengers}</span>
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



