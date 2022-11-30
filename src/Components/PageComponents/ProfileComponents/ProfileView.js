import React,{ useEffect, useState } from 'react'
import classes from './ProfileView.module.css'
import {useUserAuth} from '../../../Context/Context'
import {db, auth } from '../../../Firebase'
import {getDoc, doc, where, query} from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import ProfileUpdateModal from '../../Modals/ProfileUpdateModal'
import TouristProfileUpdateModal from '../../Modals/TouristProfileUpdateModal'

function ProfileView() {

  const {user} = useUserAuth()
  const [touristDetails, setTouristDetails] = useState('')
  const [tourGuideDetails,setTourGuideDetails] = useState('')
  const [loading, setLoading] = useState(false)
  const [modalOpened,setModalOpened] = useState(false)

  useEffect(()=>{
    onAuthStateChanged(auth, async (user)=>{
      if(user){
        const tourist = await getDoc(doc(db,'Tourist',user.uid))
        const touristData = tourist.data()
        const tourGuide = await getDoc(doc(db,'Guides',user.uid))
        const tourGuideData = tourGuide.data()

        if(touristData===undefined){
          setTourGuideDetails(tourGuideData)
        }else if(tourGuideData===undefined){
          setTouristDetails(touristData)
        }
      }
    })
  },[])

  return (
    <div className = {tourGuideDetails? classes.profileView : classes.touristProfileView}>
      <div className={tourGuideDetails? classes.profileWrapper : classes.touristWrapper}>
        <div className={classes.imageContainer}>
          <img src = {touristDetails?touristDetails.image : tourGuideDetails.image} 
          alt = ''
          className={tourGuideDetails? classes.image: classes.touristImg}/>
        </div>

        <div className={classes.detailsContainer}>

            <div className={classes.titleContainer}>
              <h3>{touristDetails?touristDetails.firstName:tourGuideDetails.firstName} {touristDetails?touristDetails.lastName:tourGuideDetails.lastName}
              </h3>

              <h6>{touristDetails?touristDetails.email:tourGuideDetails.email}</h6>

              {tourGuideDetails &&
              <p>Rs. {tourGuideDetails.guideRate}/=</p>}
            </div>

            <div className={classes.details}>
                <label>Contact Number</label>
                <span>{touristDetails?touristDetails.contactNumber:tourGuideDetails.contactNumber}</span>
              </div>

          {tourGuideDetails &&
            <div className = {classes.otherDetails}>
              <div className={classes.details}>
                <label>Address</label>
                <span>{tourGuideDetails.address}</span>
              </div>

              <div className={classes.details}>
                <label>Languages</label>
                <span>{tourGuideDetails.languages}</span>
              </div>

              <div className={classes.details}>
                <label>Vehicle Model</label>
                <span>{tourGuideDetails.model}</span>
              </div>

              <div className={classes.details}>
                <label>Maximum Passengers</label>
                <span>{tourGuideDetails.maxPassengers}</span>
              </div>

              <div className={classes.details}>
                <label>Per Km Rate</label>
                <span>{tourGuideDetails.perKmRate}</span>
              </div>
            
            </div>
          }
            <button className = {classes.updateBtn} onClick = {()=>setModalOpened(true)}>Update</button>
            {tourGuideDetails?
              <ProfileUpdateModal 
              modalOpened = {modalOpened} 
              setModalOpened = {setModalOpened}
              guide = {tourGuideDetails} 
              tourist = {touristDetails}
              /> :
              
              <TouristProfileUpdateModal
              modalOpened = {modalOpened} 
              setModalOpened = {setModalOpened}
              guide = {tourGuideDetails} 
              tourist = {touristDetails}
              />
              }

        </div>

      </div>
    </div>
  )
}

export default ProfileView
