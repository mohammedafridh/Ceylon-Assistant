import { useState, useEffect, useRef } from 'react'
import { db, auth } from '../../../Firebase'
import BookingModal from '../../Modals/BookingModal'
import { getDoc, doc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import './List.css'
import classes from './AllGuides.module.css'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Select from 'react-select'
import { collection, onSnapshot } from 'firebase/firestore'
import { useUser } from '../../../Context/UserContext'


function AllGuides() {
  // const location = useLocation();
  const [activeGuides, setActiveGuides] = useState([])
  const [selectedDistrict, setSelectedDistrict] = useState('')
  const [touristDetails, setTouristDetails] = useState('')
  const [tourGuideDetails, setTourGuideDetails] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [modalOpened, setModalOpened] = useState(false)
  const [selectedGuide, setSelectedGuide] = useState({})
  const { guides } = useUser()
  const { userType } = useUser()
  const [color,setColor] = useState(false)

  const setModal = (guide) => {
    setSelectedGuide(guide)
    setModalOpened(true)
  }

  useEffect(() => {
    setActiveGuides(guides.filter(guide => guide.status === 'Active'))
    console.log({activeGuides})
  }, [userType, guides])


  const districtData = [
    { value: 'Hambanthota', label: 'Hambanthota' },
    { value: 'Matara', label: 'Matara' },
    { value: 'Galle', label: 'Galle' },
    { value: 'Badulla', label: 'Badulla' },
    { value: 'Monaragala', label: 'Monaragala' },
    { value: 'Trincomalee', label: 'Trincomalee' },
    { value: 'Batticaloa', label: 'Batticaloa' },
    { value: 'Ampara', label: 'Ampara' },
    { value: 'Kegalle', label: 'Kegalle' },
    { value: 'Rathnapura', label: 'Rathnapura' },
    { value: 'Matale', label: 'Matale' },
    { value: 'Kandy', label: 'Kandy' },
    { value: 'Nuwara-Eliya', label: 'Nuwara Eliya' },
    { value: 'Anuradhapura', label: 'Anuradhapura' },
    { value: 'Polonnaruwa', label: 'Polonnaruwa' },
    { value: 'Gampaha', label: 'Gampaha' },
    { value: 'Colombo', label: 'Colombo' },
    { value: 'Kalutara', label: 'Kalutara' },
    { value: 'Puttalam', label: 'Puttalam' },
    { value: 'Kurunegala', label: 'Kurunegala' },
    { value: 'Jaffna', label: 'Jaffna' },
    { value: 'Kilinochchi', label: 'Kilinochchi' },
    { value: 'Mannar', label: 'Mannar' },
    { value: 'Mullativu', label: 'Mullativu' },
    { value: 'Vavuniya', label: 'Vavuniya' },
  ]

  const districtHandler = (e) => {
    setSelectedDistrict(e.label)
    setActiveGuides(guides.filter(guide => guide.status === 'Active' && guide.district === e.label))
  }

  const clearFilter = () => {
    setActiveGuides(guides.filter(guide => guide.status === 'Active'))
  }

  const handleSearch = (e) => {
    setActiveGuides(guides.filter(guide => guide.status === 'Active' && guide.firstName.toLowerCase().includes(e.toLowerCase())))
  }

  const sumOfRating = (ratings) => {
    // no ratings return
    if (!ratings || ratings.length === 0) return 'No Ratings Yet';

    let sum = 0
    ratings.forEach(item => {
      sum += item.rating
    })
    const value = sum/ratings.length
    return value.toFixed(1);
  }
  return (
    <div className='guideBackground'>
      <div className='headingImgContainer'>
        <span>Our Guides</span>
      </div>

      <div className='guideCaption'>
        <p>Tour guides provide many services, and their responsibilities
          depend on the type of tour guide they are. While group size,
          transportation method, age and trip length may differ, tour guides
          are typically responsible for entertaining guests, answering
          questions and sharing relevant information to the groups or
          individuals they are guiding. We have two groups of Tour
          Guides such as <b>National</b> & <b>Site</b> & all of our Tour Guides
          are available with a vehicle</p>

        <div className='rates'>
          <span>All tours are rated as follows:</span>

          <span>Guide Rate (per day) + (Number of KMs Travelled * Vehicle KM Rate)</span>
        </div>
      </div>

      <div>
        <p></p>
      </div>

      <div className='listContainer'>
        <div className='searchGuide'>
          <h3>Filter</h3>

          <div>
            <input
              type="text"
              className='input'
              placeholder='Guide Name'
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>

          <div>
            <Select
              style={{ width: "17rem", outline: "none", border: 'none' }}
              options={districtData}
              placeholder='Select District'
              onChange={districtHandler}
              className='typeDrop'
              required
            />
          </div>

          <div>
            <button onClick={() => clearFilter()} className='srchBtn'>Clear Filter</button>
          </div>
        </div>

        <div className='listResult'>
          <div>
            {activeGuides.map((guide) => (
              <div className={classes.searchItem} key={guide.id}>

                <img src={guide.image} alt='abc' className={classes.guideImg} />

                <div className={classes.guideDetails}>
                  <div className={classes.topDetails}>
                    <span>{guide.firstName} {guide.lastName}</span>
                    <span>{guide.email}</span>
                  </div>

                  <div className={classes.details}>
                    <span>Contact : </span>
                    <span>{guide.contactNumber}</span>
                  </div>

                  <div className={classes.details}>
                    <span>NIC No: </span>
                    <span>{guide.nicNumber}</span>
                  </div>

                  <div className={classes.details}>
                    <span>District: </span>
                    <span>{guide.district}</span>
                  </div>

                  <div className={classes.details}>
                    <span>Guide Type : </span>
                    <span>{guide.guideType}</span>
                  </div>

                  <div className={classes.details}>
                    <span>Languages : </span>
                    <span>{guide.languages}</span>
                  </div>

                  <div className={classes.details}>
                    <span>Guide Rate : </span>
                    <span>{guide.guideRate}/= per day</span>
                  </div>

                  <div className={classes.details}>
                    <span>Vehicle : </span>
                    <span>{guide.model}</span>
                  </div>

                  <div className={classes.details}>
                    <span>Max Passengers : </span>
                    <span>{guide.maxPassengers}</span>
                  </div>

                  <div className={classes.details}>
                    <span>Vehicle KM Rate : </span>
                    <span>Rs. {guide.perKmRate}/=</span>
                  </div>

                </div>

                <div className={classes.otherDetails}>
                  <div className={classes.ratingBar}>
                    <span>Rating</span>
                    <span>
                      <div className={classes.ratingNum}>{sumOfRating(guide.ratings)}</div>
                    </span>
                  </div>
                  <div className= {color? classes.availability: classes.unavailability}>
                    <span>{guide.availability}</span>
                  </div>

                  {userType === 'tourist' &&
                    <div className={classes.subDetails}>
                      <button className={classes.bookingBtn}
                        onClick={() => setModal(guide)}>
                        Book Guide
                      </button>
                    </div>
                  }


                </div>
              </div>
            ))}

            <BookingModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              guide={selectedGuide}
            />

          </div>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default AllGuides;