import {useState,useEffect} from 'react'
import Layout from "../../../Components/layouts/Layout";
import AddGallery from "../../../Components/PageComponents/ProfileComponents/AddGallery";
import ProfileView from "../../../Components/PageComponents/ProfileComponents/ProfileView";
import {db, auth } from '../../../Firebase'
import {getDoc, doc} from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'

function Profile(){
    const [touristDetails, setTouristDetails] = useState('')
  const [tourGuideDetails,setTourGuideDetails] = useState('')

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

    return <Layout>
        <ProfileView />
        {tourGuideDetails &&
        <AddGallery />}
    </Layout>
}

export default Profile;