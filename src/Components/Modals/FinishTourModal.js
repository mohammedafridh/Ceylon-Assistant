import { useState, useEffect } from "react";
import { Modal, useMantineTheme, Select, MultiSelect } from "@mantine/core";
import { doc, setDoc, collection, onSnapshot,query, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import "./FinishTourModal.css";
import { useUserAuth } from "../../Context/Context";
import { useUser } from "../../Context/UserContext";
import { toast } from "react-hot-toast";

function FinishTourModal({ finishTourModal, setFinishTourModal, details }) {
  const {guides, tourists, userType} = useUser()

  const theme = useMantineTheme();
  const [rating, setRating] = useState(null);
  const [totalRating, setTotalRating] = useState([]);
  const [guideRatings, setGuideRatings] = useState([]);
  const [review, setReview] = useState("");
  const [guide, setGuide] = useState(details.email);
  const [hover, setHover] = useState(0);
  const [status,setStatus] = useState('Active')
  const { user } = useUserAuth();

  // useEffect(()=>{
  //   setGuide(details.email)
  // },[details])

  const tourHandler =  (e) => {
    console.log({rating, review})
    //return if rating is not selected and review is empty
    if (!rating || !review) return;
    e.preventDefault();
    //update guide ratings
    const findGuide = guides.find(guide=>guide.id===details.guide)
    const newRatings = [...findGuide.ratings, {rating, review, ratedTourist: user.uid, ratingStatus:status}]
    setGuideRatings(newRatings)
    setDoc(doc(db, "Guides", details.guide), { ratings: newRatings }, { merge: true }).then(()=> {
      setRating(null)
      setReview('')
      toast.success('* Thanks for your response. Come Again!')
      setFinishTourModal(false)

        const cancelItem = query(doc(db,'tours',details.id));
         updateDoc(cancelItem, {
        status: 'inactive'
        });

        const updateAvailability = query(doc(db, 'Guides', details.guide));
         updateDoc(updateAvailability, {
        availability: 'Available'
        })

    }).catch((error) => {
      toast.error('Failed to record your response!');
    });
  }

  const onModalClose = () => {
    setFinishTourModal(false);
    setRating(null)
    setReview('')
  };

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.25}
      overlayBlur={1}
      size="55%"
      opened={finishTourModal}
      onClose={onModalClose}
    >
      <form className="reviewForm" onSubmit={tourHandler}>
        <h3>Lets Have a Friendly Review On Our Guide</h3>

        <div className="ratingDetails">
          <label>Reviews</label>
          <textarea onChange={(e) => setReview(e.target.value)}></textarea>
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
        <button disabled={!rating || !review} type="submit" className="reviewBtn">
          Submit
        </button>
      </form>
    </Modal>
  );
}

export default FinishTourModal;