import {useState, useEffect} from 'react'
import {db} from '../../../Firebase'
import {collection, onSnapshot} from 'firebase/firestore'
import classes from './AllGuides.module.css'
import {Button} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import BookingModal from '../../Modals/BookingModal'

function AllGuides() {

  const [guides,setGuides] = useState([])
  const [selectedGuide, setSelectedGuide] = useState('')
  const [loading, setLoading] = useState(false)
  const [error,setError] = useState()
  const [modalOpened,setModalOpened] = useState(false)
  const navigate = useNavigate()

  function moreDetailsHandler(guide){
    setSelectedGuide(guide)
    navigate('/selectedGuide', {state:guide})
  }

  useEffect(()=>{
    setLoading(true)
    const allData = onSnapshot(collection(db,'Tour_Guides'),(snapshot)=>{
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
              <span>{guide.name}</span>
              <span>{guide.email}</span>
          </div>

            <div className = {classes.details}>
                <span>Contact : </span>
                <span>{guide.contact_Number}</span>
            </div>

            <div className = {classes.details}>
                <span>NIC No: </span>
                <span></span>
            </div>

            <div className = {classes.details}>
                <span>District: </span>
                <span>{guide.district}</span>
            </div>

            <div className = {classes.details}>
                <span>Guide Type : </span>
                <span></span>
            </div>

            <div className = {classes.details}>
                <span>Guide Rate : </span>
                <span>{guide.rate} per day</span>
            </div>

            <div className = {classes.details}>
                <span>Vehicle : </span>
                <span></span>
            </div>

            <div className = {classes.details}>
                <span>Max Passengers : </span>
                <span>{guide.No_of_passengers}</span>
            </div>

            <div className = {classes.details}>
                <span>Vehicle KM Rate : </span>
                <span>Rs. {guide.per_Km_Rate}/=</span>
            </div>
            
        </div>

        <div className = {classes.otherDetails}>
          <div className={classes.ratingBar}>
            <span>Rating</span>
            <span>5.0</span>
          </div>

          <div className = {classes.subDetails}>
            <button className = {classes.bookingBtn}
             onClick = {()=>setModalOpened(true)}>
                Book Guide
            </button>
            <BookingModal 
              modalOpened = {modalOpened} 
              setModalOpened = {setModalOpened}
            />
          </div>


        </div>
    </div> 
    ))}
      
  </div>
    
  )
}

export default AllGuides;

// onClick = {() => moreDetailsHandler(guide)}