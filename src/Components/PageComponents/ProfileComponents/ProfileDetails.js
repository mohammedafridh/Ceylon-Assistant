import { useEffect, useState } from 'react'
import classes from './ProfileDetails.module.css'
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faCamera } from '@fortawesome/free-solid-svg-icons'
import {useUserAuth} from '../../../Context/Context'
import {db, auth } from '../../../Firebase'
import {getDoc, doc, where, query} from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import AddGallery from './AddGallery'

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

        if(touristData===undefined){
          setTourGuideDetails(tourGuideData)
        }else if(tourGuideData===undefined){
          setTouristDetails(touristData)
        }
      }
    })
  },[])

if(touristDetails){
  return(
    <div className = {classes.profile}>

      <div className = {classes.profileImg}>
        <span>Profile</span>
      </div>

      <div className = {classes.profileBody}>
          <div className={classes.ProfileCard}>
            <div className={classes.profileImages}>
                <img src = 'https://media.istockphoto.com/photos/tropical-leaves-abstract-green-leaves-texture-nature-background-picture-id1254474165?b=1&k=20&m=1254474165&s=170667a&w=0&h=4yiAJ1tXxs3zoEL6S1bPpKSxpbF3XIiTb-bGMedoDtk=' alt = '' />
                <img src = {touristDetails.image} alt = '' />
            </div>
            <div className={classes.profileName}>
                <span>{touristDetails.name}</span>
                <span>{touristDetails.email}</span>
            </div>

            <div className={classes.otherDetails}>
                <hr />
                <div>
                    <div className={classes.details}>
                        <span>Country</span>
                        <span>#123</span>
                    </div>
          
                    <div className={classes.details}>
                        <span>Contact Number</span>
                        <span>{touristDetails.contact_Number} </span>
                    </div>  

                </div>
                <hr />
            </div>
            <button>Update</button>
        </div>

        <div className = {classes.profileGallery}>
            <AddGallery />
        </div>
      </div>
    </div>
  )

}else if(tourGuideDetails){
  return(
    <div className = {classes.profile}>

      <div className = {classes.profileImg}>
        <span>Profile</span>
      </div>

      <div className = {classes.profileBody}>
          <div className={classes.ProfileCard}>
            <div className={classes.profileImages}>
                <img src = 'https://media.istockphoto.com/photos/tropical-leaves-abstract-green-leaves-texture-nature-background-picture-id1254474165?b=1&k=20&m=1254474165&s=170667a&w=0&h=4yiAJ1tXxs3zoEL6S1bPpKSxpbF3XIiTb-bGMedoDtk=' alt = '' />
                <img src = {tourGuideDetails.image} alt = '' />
            </div>
            <div className={classes.profileName}>
                <span>{tourGuideDetails.name}</span>
                <span>{tourGuideDetails.email}</span>
            </div>

            <div className={classes.guideDetails}>
                <hr />
                <div>
                    <div className={classes.subDetails}>
                        <span>District : </span>{tourGuideDetails.district}
                    </div>

                    <div className={classes.subDetails}>
                        <span>Address : </span>{tourGuideDetails.address}
                    </div>  
          
                    <div className={classes.subDetails}>
                        <span>Gender : </span>{tourGuideDetails.gender}
                    </div>  

                    <div className={classes.subDetails}>
                        <span>Contact Number : </span>{tourGuideDetails.contact_Number}
                    </div>  

                    <div className={classes.subDetails}>
                        <span>Languages : </span>{tourGuideDetails.languages}
                    </div>   

                    <div className={classes.subDetails}>
                        <span>Vehicle Model : </span>{tourGuideDetails.model}
                    </div>  

                    <div className={classes.subDetails}>
                        <span>Vehicle Type : </span>{tourGuideDetails.vehicle_type}
                    </div>  

                    <div className={classes.subDetails}>
                        <span>Max no. of Passengers : </span>{tourGuideDetails.No_of_passengers}
                    </div>  

                    <div className={classes.subDetails}>
                        <span>Rate : </span>{tourGuideDetails.rate}
                    </div>  

                    <div className={classes.subDetails}>
                        <span>Vehicle Per Km Rate : </span>{tourGuideDetails.per_Km_Rate}
                    </div>  
                </div>
                <hr />
            </div>
            <button>Update</button>
        </div>

        <div className = {classes.profileGallery}>
            <AddGallery />
        </div>
      </div>
    </div>
  )
}
}
  

export default ProfileDetails;

//   if(tourGuideDetails){
//   return (
//     <div className  ={classes.profileContainer}>
//         <div className = {classes.profileDetails}>
//           <div className = {classes.head}>
//             <img src = {tourGuideDetails.image}
//                 alt = 'abc' />
//                 <button><FontAwesomeIcon icon={faCamera} /></button>
//             <div className = {classes.headContents}>
//                 <div className = {classes.headContainer}>
//                   <h1>{tourGuideDetails.name}</h1>
//                   <div className = {classes.sub}>
//                     <span>{tourGuideDetails.email}</span>
//                     <span>{tourGuideDetails.district}</span>
//                     <span>{tourGuideDetails.rate}</span>
//                   </div>
//                 </div>
//                 <div className = {classes.ratingsContainer}>
//                     <div className = {classes.ratingBar}>
//                         <span className = {classes.ratingText}>Rating</span>
//                         <span className = {classes.rating}>5.0</span>
//                     </div>
//                 </div>   
//             </div>
//           </div>

//           <div className = {classes.bodyItems}>
//               <span><b>Phone : </b>{tourGuideDetails.contact_Number}</span>
//               <span><b>Age : </b>{tourGuideDetails.age}</span>
//               <span><b>Gender : </b>{tourGuideDetails.gender}</span>
//               <span><b>Address : </b>{tourGuideDetails.address}</span>
//               <span><b>Languages : </b>{tourGuideDetails.languages}</span>
//               <span><b>Per KM rate : </b>{tourGuideDetails.per_Km_Rate}</span>
//               <span><b>Vehicle Type : </b>{tourGuideDetails.vehicle_type}</span>
//               <span><b>Vehicle Model : </b>{tourGuideDetails.model}</span>
//               <span><b>Max Passengers : </b>{tourGuideDetails.No_of_passengers}</span>
//           </div>
//             <Button className = {classes.btn}><FontAwesomeIcon icon={faPencil} className = {classes.pencilIcon}/>Edit Details</Button>
//         </div>
//     </div>
//   )
//   }else if(touristDetails){
//     return (
//       <div className  ={classes.profileContainer}>
//           <div className = {classes.profileDetails}>
//             <div className = {classes.head}>
//               <img src = {touristDetails.image}
//                   alt = 'abc' />
//                   <button><FontAwesomeIcon icon={faCamera} /></button>
//               <div className = {classes.headContents}>
//                   <div className = {classes.headContainer}>
//                     <h1>{touristDetails.name}</h1>
//                     <div className = {classes.sub}>
//                       <span>{touristDetails.email}</span>
//                     </div>
//                   </div>   
//               </div>
//             </div>
//             <div className = {classes.bodyItems}>
//                 <span><b>Phone : </b>{touristDetails.contact_Number}</span>
//                 <span><b>Age : </b></span>
//                 <span><b>Gender : </b>{touristDetails.gender}</span>
//                 <span><b>Country : </b></span>
//             </div>
//               <Button className = {classes.btn}><FontAwesomeIcon icon={faPencil} className = {classes.pencilIcon}/>Edit Details</Button>
//           </div>
//       </div>
//     )
//   }
// }


