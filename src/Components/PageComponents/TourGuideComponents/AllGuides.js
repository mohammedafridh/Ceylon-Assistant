import {useState, useEffect} from 'react'
import {db,auth} from '../../../Firebase'
import {collection, onSnapshot} from 'firebase/firestore'
import classes from './AllGuides.module.css'
import {Button} from 'react-bootstrap'
import BookingModal from '../../Modals/BookingModal'
import {getDoc, doc, where, query} from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'

function AllGuides() {

  const [guides,setGuides] = useState([])
  const [touristDetails, setTouristDetails] = useState('')
  const [tourGuideDetails,setTourGuideDetails] = useState('')
  const [loading, setLoading] = useState(false)
  const [error,setError] = useState()
  const [modalOpened,setModalOpened] = useState(false)

  useEffect(()=>{
    onAuthStateChanged(auth, async (user)=>{
      if(user){
        const tourist = await getDoc(doc(db,'Tourist',user.uid))
        const touristData = tourist.data()
        const tourGuide = await getDoc(doc(db,'Guides',user.uid))
        const tourGuideData = tourGuide.data()

        if(touristData===undefined){
          setTourGuideDetails(tourGuideData)
        }else if(tourGuideData===undefined){
          setTouristDetails(touristData)
        }
      }
    })
  },[])


  useEffect(()=>{
    setLoading(true)
    const allData = onSnapshot(collection(db,'Guides'),(snapshot)=>{
      let list = []
      snapshot.docs.forEach((doc)=>{
        list.push({
          id:doc.id,
          ...doc.data()
        })
      })
      setGuides(list)
      setLoading(false)
    },(error)=>{
      setError(error.message)
    });
    return ()=>{
      allData()
    };
  },[]);

  return (<div>
   
    {guides.map((guide)=>(
      <div className={classes.searchItem} key = {guide.id}>

        <img src = {guide.image} alt = 'abc' className={classes.guideImg}/>

        <div className={classes.guideDetails}>
          <div className = {classes.topDetails}>
              <span>{guide.firstName} {guide.lastName}</span>
              <span>{guide.email}</span>
          </div>

            <div className = {classes.details}>
                <span>Contact : </span>
                <span>{guide.contactNumber}</span>
            </div>

            <div className = {classes.details}>
                <span>NIC No: </span>
                <span>{guide.nicNumber}</span>
            </div>

            <div className = {classes.details}>
                <span>District: </span>
                <span>{guide.district}</span>
            </div>

            <div className = {classes.details}>
                <span>Guide Type : </span>
                <span>{guide.guideType}</span>
            </div>

            <div className = {classes.details}>
                <span>Languages : </span>
                <span>{guide.languages}</span>
            </div>

            <div className = {classes.details}>
                <span>Guide Rate : </span>
                <span>{guide.guideRate} per day</span>
            </div>

            <div className = {classes.details}>
                <span>Vehicle : </span>
                <span>{guide.model}</span>
            </div>

            <div className = {classes.details}>
                <span>Max Passengers : </span>
                <span>{guide.maxPassengers}</span>
            </div>

            <div className = {classes.details}>
                <span>Vehicle KM Rate : </span>
                <span>Rs. {guide.perKmRate}/=</span>
            </div>
            
        </div>

        <div className = {classes.otherDetails}>
          <div className={classes.ratingBar}>
            <span>Rating</span>
            <span>5.0</span>
          </div>
          <div className={classes.availability}>
            <span>Available</span>
          </div>

{touristDetails &&
          <div className = {classes.subDetails}>
            <button className = {classes.bookingBtn}
             onClick = {()=>setModalOpened(true)}>
                Book Guide
            </button>
          </div>
}
    <BookingModal 
      modalOpened = {modalOpened} 
      setModalOpened = {setModalOpened}
      guide  = {guide}
    />

        </div>
    </div> 
    ))}
      
  </div>
    
  )
}

export default AllGuides;

// onClick = {() => moreDetailsHandler(guide)}