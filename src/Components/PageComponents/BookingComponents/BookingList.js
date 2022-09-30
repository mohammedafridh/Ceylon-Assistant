import { useEffect, useState } from 'react'
import classes from './BookingList.module.css'
import {Button} from 'react-bootstrap' 
import {useNavigate} from 'react-router-dom'
import { collection, getDoc, onSnapshot,doc } from 'firebase/firestore'
import {db,auth} from '../../../Firebase'
import {useUserAuth} from '../../../Context/Context'
import { onAuthStateChanged } from 'firebase/auth'

function BookingList() {

const navigate  = useNavigate('')
const [bookings,setBookings] = useState([])
const [error,setError] = useState()
const [tourGuideDetails, setTourGuideDetails] = useState('')
const [touristDetails,setTouristDetails] = useState('')
const [tourist,setTourist] = useState('')
const [tourGuide,setTourGuide] = useState('')

const {user} = useUserAuth()

useEffect(()=>{
    booking()
},[])

    onAuthStateChanged(auth, async (user)=>{
        if(user){
            const tourists = await getDoc(doc(db,'Tourists',user.uid))
            const touristData = tourists.data()
            const tourGuides = await getDoc(doc(db,'Tour_Guides',user.uid))
            const tourGuideData = tourGuides.data()
    
            if(touristData==undefined){
              setTourGuide(touristDetails)
            }else if(tourGuideData==undefined){
              setTourist(tourGuideDetails)
            }
          }
    })
    const booking = onSnapshot(collection(db,'booking'),((snapshot)=>{
        let list = []
        snapshot.docs.forEach((doc)=>{
            list.push({
                id:doc.id,
                ...doc.data()
            })
        })
        setBookings(list)
        list.forEach((item)=>{
            const tourGuide = getDoc(doc(db,'Tour_Guides',item.tourGuideId))
            .then((data)=>{
                setTourGuideDetails(data.data())
            })

            const tourist = getDoc(doc(db,'Tourists',item.touristId))
            .then((data)=>{
                setTouristDetails(data.data())
            })          
        })
    }))
    
function handleBooking(){
    navigate('/selectedBooker')
    
}

if(tourist){
    return (
        <div className = {classes.bookingContainer}>
            {bookings.map((booking)=>(
                <div className = {classes.bookingList} key = {booking.id}>
                <img src = {tourist.image} 
                alt = '' />
                <div className = {classes.detailsContainer}>
                    <div className = {classes.bookingDetails}>
                        <span><b>Name : </b>{tourist.name}</span>
                        <span><b>Tour Location : </b>{booking.travel_location} </span>
                        <span><b>Pick-up Destination : </b>{booking.pickup_location}</span>
                        <span><b>Tour Date Range : </b></span>
                        <span><b>Pick-up Time : </b>{booking.time}</span>
                    </div>
                    <div className = {classes.buttonContainer}>
                        <Button onClick = {handleBooking}>More Details</Button>
                    </div>
                </div>
            </div>
            ))}
        </div>
      )
}

if(tourGuide){
    return (
        <div className = {classes.bookingContainer}>
            {bookings.map((booking)=>(
                <div className = {classes.bookingList} key = {booking.id}>
                <img src = {tourGuide.image} 
                alt = '' />
                <div className = {classes.detailsContainer}>
                    <div className = {classes.bookingDetails}>
                        <span><b>Name : </b>{tourGuide.name}</span>
                        <span><b>Tour Location : </b>{booking.travel_location} </span>
                        <span><b>Pick-up Destination : </b>{booking.pickup_location}</span>
                        <span><b>Tour Date Range : </b></span>
                        <span><b>Pick-up Time : </b>{booking.time}</span>
                    </div>
                    <div className = {classes.buttonContainer}>
                        <Button onClick = {handleBooking}>More Details</Button>
                    </div>
                </div>
            </div>
            ))}
        </div>
      )
}

}

export default BookingList;
