import { useEffect, useState } from 'react'
import classes from './BookingList.module.css'
import {Button} from 'react-bootstrap' 
import {useNavigate} from 'react-router-dom'
import { collection, getDoc, onSnapshot,doc,getDocs,deleteDoc } from 'firebase/firestore'
import {db,auth} from '../../../Firebase'
import {useUserAuth} from '../../../Context/Context'
import { onAuthStateChanged } from 'firebase/auth'
import BookingUpdateModal from '../../Modals/BookingUpdateModal'
import ViewBookingDetailsModal from '../../Modals/ViewBookingDetailsModal'
import FinishTourModal from '../../Modals/FinishTourModal'

function PendingBookingList() {

const navigate  = useNavigate('')
const [bookings,setBookings] = useState([])
const [error,setError] = useState()
const [tourGuideDetails, setTourGuideDetails] = useState('')
const [touristDetails,setTouristDetails] = useState('')
const [tourist,setTourist] = useState('')
const [tourGuide,setTourGuide] = useState('')
const [modalOpened,setModalOpened] = useState(false)
const {user} = useUserAuth()

  useEffect(()=> {

  const pendingBookingData = async()=>{
  await getDocs(collection(db,'pending_booking'))
  .then((data)=>{
    let list = []
    data.docs.forEach((doc)=>{
      list.push({
        id:doc.id,
        ...doc.data()
      });
    });
    list.forEach((item)=>{
        getDoc(doc(db, "Guides", item.guide)).then((data) => {
        setTourGuideDetails(data.data());
        });

        getDoc(doc(db, "Tourist", item.tourist)).then((data) => {
          setTouristDetails(data.data());
          });
    });
    setBookings(list)
    console.log(bookings)
  })
  .catch((error)=>{
    return (error.message)
  })
  return pendingBookingData;
}  
},[])

//checking logged in user type
onAuthStateChanged(auth, async (user)=>{
  if(user){
      const tourists = await getDoc(doc(db,'Tourist',user.uid))
      const touristData = tourists.data()
      const tourGuides = await getDoc(doc(db,'Guides',user.uid))
      const tourGuideData = tourGuides.data()

      if(touristData===undefined){
        setTourGuide(touristDetails)
      }else if(tourGuideData===undefined){
        setTourist(tourGuideDetails)
      }
    }
})

    return(
      <div className = {classes.bookings}>
        
        <div className = {classes.bookingComponents}>
          <div className = {classes.bookingContainer}>
            <h1>{tourist? 'Pending Requests' : 'Pending Bookings'}</h1>
          {bookings.map((booking)=>(
                <div className = {classes.bookingList} key = {booking.id}>
                <img src = {tourist? tourist.image: tourGuide.image} 
                alt = '' />
                <div className = {classes.detailsContainer}>
                    <div className = {classes.bookingDetails}>

                      <div className = {classes.details}>
                        <span>Email : </span>
                        <span>{tourist? tourist.email: tourGuide.email}</span>
                      </div>

                      <div className = {classes.details}>
                        <span>Tour Destination : </span>
                        <span>{booking.destination}</span>
                      </div>

                      <div className = {classes.details}>
                        <span>Pick-up Destination : </span>
                        <span>{booking.location}</span>
                      </div>

                      <div className = {classes.details}>
                        <span>Tour Date Range : </span>
                        <span>{booking.startDate} - {booking.endDate}</span>
                      </div>

                      <div className = {classes.details}>
                        <span>Tour Time : </span>
                        <span>{booking.time}</span>
                      </div>
                    </div>

                    <div className = {classes.buttonContainer}>
                        <button className = {classes.cancelBtn} onClick = ''>Cancel</button>
                        <button className = {classes.mainBtn} onClick = {()=>setModalOpened(true)}>
                          {tourist?'Update' : 'View More Details'}</button>
                        {tourist?
                          <BookingUpdateModal 
                              modalOpened = {modalOpened} 
                              setModalOpened = {setModalOpened}
                          />:
                        <ViewBookingDetailsModal 
                          modalOpened = {modalOpened} 
                          setModalOpened = {setModalOpened}
                        />}
                    </div>
                </div>
            </div>
            ))}
          </div>           
        </div>
      </div>
        
      )
}

export default PendingBookingList;
