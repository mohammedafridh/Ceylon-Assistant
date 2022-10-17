import {useState, useEffect} from 'react'
import classes from './BookGuide.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format, set} from 'date-fns'
import {Button} from 'react-bootstrap'
import {auth, db} from '../../../Firebase'
import {addDoc, collection, getDoc,doc,setDoc} from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth';
import { useLocation } from 'react-router-dom';
import {useUserAuth} from '../../../Context/Context'

function BookGuide(props) {

    const location = useLocation()
    const {user} = useUserAuth()
    const [openDate,setOpenDate] = useState(false)
    const [tour,setTour] = useState('')
    const [pickup,setPickup] = useState('')
    const [time,setTime] = useState('')
    const [tourGuideId, setTourGuideId] = useState('')
    const [startDate,setStartDate] = useState('')
    const [endDate,setEndDate] = useState('')

      useEffect(()=>{
        setTourGuideId(props.tourGuideId)
        onAuthStateChanged(auth, async(user)=>{
            if(user){
                const tourist = await getDoc(doc(db,'Tourists',user.uid))
                const touristData = tourist.data()
            }
        })
      },[])

      function bookingHandler(e){
        e.preventDefault()
        // const collectionRef = collection(db,'booking')
        // addDoc(collectionRef,{travel_location:tour, pickup_location:pickup,
        // time:time, touristId: user.uid, tourGuideId:props.tourGuideId})
      }

  return (

    <div className={classes.bookGuide}>
            <form className={classes.bookingForm}>
                <h3>Book Guide</h3>

                <div>
                    <input type="text" placeholder='Travelling Location'
                    className={classes.bookingInput} name = 'travelLocation' 
                    onChange = {(e)=>setTour(e.target.value)}/>
                </div>

                <div>
                    <input type="text" placeholder='Pick-up Destination' 
                    className={classes.bookingInput} name = 'Pickup'/>
                </div>

                <div>
                    <label>Date From :</label>
                    <input type="date" className={classes.bookingInput}/>
                </div>

                <div>
                    <label>Date To :</label>
                    <input type="date" className = {classes.bookingInput}
                    style = {{width:"6rem"}}/>
                </div>

                <div>
                    <label>Pickup Time :</label>
                    <input type="time" className = {classes.bookingInput} />
                </div>
                <button className = {classes.bookBtn} onClick = {bookingHandler}>Book Guide</button>
            </form>
    </div>

   
  )
}

export default BookGuide;
