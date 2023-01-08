import {useState } from 'react'
import Layout from '../../layouts/Layout'
import './List.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
// import { useLocation } from 'react-router-dom'
import AllGuides from './AllGuides'
import Select from 'react-select'
// import {Select, MultiSelect} from '@mantine/core';

function List() {

    // const location = useLocation();
    const [searchGuide, setSearchGuide] = useState('')
    const [date, setDate] = useState('')
    const [openDate,setOpenDate] = useState(false)

    const districtData=[
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

    const[searchDistrict,setSearchDistrict] = useState(districtData.label)
      const districtHandler = (e)=>{
        setSearchDistrict(e.label)
      }

  return (
    <div className = 'guideBackground'>
        <div className = 'headingImgContainer'>
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
            <div className = 'searchGuide'>
                <h3>Search</h3>

                <div>
                    <input 
                        type="text" 
                        className='input' 
                        placeholder='Guide Name'
                        onChange = {(e)=>setSearchGuide(e.target.value)} 
                    />
                </div>

                <div>
                <Select 
                    style = {{width:"17rem", outline:"none", border:'none'}} 
                    options = {districtData} 
                    placeholder = 'Select District' 
                    onChange={districtHandler}
                    className = 'typeDrop'
                    required
                />
                </div>

                <div>
                    <button onClick='' className = 'srchBtn'>Search</button>
                </div>
            </div> 

            <div className='listResult'>
                    <AllGuides guide = {searchGuide} district = {searchDistrict}/>
            </div>
        </div>
    </div>
    // </div>
  )
}

export default List;