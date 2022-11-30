import React, {useState,useEffect} from 'react'
import classes from './HomeDiscover.module.css'
import {Gallery} from '../Tours gallery/Gallery'
import {db} from '../../../Firebase'
import {collection, onSnapshot} from 'firebase/firestore'

const HomeDiscover = () => {

  const[discovery,setDiscovery] = useState([])
  const[loading,setLoading] = useState('')
  const[error,setError] = useState('')

    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
          setIsReadMore(!isReadMore);
        };

        return (
          <p className={classes.text}>
            {isReadMore ? text.slice(0, 150) : text}
            <span onClick={toggleReadMore} className={classes.readHide}>
              {isReadMore ? "...read more" : " show less"}
            </span>
          </p>
        );
      };

      const getDiscoveries = async () => {
        setLoading(true);
        const allData = onSnapshot(collection(db,'Discover_Srilanka'),(snapshot)=>{
          console.log({allData});
          let list = []
          snapshot.docs.forEach((doc)=>{
            list.push({
              id:doc.id,
              ...doc.data()
            })
          })
          setDiscovery(list.filter(item => item.status === 'active'))
          setLoading(false)
        },(error)=>{
          setError(error.message)
        });
        return ()=>{
          allData()
        };
      }

      useEffect(()=>{
       getDiscoveries();
      },[]);

  return (
    <div className = {classes.homeDiscover}>
        <div className={classes.title}>
            <h2>Discover Sri Lanka</h2>
            <hr/>
        </div>

        <div className={classes.imageGallery}>
            <div className={classes.gallery}>
                {discovery.map((discover)=>(
                    <div className={classes.images} key = {discover.id}>
                        <img src = {discover.image} alt = '' />
                        <div className={classes.imageDetails}>
                          <div className={classes.imageHeader}>
                            <h4>{discover.destination}</h4>
                            <h6>{discover.nickname}</h6>
                          </div>
                            
                            <ReadMore className = {classes.readMore}>
                                {discover.description}
                            </ReadMore>
                        </div>    
                    </div>
                    
                ))}                
                </div>
            </div>
        </div>
  )
}

export default HomeDiscover