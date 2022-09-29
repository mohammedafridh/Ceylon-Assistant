import { useEffect, useState } from 'react'
import classes from './BookingList.module.css'
import {Button} from 'react-bootstrap' 
import {useNavigate} from 'react-router-dom'
import { collection, getDoc, onSnapshot,doc } from 'firebase/firestore'
import {db} from '../../../Firebase'
// import {useUserAuth} from '../../../Context/Context'

function BookingList() {

const navigate  = useNavigate('')
const [bookings,setBookings] = useState([])
const [error,setError] = useState()
const [tourGuideName, setTourGuideName] = useState('')
// const {user} = useUserAuth()

useEffect(()=>{
    const booking = onSnapshot(collection(db,'booking'),(snapshot)=>{
        let list  =[]
        snapshot.docs.forEach((doc)=>{
            list.push({
                id:doc.id,
                ...doc.data()
            })
        })
        setBookings(list)
        {bookings.map((booking)=>{
            // console.log(booking.tourGuideId)
            const tourGuide = getDoc(doc(db,'Tour_Guides',booking.tourGuideId))
            const tourGuideData = tourGuide.data()
            console.log(tourGuideData)

        })}
    },(error)=>{
        setError(error.message)
    })
    return ()=>{
        booking()
    }
    // printName()
},[])

function handleBooking(){
    navigate('/selectedBooker')
    
}

// useEffect(()=>{
//     const tourGuide = onSnapshot(collection(db,'Tour_Guides'))
//     const tourGuideData = tourGuide.data()
//     console.log({tourGuideData})
// })
    


// function printName(id){
//     // bookings.map((booking)=> {
//         //  const tourGuide = getDoc(doc(db,'Tour_Guides',id))
//         //  const tourGuideData = tourGuide.data()
//         //  console.log(id)
//     //     setTourGuideName(tourGuideData.name)
//     return 'name'
//     // })
// }

  return (
    <div className = {classes.bookingContainer}>
        {bookings.map((booking)=>(
            <div className = {classes.bookingList} key = {booking.id}>
            <img src = 'https://firebasestorage.googleapis.com/v0/b/ceylon-assistant.appspot.com/o/Tour_Guide_Images%2Fff2ab708-d1ef-4400-9c02-1adabd3a2a27.jpg428f69cd-af41-4d8b-b7dc-fa46fdcb994c?alt=media&token=aabcbf7d-4f43-47da-9cef-674db5357da5' 
            alt = '' />
            <div className = {classes.detailsContainer}>
                <div className = {classes.bookingDetails}>
                    <span><b>Name : </b></span>
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

export default BookingList;
