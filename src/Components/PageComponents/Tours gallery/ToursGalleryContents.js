import React,{useState,useEffect} from 'react'
import './ToursGalleryContents.css'
import {Gallery} from './Gallery'
import ViewGalleryModal from '../../Modals/ViewGalleryModal'
import {db} from '../../../Firebase'
import {collection, onSnapshot} from 'firebase/firestore'

const ToursGalleryContents = () => {

    const [modalOpened,setModalOpened] = useState(false)
    const[loading,setLoading] = useState(false);
    const[error,setError] = useState('')
    const[gallery,setGallery] = useState([])

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
          setGallery(list.filter(item => item.status === 'active'))
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

        <div className = 'mainCategories'>
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
        </div>

        <div className='imageGallery'>
            <div className='gallery'>
                {gallery.map((galleryItem, id)=>(
                    <div className='images' key = {id} onClick = {()=>setModalOpened(true)}>
                        <img src = {galleryItem.mainImage} alt = '' />
                        <div className='imageDetails'>
                            <span>{galleryItem.destination}</span>
                            <span>{galleryItem.district} Province</span>
                            <span>Guide : {galleryItem.guideId}</span>
                        </div> 
                    <ViewGalleryModal 
                    modalOpened = {modalOpened} 
                    setModalOpened = {setModalOpened}
                    galleryData = {galleryItem}
                    />     
                    </div>
                    
                ))}                
                </div>
            </div>
        </div>

  )
}

export default ToursGalleryContents