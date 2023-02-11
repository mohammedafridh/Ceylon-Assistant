import {useState,useEffect} from 'react'
import './ReviewSlideshow.css'
import Carousel from 'react-bootstrap/Carousel';
import {collection, onSnapshot} from 'firebase/firestore'
import {db} from '../../../Firebase'
import { useUser } from '../../../Context/UserContext';

function ReviewSlideshow() {

    const [index, setIndex] = useState(0);
    const [reviews,setReviews] = useState([])
    const [error,setError] = useState('')
    const {tourists,guides} = useUser()

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const findTouristName = (id) => {
        const tourist = tourists.find(tourist => tourist.id === id)
        return tourist ? tourist.firstName + ' ' + tourist.lastName: null   
      }

      const findGuideName = (id) => {
        const guide = guides.find(guide => guide.id === id)
        return guide ? guide.firstName + ' ' + guide.lastName: null   
      }

    useEffect(()=>{
            const allData = onSnapshot(collection(db,'ratings'),(snapshot)=>{
            let list = []
            snapshot.docs.forEach((doc)=>{
              list.push({
                id:doc.id,
                ...doc.data()
              })
            })
            setReviews(list.filter(item=>item.status==='Published'))
          },(error)=>{
            setError(error.message)
          });
          return ()=>{
            allData()
          };
    },[])

  return (
    <div className="reviewSlideshow">
        <hr></hr>
        <h1>Friendly Reviews on our Guides</h1>
    <Carousel activeIndex={index} onSelect={handleSelect} className = 'carousel'>
        {reviews.map((review)=>(
            <Carousel.Item key = {review.id}>
                <div className="reviewContainer">
                    <h4>"{review.review}"</h4>
                    <div className="people">
                        <h5>Guide: <span>{findGuideName(review.guide)}</span></h5>
                    </div>
                    <div className="people">
                        <h5>Tourist: <span>{findTouristName(review.tourist)}</span></h5>
                    </div>
                    
                </div>
            </Carousel.Item>
            ))}
    </Carousel>
    </div>
  )
}

export default ReviewSlideshow

