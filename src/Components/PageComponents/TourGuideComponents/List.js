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
import {Select, MultiSelect} from '@mantine/core';

function List() {

    // const location = useLocation();
    const [searchDistrict, setSearchDistrict] = useState('')
    const [date, setDate] = useState('')
    const [openDate,setOpenDate] = useState(false)

  return (
    <div className = 'guideBackground'>
        <div className = 'headingImgContainer'>
                 <span>Our Guides</span>
        </div>

        <div className='listContainer'>
            <div className = 'searchGuide'>
                <h3>Search</h3>

                <div>
                    <input 
                        type="text" 
                        className='input' 
                        placeholder='Guide Name'
                        onChange = ''
                    />
                </div>

                <div>
                <Select 
                    style = {{width:"17rem", outline:"none", border:'none'}} 
                    onChange = '' 
                    placeholder='Select Language'

                    data={[
                        { value: 'Sinhala', label: 'Sinhala' },
                        { value: 'English', label: 'English' },
                        { value: 'Hindi', label: 'Hindi' },
                        { value: 'Malayalam', label: 'Malayalam' },
                        { value: 'Urdu', label: 'Urdu' },
                        { value: 'French', label: 'French' },
                        { value: 'Arabic', label: 'Arabic' },
                        { value: 'Spanish', label: 'Spanish' },
                        { value: 'Russian', label: 'Russian' },
                        { value: 'Chinese', label: 'Chinese' },
                        { value: 'Japanese', label: 'Japanese' },
                        { value: 'Italian', label: 'Italian' },
                        { value: 'Korean', label: 'Korean' },
                    ]}
                />
                </div>

                <div>
                <Select 
                    style = {{width:"17rem", outline:"none", border:'none'}} 
                    onChange = '' 
                    placeholder='District'

                    data={[
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
                    ]}
                />      
                </div>

                <div>
                    <button className = 'srchBtn'>Search</button>
                </div>
            </div> 

            <div className='listResult'>
                    <AllGuides />
            </div>
        </div>
    </div>
    // </div>
  )
}

export default List;