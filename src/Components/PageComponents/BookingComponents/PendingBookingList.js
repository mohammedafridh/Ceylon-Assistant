import { useEffect, useState } from 'react'
import classes from './BookingList.module.css'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc, query, doc, getDocs, updateDoc,onSnapshot } from 'firebase/firestore'
import { db, auth } from '../../../Firebase'
import { useUserAuth } from '../../../Context/Context'
import { onAuthStateChanged } from 'firebase/auth'
import BookingUpdateModal from '../../Modals/BookingUpdateModal'
import ViewBookingDetailsModal from '../../Modals/ViewBookingDetailsModal'
import FinishTourModal from '../../Modals/FinishTourModal'
import { useUser } from '../../../Context/UserContext'
import { toast } from 'react-hot-toast'

function PendingBookingList() {

  const navigate = useNavigate('')
  const [bookings, setBookings] = useState([])
  const [error, setError] = useState()
  const [loading,setLoading] = useState(false)
  const [tourist, setTourist] = useState('')
  const [tourGuide, setTourGuide] = useState('')
  const [status, setStatus] = useState('Active')
  const [modalOpened, setModalOpened] = useState(false)
  const [selectedooking, setSelectedBooking] = useState({})
  const {guides,tourists, userType} = useUser()
  const current = new Date();
  const addDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const findGuideEmail = (id) => {
    const guide = guides.find(guide => guide.id === id)
    return guide ? guide.email : null   
  }

  const findTouristEmail = (id) => {
    const tourist = tourists.find(tourist => tourist.id === id)
    return tourist ? tourist.email : null   
  }

  const findGuideImage = (id) => {
    const guide = guides.find(guide => guide.id === id)
    return guide ? guide.image : null   
  }

  const findTouristImage = (id) => {
    const tourist = tourists.find(tourist => tourist.id === id)
    return tourist ? tourist.image : null   
  }

  const findGuideContactNumber = (id) => {
    const guide = guides.find(guide => guide.id === id)
    return guide ? guide.contactNumber : null   
  }

  const findTouristContactNumber = (id) => {
    const tourist = tourists.find(tourist => tourist.id === id)
    return tourist ? tourist.contactNumber : null   
  }

  useEffect(()=>{
    setLoading(true)
    const allData = onSnapshot(collection(db,'pending_booking'),(snapshot)=>{
      let list = []
      snapshot.docs.forEach((doc)=>{
        list.push({
          id:doc.id,
          ...doc.data()
        });
      });

      setBookings(list.filter(item => item.status ==='Active'))
      setLoading(false)
    },(error)=>{
      setError(error.message)
    });
    return ()=>{
      allData()
    };
  },[]);

  const cancelBooking = async(booking)=>{
    const bookingCancel = query(doc(db,'pending_booking',booking.id));
     await updateDoc(bookingCancel, {
      status: 'inactive'
     });
     toast.success('Booking Deleted Successfully')
  }

  const acceptBooking = async(booking)=>{
    try{
      const addTour = collection(db,"tours")
      await addDoc(addTour,{guide:booking.guide, tourist:booking.tourist, destination:booking.destination,
        pickup:booking.location, startDate:booking.startData, endDate:booking.endDate, time:booking.time,
         status:status, date:addDate })
      .then(async()=>{
            const updateStatus = query(doc(db, 'pending_booking', booking.id));
            await updateDoc(updateStatus, {
            status: 'inactive'
            })

            const updateAvailability = query(doc(db, 'Guides', booking.guide));
            await updateDoc(updateAvailability, {
            availability: 'On a Tour'
            })
            toast.success('Booking Accepted Successfully')
      })

      }catch(err){
        toast.error('Something Went Wrong. Please Try Again!')
      }
  }

  const updateBooking = (booking)=>{
    setSelectedBooking(booking)
    setModalOpened(true)
  }


  return (
    <div className={classes.bookings}>

      <div className={classes.bookingComponents}>
        <div className={classes.bookingContainer}>
          <h1>Bookings</h1>
          {bookings.map((booking,index) => (
            <div className={classes.bookingList} key={index}>
              <img src={userType === 'tourist' ? findGuideImage(booking.guide) : findTouristImage(booking.tourist)}
                alt='' />
              <div className={classes.detailsContainer}>
                <div className={classes.bookingDetails}>

                  <div className={classes.details}>
                    <span>Email : </span>
                    <span>{userType ===  'tourist'? findGuideEmail(booking.guide):findTouristEmail(booking.tourist)}</span>
                  </div>

                  <div className={classes.details}>
                    <span>Contact Number : </span>
                    <span>{userType ===  'tourist' ? findGuideContactNumber(booking.guide) : findTouristContactNumber(booking.tourist)}</span>
                  </div>

                  <div className={classes.details}>
                    <span>Tour Destination : </span>
                    <span>{booking.destination}</span>
                  </div>

                  <div className={classes.details}>
                    <span>Pick-up Destination : </span>
                    <span>{booking.location}</span>
                  </div>

                  <div className={classes.details}>
                    <span>Tour Date Range : </span>
                    <span>{booking.startData}  /  {booking.endDate}</span>
                  </div>

                  <div className={classes.details}>
                    <span>Tour Time : </span>
                    <span>{booking.time}</span>
                  </div>
                </div>

                <div className={classes.buttonContainer}>
                  <button className={classes.cancelBtn} onClick={()=>cancelBooking(booking)}>Cancel</button>
                  <button className={classes.mainBtn} onClick={userType ===  'tourist'? () => updateBooking(booking): ()=>acceptBooking(booking)}>
                    {userType ===  'tourist' ? 'Update' : 'Accept'}</button>
                  {userType ===  'tourist' &&
                    <BookingUpdateModal
                      modalOpened={modalOpened}
                      setModalOpened={setModalOpened}
                      data = {selectedooking}
                    /> }
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