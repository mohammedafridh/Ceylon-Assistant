import React,{useState,useEffect} from 'react'
import './ToursGalleryContents.css'
import {Gallery} from './Gallery'
import ViewGalleryModal from '../../Modals/ViewGalleryModal'
import {db} from '../../../Firebase'
import {collection, onSnapshot,query,doc,updateDoc, deleteDoc} from 'firebase/firestore'
import {useUser} from '../../../Context/UserContext'
import { toast } from 'react-hot-toast'
import { useUserAuth } from '../../../Context/Context'

const ToursGalleryContents = () => {

    const [modalOpened,setModalOpened] = useState(false)
    const[loading,setLoading] = useState(false);
    const[error,setError] = useState('')
    const[gallery,setGallery] = useState([])
    // const[galleryOpen,setGalleryOpen] = useState('')
    const[currentItem,setCurrentItem] = useState({})
    const {guides, userType} = useUser()
    const [userTour,setUserTour] = useState([]) 
    const{user} = useUserAuth()

    const dltHandler = async(itemId)=>{
      const item = deleteDoc(doc(db, 'toursGallery', itemId));
      toast.success('Tour Deleted from Gallery Successfully!')
    }

    const galleryOpen = async (galleryItem)=>{
        setCurrentItem(galleryItem)
        setModalOpened(true)
    }

    const getGallery = async () => {
        setLoading(true);
        const allData = onSnapshot(collection(db,'toursGallery'),(snapshot)=>{
          console.log({allData});
          let list = []
          snapshot.docs.forEach((doc)=>{
            list.push({
              id:doc.id,
              ...doc.data()
            })
          })
          setGallery(list.filter(item => item.status === 'Active'))
          setLoading(false)
        },(error)=>{
          setError(error.message)
        });
        return ()=>{
          allData()
        };
      }
    
      useEffect(()=>{
        getGallery();
      },[]);

      useEffect(() => {
        setUserTour(userType === 'guide'? gallery.filter(gallery => gallery.guideId === user.uid):gallery)
      }, [userType, guides])

      const findGuideName = (id) => {
        const guide = guides.find(guide => guide.id === id)
        return guide ? guide.firstName : null   
      }

      const findGuideId = (id) => {
        const guide = guides.find(guide => guide.id === id)
        return guide ? guide.guideId : null   
      }
    

  return (
    <div className = 'toursGalleryContents'>
        <div className = 'topContainer'>
            <span>Tours Gallery</span>
        </div>

        <div className = 'galleryComponents'>
            <h1>Memories with our Guides</h1>
            <hr/>
        </div>

        {/* <div className = 'mainCategories'>
            <div className = 'categories'>
                <button className= 'categoryBtn'>All</button>
                <button className= 'categoryBtn'>Southern</button>
                <button className= 'categoryBtn'>Uva</button>
                <button className= 'categoryBtn'>Eastern</button>
                <button className= 'categoryBtn'>Sabaragamuwa</button>
                <button className= 'categoryBtn'>Central</button>
                <button className= 'categoryBtn'>North Central</button>
                <button className= 'categoryBtn'>Western</button>
                <button className= 'categoryBtn'>North Western</button>
                <button className= 'categoryBtn'>Northern</button>
            </div>
        </div>  */}

        <div className='imageGallery'>
            <div className='gallery'>
                {gallery.map((galleryItem)=>(
                    <div className='images' key = {galleryItem.id}>
                      <div onClick = {()=>galleryOpen(galleryItem)} className = 'view'>
                        <img src = {galleryItem.mainImage} alt = '' />
                      </div>  
                        <div className='imageDetails'>
                            <span>{galleryItem.destination}</span>
                            <span>{galleryItem.district} District</span>
                            <span>Guide : {findGuideName(galleryItem.guideId)}</span>
                            <div className='gdId'>
                              <span>Guide ID : </span><span>{galleryItem.guideId}</span>
                            </div>
                            
                            {userType==='guide' &&
                              <button onClick = {()=>dltHandler(galleryItem.id)} className='tourDltBtn'>Delete</button>
                            }
                        </div> 
                        
                    <ViewGalleryModal 
                    modalOpened = {modalOpened} 
                    setModalOpened = {setModalOpened}
                    galleryData = {currentItem}
                    />     
                    </div>
                    
                ))}                
                </div>
            </div>
        </div>

  )
}

export default ToursGalleryContents