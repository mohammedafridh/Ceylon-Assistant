import {useState,useEffect} from 'react'
import { Modal, useMantineTheme, Select, MultiSelect  } from '@mantine/core';
import {doc, setDoc, collection} from 'firebase/firestore'
import {db} from '../../Firebase'
import './FinishTourModal.css'
import { useUserAuth } from '../../Context/Context';

function FinishTourModal({finishTourModal,setFinishTourModal,details}) {

    const theme = useMantineTheme();
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('')
    const[guide,setGuide] = useState(details.email)
    const [hover, setHover] = useState(0);
    const {user} = useUserAuth()

    useEffect(()=>{
        setGuide(details.email)
        setRating(rating)
        setReview(review)
    },[details, rating, details.email,review])

    const tourHandler = async (e)=>{
        e.preventDefault()
        const ratings = doc(db,'ratings',details.email)
        await setDoc(ratings,{guide:guide, tourist:user.uid, review:review, rating:rating})
        .then(()=>{
          setFinishTourModal(false)
          alert('Tour Finished Successfully! Thanks for your response')
        })
    }

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size = '55%'
      opened = {finishTourModal}
      onClose = {()=>setFinishTourModal(false)}
    >

        <form className = 'reviewForm' onSubmit = {tourHandler}>
            <h3>Lets Have a Friendly Review On Our Guide</h3>

            <div className = 'ratingDetails'>
                <label>Reviews</label>
                <textarea 
                    onChange= {(e)=>setReview(e.target.value)}>
                </textarea>
            </div>

            <div className="star-rating">
                <label>Rate Guide</label>
                <div>
                    {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                        <button
                            type="button"
                            key={index}
                            className={index <= (hover || rating) ? "on" : "off"}
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                        >
                            <span className="star">&#9733;</span>
                        </button>
                        );
                    })}
                </div>
            </div>

            
            <button type = 'submit' className='reviewBtn'>Submit</button>
        </form>
    </Modal>
  );
}

export default FinishTourModal



