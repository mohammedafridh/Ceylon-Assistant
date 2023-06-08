import React,{useState,useEffect} from 'react'
import classes from './BookingList.module.css'
import Table from 'react-bootstrap/Table';
import ViewBookingDetailsModal from '../../Modals/ViewBookingDetailsModal'
import FinishTourModal from '../../Modals/FinishTourModal'
import {db, auth } from '../../../Firebase'
import {getDoc, doc, collection, onSnapshot, query,updateDoc} from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { useUser } from '../../../Context/UserContext'
import { toast } from 'react-hot-toast'
import { useUserAuth } from '../../../Context/Context';
import loadingGif from '../../../assets/loading-gif.gif'
import emailjs from '@emailjs/browser';

const ConfirmedBookingList = () => {

    const[finishTourModal, setFinishTourModal] = useState(false)
    const [modalOpened,setModalOpened] = useState(false)
    const [touristDetails, setTouristDetails] = useState('')
    const [loading, setLoading] = useState('')
    const [error, setError] = useState('')
    const [tourGuide, setTourGuide] = useState('')
    const [tourist, setTourist] = useState('')
  const [tourGuideDetails,setTourGuideDetails] = useState('')
  const [tours,setTours] = useState([])
  const[bookings,setBookings] = useState([])
  const [selectedGuide,setSelectedGuide] = useState({})
  const {guides,tourists, userType} = useUser()
  const {user} = useUserAuth()
  const[userTour,setUserTour] = useState([])

  const finishTour = (tour)=>{
    setSelectedGuide(tour)
    setFinishTourModal(true)
  }

  const finishHandler = (tour)=>{
    setLoading(true)
    const cancelItem = query(doc(db,'tours',tour.id));
    updateDoc(cancelItem, {
    status: 'inactive'
    });

    const updateAvailability = query(doc(db, 'Guides', tour.guide));
    updateDoc(updateAvailability, {
    availability: 'Available'
    })

toast.success('Tour Completion Successful!')
setLoading(false)
  }

  useEffect(() => {
    setUserTour(userType === 'guide'? tours.filter(tour => tour.guide === user.uid):
    tours.filter(tour => tour.tourist === user.uid))
  }, [userType, guides,tours,user])

  useEffect(()=>{
    setLoading(true)
    const allData = onSnapshot(collection(db,'tours'),(snapshot)=>{
      let list = []
      snapshot.docs.forEach((doc)=>{
        list.push({
          id:doc.id,
          ...doc.data()
        });
      });
      // const currentMonth = new Date().getMonth();
      // setTours(list.filter(item => new Date(item.startDate).getMonth()===currentMonth))

      setTours(list.filter(item => item.status==='Active'))
      console.log(tours)
      setLoading(false)
    },(error)=>{
      setError(error.message)
    });
    return ()=>{
      allData()
    };
  },[]);

  const findGuideEmail = (id) => {
    const guide = guides.find(guide => guide.id === id)
    return guide ? guide.email : null   
  }



  const findTouristEmail = (id) => {
    const tourist = tourists.find(tourist => tourist.id === id)
    return tourist ? tourist.email : null   
  }

  const findGuideContactNumber = (id) => {
    const guide = guides.find(guide => guide.id === id)
    return guide ? guide.contactNumber : null   
  }

  const findTouristContactNumber = (id) => {
    const tourist = tourists.find(tourist => tourist.id === id)
    return tourist ? tourist.contactNumber : null   
  }
    
  return (
    <div className  ={classes.tours}>
        <img src  ='https://www.srilankan.com/Images/pages/myb-header-image.jpg' 
        alt = 'abc' className={classes.bookingImage}/>

            <h1>Tours</h1>
            
        <div className={classes.confirmedBookingTable}>
         <table>
         <tr>
           <th>Tour Id</th>
           <th>Email</th>
           <th>Contact Number</th>
           <th>Tour Destination</th>
           <th>Pickup Destination</th>
           <th>From</th>
           <th>To</th>
           <th>Time</th>
           <th>Actions</th>
         </tr>
      {userTour?.map((tour)=>(
         <tr key = {tour.id}>
           <td>{tour.id}</td>
           <td>{userType ===  'tourist'? findGuideEmail(tour.guide):findTouristEmail(tour.tourist)}</td>
           <td>{userType ===  'tourist'? findGuideContactNumber(tour.guide):findTouristContactNumber(tour.tourist)}</td>
           <td>{tour.pickup}</td>
           <td>{tour.destination}</td>
           <td>{tour.startDate}</td>
           <td>{tour.endDate}</td>
           <td>{tour.time}</td>
           <td>
            {loading?
            <button type = 'submit' className={classes.finishTourBtn}>
              <img className='loadingIcon' src={loadingGif} />
            </button>: 

            <button 
           className={classes.finishTourBtn}
           onClick = {userType === 'tourist'? ()=>finishTour(tour) : ()=>finishHandler(tour)}>Finish
           </button>}
           </td>
           
           {finishTourModal && <FinishTourModal
              finishTourModal={finishTourModal}
              setFinishTourModal={setFinishTourModal}
              details = {selectedGuide}
            /> }
         </tr>
             ))}
       </table>
       </div>
          </div>
  )
}

export default ConfirmedBookingList