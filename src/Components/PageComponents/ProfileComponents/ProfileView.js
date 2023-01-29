import React,{ useEffect, useState } from 'react'
import classes from './ProfileView.module.css'
import {useUserAuth} from '../../../Context/Context'
import {db, auth } from '../../../Firebase'
import {getDoc, doc, where, query} from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import ProfileUpdateModal from '../../Modals/ProfileUpdateModal'
import TouristProfileUpdateModal from '../../Modals/TouristProfileUpdateModal'
import { useUser } from '../../../Context/UserContext'

function ProfileView() {
  const {guides, tourists, userType} = useUser()
  const {user} = useUserAuth()
  const [loading, setLoading] = useState(false)
  const [modalOpened,setModalOpened] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState('')


  useEffect(()=>{
    console.log({user})
    if(userType==='guide'){
      const guide = guides.find(guide=>guide.id===user.uid)
      setLoggedInUser(guide)
    }else if(userType==='tourist'){
      const tourist = tourists.find(tourist=>tourist.id===user.uid)
      setLoggedInUser(tourist)
    }
    console.log({loggedInUser})
  },[tourists, guides, userType, user, loggedInUser])

  return (
    <div className = {userType === 'guide'? classes.profileView : classes.touristProfileView}>
      <div className={userType === 'guide'? classes.profileWrapper : classes.touristWrapper}>
        <div className={classes.imageContainer}>
          <img src = {loggedInUser.image} 
          alt = ''
          className={userType === 'guide'? classes.image: classes.touristImg}/>
        </div>

        <div className={classes.detailsContainer}>

            <div className={classes.titleContainer}>
              <h3>{loggedInUser.firstName} {loggedInUser.lastName}
              </h3>

              <h6>{loggedInUser.email}</h6>

              {userType === 'guide' &&
              <p>Rs. {loggedInUser.guideRate}/=</p>}
            </div>

            <div className={classes.details}>
                <label>Contact Number</label>
                <span>{loggedInUser.contactNumber}</span>
              </div>

          {userType === 'guide' &&
            <div className = {classes.otherDetails}>
              <div className={classes.details}>
                <label>Address</label>
                <span>{loggedInUser.address}</span>
              </div>

              <div className={classes.details}>
                <label>Languages</label>
                <span>{loggedInUser.languages}</span>
              </div>

              <div className={classes.details}>
                <label>Vehicle Model</label>
                <span>{loggedInUser.model}</span>
              </div>

              <div className={classes.details}>
                <label>Maximum Passengers</label>
                <span>{loggedInUser.maxPassengers}</span>
              </div>

              <div className={classes.details}>
                <label>Per Km Rate</label>
                <span>{loggedInUser.perKmRate}</span>
              </div>
            
            </div>
          }
            <button className = {classes.updateBtn} onClick = {()=>setModalOpened(true)}>Update</button>
            {userType==='guide'?
              <ProfileUpdateModal 
              modalOpened = {modalOpened} 
              setModalOpened = {setModalOpened}
              user = {loggedInUser} 
              /> :
              
              <TouristProfileUpdateModal
              modalOpened = {modalOpened} 
              setModalOpened = {setModalOpened}
              user = {loggedInUser}
              />
              }

        </div>

      </div>
    </div>

  )
}

export default ProfileView