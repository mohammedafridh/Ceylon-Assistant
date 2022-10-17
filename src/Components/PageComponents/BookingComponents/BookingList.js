import { useEffect, useState } from 'react'
import classes from './BookingList.module.css'
import {Button} from 'react-bootstrap' 
import {useNavigate} from 'react-router-dom'
import { collection, getDoc, onSnapshot,doc,getDocs,deleteDoc } from 'firebase/firestore'
import {db,auth} from '../../../Firebase'
import {useUserAuth} from '../../../Context/Context'
import { onAuthStateChanged } from 'firebase/auth'
import BookingUpdateModal from '../../Modals/BookingUpdateModal'

function BookingList() {

const navigate  = useNavigate('')
const [bookings,setBookings] = useState([])
const [error,setError] = useState()
const [tourGuideDetails, setTourGuideDetails] = useState('')
const [touristDetails,setTouristDetails] = useState('')
const [tourist,setTourist] = useState('')
const [tourGuide,setTourGuide] = useState('')
const [modalOpened,setModalOpened] = useState(false)
const {user} = useUserAuth()

async function getData() {
    const docRef = collection(db, "booking");
    const docSnap = await getDocs(docRef);
    return docSnap;
} 

useEffect(() => {
    getData()
      .then((data) => {
        let list = [];
        data.docs.forEach((doc) => {
          list.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        list.forEach((item) => {
            getDoc(doc(db, "Tour_Guides", item.tourGuideId)).then((data) => {
              setTourGuideDetails(data.data());
            });
  
            getDoc(doc(db, "Tourists", item.touristId)).then((data) => {
              setTouristDetails(data.data());
            });
          });
        setBookings(list);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

    onAuthStateChanged(auth, async (user)=>{
        if(user){
            const tourists = await getDoc(doc(db,'Tourists',user.uid))
            const touristData = tourists.data()
            const tourGuides = await getDoc(doc(db,'Tour_Guides',user.uid))
            const tourGuideData = tourGuides.data()
    
            if(touristData===undefined){
              setTourGuide(touristDetails)
            }else if(tourGuideData===undefined){
              setTourist(tourGuideDetails)
            }
          }
    })

    
function cancelBooking(booking){
    deleteDoc(doc(db,'booking',booking.id))
}

if(tourist){
    return(
      <div className = {classes.bookings}>
        <img src  ='https://www.srilankan.com/Images/pages/myb-header-image.jpg' 
        alt = 'abc' className={classes.bookingImage}/>
        <div className = {classes.bookingComponents}>
          <div className = {classes.bookingContainer}>
          {bookings.map((booking)=>(
                <div className = {classes.bookingList} key = {booking.id}>
                <img src = {tourist.image} 
                alt = '' />
                <div className = {classes.detailsContainer}>
                    <div className = {classes.bookingDetails}>
                        <span><b>Email : </b>{tourist.email}</span>
                        <span><b>Name : </b>{tourist.name}</span>
                        <span><b>Tour Location : </b>{booking.travel_location} </span>
                        <span><b>Pick-up Destination : </b>{booking.pickup_location}</span>
                        <span><b>Tour Date Range : </b></span>
                        <span><b>Pick-up Time : </b>{booking.time}</span>
                    </div>
                    <div className = {classes.buttonContainer}>
                        <button className = {classes.cancelBtn} onClick = {()=>cancelBooking(booking)}>Cancel</button>
                        <button className = {classes.mainBtn} onClick = {()=>setModalOpened(true)}>Update</button>
                        <BookingUpdateModal 
                            modalOpened = {modalOpened} 
                            setModalOpened = {setModalOpened}
                        />
                    </div>
                </div>
            </div>
            ))}
          </div>
            
        </div>
      </div>
        
      )
}

if(tourGuide){
    return (
      <div className = {classes.bookings}>
        <img src  ='https://www.srilankan.com/Images/pages/myb-header-image.jpg' 
        alt = 'abc' className={classes.bookingImage}/>
        <div className = {classes.bookingContainer}>
            {bookings.map((booking)=>(
                <div className = {classes.bookingList} key = {booking.id}>
                <img src = {tourGuide.image} 
                alt = '' />
                <div className = {classes.detailsContainer}>
                    <div className = {classes.bookingDetails}>
                        <span><b>Email : </b>{tourGuide.email}</span>
                        <span><b>Name : </b>{tourGuide.name}</span>
                        <span><b>Tour Location : </b>{booking.travel_location} </span>
                        <span><b>Pick-up Destination : </b>{booking.pickup_location}</span>
                        <span><b>Tour Date Range : </b></span>
                        <span><b>Pick-up Time : </b>{booking.time}</span>
                    </div>
                    <div className = {classes.buttonContainer}>
                        <button className = {classes.mainBtn}>More Details</button>
                    </div>
                </div>
            </div>
            ))}
        </div>
        </div>
      )
}

}

export default BookingList;
