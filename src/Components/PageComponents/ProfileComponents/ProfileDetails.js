import { useEffect, useState } from 'react'
import classes from './ProfileDetails.module.css'
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faCamera } from '@fortawesome/free-solid-svg-icons'
import {useUserAuth} from '../../../Context/Context'
import {db, auth } from '../../../Firebase'
import {getDoc, doc, where, query} from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'

function ProfileDetails() {
  const {user} = useUserAuth()
  const [touristDetails, setTouristDetails] = useState('')
  const [tourGuideDetails,setTourGuideDetails] = useState('')
  const [loading, setLoading] = useState(false)
  // const {uid} = auth.currentUser.uid

  useEffect(()=>{
    onAuthStateChanged(auth, async (user)=>{
      if(user){
        const tourist = await getDoc(doc(db,'Tourists',user.uid))
        const touristData = tourist.data()
        const tourGuide = await getDoc(doc(db,'Tour_Guides',user.uid))
        const tourGuideData = tourGuide.data()

        if(touristData==undefined){
          setTourGuideDetails(tourGuideData)
        }else if(tourGuideData==undefined){
          setTouristDetails(touristData)
        }
      }
    })
  },[])

  if(tourGuideDetails){
  return (
    <div className  ={classes.profileContainer}>
        <div className = {classes.profileDetails}>
          <div className = {classes.head}>
            <img src = {tourGuideDetails.image}
                alt = 'abc' />
                <button><FontAwesomeIcon icon={faCamera} /></button>
            <div className = {classes.headContents}>
                <div className = {classes.headContainer}>
                  <h1>{tourGuideDetails.name}</h1>
                  <div className = {classes.sub}>
                    <span>{tourGuideDetails.email}</span>
                    <span>{tourGuideDetails.district}</span>
                    <span>{tourGuideDetails.rate}</span>
                  </div>
                </div>
                <div className = {classes.ratingsContainer}>
                    <div className = {classes.ratingBar}>
                        <span className = {classes.ratingText}>Rating</span>
                        <span className = {classes.rating}>5.0</span>
                    </div>
                </div>   
            </div>
          </div>

          <div className = {classes.bodyItems}>
              <span><b>Phone : </b>{tourGuideDetails.contact_Number}</span>
              <span><b>Age : </b>{tourGuideDetails.age}</span>
              <span><b>Gender : </b>{tourGuideDetails.gender}</span>
              <span><b>Address : </b>{tourGuideDetails.address}</span>
              <span><b>Languages : </b>{tourGuideDetails.languages}</span>
              <span><b>Per KM rate : </b>{tourGuideDetails.per_Km_Rate}</span>
              <span><b>Vehicle Type : </b>{tourGuideDetails.vehicle_type}</span>
              <span><b>Vehicle Model : </b>{tourGuideDetails.model}</span>
              <span><b>Max Passengers : </b>{tourGuideDetails.No_of_passengers}</span>
          </div>
            <Button className = {classes.btn}><FontAwesomeIcon icon={faPencil} className = {classes.pencilIcon}/>Edit Details</Button>
        </div>
    </div>
  )
  }else if(touristDetails){
    return (
      <div className  ={classes.profileContainer}>
          <div className = {classes.profileDetails}>
            <div className = {classes.head}>
              <img src = {touristDetails.image}
                  alt = 'abc' />
                  <button><FontAwesomeIcon icon={faCamera} /></button>
              <div className = {classes.headContents}>
                  <div className = {classes.headContainer}>
                    <h1>{touristDetails.name}</h1>
                    <div className = {classes.sub}>
                      <span>{touristDetails.email}</span>
                    </div>
                  </div>   
              </div>
            </div>
            <div className = {classes.bodyItems}>
                <span><b>Phone : </b>{touristDetails.contact_Number}</span>
                <span><b>Age : </b></span>
                <span><b>Gender : </b>{touristDetails.gender}</span>
                <span><b>Country : </b></span>
            </div>
              <Button className = {classes.btn}><FontAwesomeIcon icon={faPencil} className = {classes.pencilIcon}/>Edit Details</Button>
          </div>
      </div>
    )
  }
}

export default ProfileDetails;
