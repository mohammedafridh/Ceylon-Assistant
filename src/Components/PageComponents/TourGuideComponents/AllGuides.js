import {useState, useEffect} from 'react'
import {db} from '../../../Firebase'
import {collection, onSnapshot} from 'firebase/firestore'
import classes from './AllGuides.module.css'
import {Button} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'

function AllGuides() {

  const [guides,setGuides] = useState([])
  const [selectedGuide, setSelectedGuide] = useState('')
  const [loading, setLoading] = useState(false)
  const [error,setError] = useState()
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
      <img src = {guide.image} 
        alt = 'abc' className={classes.guideImg}/>
      <div className={classes.guideDetails}>
        <h3 className={classes.guideName}>{guide.name}</h3>
        <span className={classes.guideVehicle}>Vehicle Included</span>
        <span className={classes.subTitle}>Ready to give you the best experience</span>
        <span className={classes.guideCancel}>Cancellation free</span>
        <span className={classes.guideCancelText}>Book to get the best services. Hurry Up!</span>
      </div>
      <div className = {classes.otherDetails}>
        <div className={classes.ratingBar}>
          <span className = {classes.ratings}>Rating</span>
          <span className = {classes.ratingNumber}>5.0</span>
        </div>
        <div className = {classes.otherText}>
          <span className = {classes.district}>{guide.district}</span>
          <span className = {classes.rate}>Rs.{guide.rate}</span>
          <span className = {classes.rateText}>Other charges applicable based on the tour</span>
          <Button className = {classes.moreBtn} 
          onClick =  {()=>moreDetailsHandler(guide)}>See More Details</Button>
        </div>
      </div>
    </div> 
    ))}
      
  </div>
    
  )
}

export default AllGuides;

// onClick = {() => moreDetailsHandler(guide)}