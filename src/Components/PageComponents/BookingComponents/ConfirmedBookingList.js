import React,{useState,useEffect} from 'react'
import classes from './BookingList.module.css'
import Table from 'react-bootstrap/Table';
import ViewBookingDetailsModal from '../../Modals/ViewBookingDetailsModal'
import FinishTourModal from '../../Modals/FinishTourModal'
import {db, auth } from '../../../Firebase'
import {getDoc, doc, collection, onSnapshot} from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'

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

  const finishHandler = ()=>{}

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
      setTours(list.filter(item => item.status === 'Active'))
      setLoading(false)
    },(error)=>{
      setError(error.message)
    });
    return ()=>{
      allData()
    };
  },[]);

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const tourists = await getDoc(doc(db, 'Tourist', user.uid))
      const touristData = tourists.data()
      const tourGuides = await getDoc(doc(db, 'Guides', user.uid))
      const tourGuideData = tourGuides.data()

      if (touristData === undefined) {
        setTourGuide(tourGuideData)
      } else if (tourGuideData === undefined) {
        setTourist(touristData)
      }
    }
  })
    
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
      {tours.map((tour)=>(
         <tr key = {tour.id}>
           <td>{tour.id}</td>
           <td>{tour.email}</td>
           <td>{tour.contactNumber}</td>
           <td>{tour.pickupDestination}</td>
           <td>{tour.tourDestination}</td>
           <td>{tour.from}</td>
           <td>{tour.to}</td>
           <td>{tour.time}</td>
           <td><button 
           style = {{backgroundColor:'blue', paddingRight:8, paddingLeft: 8, color:'white', borderRadius:5}}
           onClick = {tourist? ()=>setFinishTourModal(true) : ()=>finishHandler(tour)}>Finish</button></td>
           <FinishTourModal
              finishTourModal={finishTourModal}
              setFinishTourModal={setFinishTourModal}
            /> 
         </tr>
             ))}
       </table>
       </div>
          </div>
  )
}

export default ConfirmedBookingList