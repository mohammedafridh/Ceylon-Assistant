import { useState, useEffect } from 'react';
import {db } from '../Firebase';
import {collection, getDocs} from 'firebase/firestore'
import Layout from "../Components/layouts/Layout";
import Card from '../ui/Card';
import classes from './TourGuide.module.css'
import SetBooking from '../PopupPages/SetBooking';
import Back from '../backgrounds/Back';
import {useNavigate} from 'react-router-dom'


function TourGuides(){

    const [guides,setGuides] = useState([])
    const [booking,setBooking] = useState(false)
    const navigate = useNavigate()

    function makeBooking(){
        console.log(guides.data)
        // setBooking(true)
        // navigate('/setBookings')
    }

    function cancelBooking(){
        setBooking(false)
    }
    
    useEffect(()=>{
        getTourGuides()
    }
    ,[])

    useEffect(()=>{
        console.log(guides)
    },[guides])

    function getTourGuides(){
        const allGuideRef = collection(db,'Tour_Guides')
        getDocs(allGuideRef)
        .then(response =>{
            const allGuides = response.docs.map(doc=>({
                data: doc.data(),
                id:doc.id,
            }))
            setGuides(allGuides)
        })
        .catch(err=> console.log(err.message))
    }

    return (<Layout>
        <center><h1>Tour Guides</h1></center>
        
        <ul className = {classes.list}>
            {guides.map(guide=>(
            <li className = {classes.item}>          
            <Card>
                <div class = 'row'>
                <div class = 'col-6'>
                    <div className = {classes.image}>
                        <img src = {guide.data.image} alt = {guide.data.name} />
                    </div>
                </div>
                <div class = 'col-5'>
                    <div className = {classes.content}>
                        <center><h3 className={classes.name}>{guide.data.name}</h3></center>
                        <p><b>Gender : </b>{guide.data.gender}</p>
                        <p><b>Contact Number : </b>{guide.data.contact_Number}</p>
                        <p><b>Age : </b>{guide.data.age}</p>
                        <p><b>Languages : </b>{guide.data.languages}</p>
                        <p><b>Rate : </b>{guide.data.rate}</p>
                        <p><b>Address : </b>{guide.data.address}</p>
                        <p><b>District : </b>{guide.data.district}</p>
                        <p><b>Vehicle Type : </b>{guide.data.vehicle_type}</p>
                        <p><b>Model : </b>{guide.data.model}</p>
                        <p><b>No. of Passengers : </b>{guide.data.No_of_passengers}</p>
                        <p><b>Email : </b>{guide.data.email}</p>
                        <div className = {classes.actions}>
                            <button onClick={getTourGuides}>Book Tour Guide</button>
                        </div>        
                    </div> 
                </div>  
                    {/* {booking && <SetBooking onCancel = {cancelBooking}/>}     
                    {booking && <Back />}  */}
                </div>
            </Card>
            </li>                
            ))}
        </ul>       

    </Layout>  
    )
}

export default TourGuides;