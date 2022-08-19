import React, { useEffect } from 'react'
import Layout from "../Components/layouts/Layout";
import {db} from '../Firebase'
import Card from '../ui/Card';
import {useNavigate} from 'react-router-dom'
import { collection, onSnapshot } from 'firebase/firestore'
import {useState} from 'react'
import classes from './TourGuide.module.css'
import SetBooking from '../PopupPages/SetBooking'
import Back from '../backgrounds/Back'

function TourGuides() {

    const [guides,setGuides] = useState([]);
    const [selectedGuide, setSelectedGuide] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')
    const navigate = useNavigate();
    const [openBooking,setOpenBooking] = useState(false)

    function makeBooking(guide){
        setSelectedGuide(guide)
        console.log(guide)
        setOpenBooking(true)
    }

    function cancelBooking(){
        setOpenBooking(false)
    }

    useEffect(()=>{
        setLoading(true);
        const unsub = onSnapshot(collection(db,"Tour_Guides"),(snapshot)=>{
            let list = [];
            snapshot.docs.forEach((doc)=>{
                list.push({
                    id:doc.id,
                    ...doc.data()
                })
            });
            setGuides(list);
            setLoading(false)
        },
        (error)=>{
            setError(error.message);
        }
        );
        return ()=>{
            unsub()
        };
    },[]);

  return (<Layout>
    <center><h1>Tour Guides</h1></center>
        <ul className = {classes.list}>
        {guides && guides.map((guide)=>(
        <Card key = {guide.id}>
        <li>
            <div class = 'row'>
            <div class = 'col-6'>
                <div className = {classes.image}>
                    <img src = {guide.image} alt = {guide.name} />
                </div>
            </div>

            <div class = 'col-5'>
                <div className = {classes.content}>
                    <center><h3 className={classes.name}>{guide.name}</h3></center>
                    <p><b>Gender : </b>{guide.gender}</p>
                    <p><b>Contact Number : </b>{guide.contact_Number}</p>
                    <p><b>Age : </b>{guide.age}</p>
                    <p><b>Languages : </b>{guide.languages}</p>
                    <p><b>Rate : </b>{guide.rate}</p>
                    <p><b>Address : </b>{guide.address}</p>
                    <p><b>District : </b>{guide.district}</p>
                    <p><b>Vehicle Type : </b>{guide.vehicle_type}</p>
                    <p><b>Model : </b>{guide.model}</p>
                    <p><b>No. of Passengers : </b>{guide.No_of_passengers}</p>
                    <p><b>Email : </b>{guide.email}</p>

                    <div className = {classes.actions}>
                        <button onClick = {() => makeBooking(guide)}>Book Tour Guide</button>          
                        {/* {openBooking && <Back/>} */}
                    </div>   
                </div> 
            </div> 
            </div> 
        </li>
        </Card>
        ))}
        </ul>  
        {openBooking && <SetBooking showSetBooking={openBooking} guideName={selectedGuide.name}  onCancel = {cancelBooking} />}      
    </Layout>
  )
}

export default TourGuides;
