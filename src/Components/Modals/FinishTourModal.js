import {useState} from 'react'
import { Modal, useMantineTheme, Select, MultiSelect  } from '@mantine/core';
import './FinishTourModal.css'


function FinishTourModal({finishTourModal,setFinishTourModal}) {

    const theme = useMantineTheme();
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size = '55%'
      opened = {finishTourModal}
      onClose = {()=>setFinishTourModal(false)}
    >

        <form className = 'reviewForm'>
            <h3>Lets Have a Friendly Review On Our Guide</h3>

            <div className = 'ratingDetails'>
                <label>Reviews</label>
                <textarea 
                    onChange= "">
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

            
            <button className='reviewBtn'>Submit</button>
        </form>
    </Modal>
  );
}

export default FinishTourModal




