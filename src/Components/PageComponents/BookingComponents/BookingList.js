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
import Table from 'react-bootstrap/Table';
import FinishTourModal from '../../Modals/FinishTourModal'

function BookingList() {

const navigate  = useNavigate('')
const [bookings,setBookings] = useState([])
const [error,setError] = useState()
const [tourGuideDetails, setTourGuideDetails] = useState('')
const [touristDetails,setTouristDetails] = useState('')
const [tourist,setTourist] = useState('')
const [tourGuide,setTourGuide] = useState('')
const [modalOpened,setModalOpened] = useState(false)
const[finishTourModal, setFinishTourModal] = useState(false)
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

    return(
      <div className = {classes.bookings}>
        <img src  ='https://www.srilankan.com/Images/pages/myb-header-image.jpg' 
        alt = 'abc' className={classes.bookingImage}/>
        <div className = {classes.bookingComponents}>

          <div className  ={classes.tours}>
            <h1>{tourist?'Confirmed Booking' : 'Tours'}</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>Contact Number</th>
                    <th>Tour Destination</th>
                    <th>Pick-up Destination</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Tour Time</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Markvressdfervregg@gmail.com</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Thornton</td>
                    <td>Thornton</td>
                    <td>Thornton</td>
                    <td>Thornton</td>
                    <td>
                      <div className = {classes.btnContainer}>
                        <button className = {classes.tourDelete}>Delete</button>
                        <button className = {classes.tourFinish} onClick = {()=>setFinishTourModal(true)}>Finish</button>
                        {tourist?
                          <FinishTourModal 
                            finishTourModal = {finishTourModal} 
                            setFinishTourModal = {setFinishTourModal}
                          />:
                        <ViewBookingDetailsModal 
                          modalOpened = {modalOpened} 
                          setModalOpened = {setModalOpened}
                        />}
                      </div>
                      
                    </td>
                  </tr>
                </tbody>
              </Table>
          </div>

          <div className = {classes.bookingContainer}>
            <h1>{tourist? 'Pending Bookings' : 'Pending Requests'}</h1>
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
                        <span>{booking.travel_location}</span>
                      </div>

                      <div className = {classes.details}>
                        <span>Pick-up Destination : </span>
                        <span>{booking.pickup_location}</span>
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
                        <button className = {classes.cancelBtn} onClick = {()=>cancelBooking(booking)}>Cancel</button>
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

export default BookingList;
