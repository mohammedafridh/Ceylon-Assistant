import React,{useState,useEffect} from 'react'
import './ToursGalleryContents.css'
import {Gallery} from './Gallery'
import ViewGalleryModal from '../../Modals/ViewGalleryModal'
import {db} from '../../../Firebase'
import {collection, onSnapshot,query,doc,updateDoc} from 'firebase/firestore'

const ToursGalleryContents = () => {

    const [modalOpened,setModalOpened] = useState(false)
    const[loading,setLoading] = useState(false);
    const[error,setError] = useState('')
    const[gallery,setGallery] = useState([])
    // const[galleryOpen,setGalleryOpen] = useState('')
    const[currentItem,setCurrentItem] = useState({})

    const dltHandler = async(itemId)=>{
      console.log('hello')
      const cancelGallery = query(doc(db,'toursGallery',itemId));
       await updateDoc(cancelGallery, {
        status: 'inactive'
       });
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
                            <span>{galleryItem.district} Province</span>
                            <span>Guide : {galleryItem.guideId}</span>
                            <button onClick = {()=>dltHandler(galleryItem.id)} className='tourDltBtn'>Delete</button>
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