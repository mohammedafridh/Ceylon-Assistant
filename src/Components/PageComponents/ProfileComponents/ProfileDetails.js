import { useEffect, useState } from 'react'
import classes from './ProfileDetails.module.css'
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faCamera } from '@fortawesome/free-solid-svg-icons'
import {useUserAuth} from '../../../Context/Context'
import {db, auth } from '../../../Firebase'
import {getDoc, doc} from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'

function ProfileDetails() {
  const {user} = useUserAuth()
  const [touristDetails, setTouristDetails] = useState('')
  const [loading, setLoading] = useState(false)
  // const {uid} = auth.currentUser.uid

  useEffect(()=>{
    onAuthStateChanged(auth, async (user)=>{
      if(user){
        const tourist = await getDoc(doc(db,'Tourists',user.uid))
        const touristData = tourist.data()
        setTouristDetails(touristData);
      }
    })
  },[])

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
                    <span>District</span>
                    <span>Rate</span>
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
              <span>Phone : </span>
              <span>Age : </span>
              <span>Gender :</span>
              <span>Address :</span>
              <span>Languages :</span>
              <span>Per KM rate :</span>
              <span>Vehicle Type :</span>
              <span>Vehicle Model :</span>
              <span>Max Passengers :</span>
          </div>
            <Button className = {classes.btn}><FontAwesomeIcon icon={faPencil} className = {classes.pencilIcon}/>Edit Details</Button>
        </div>
    </div>
  )
}

export default ProfileDetails;
