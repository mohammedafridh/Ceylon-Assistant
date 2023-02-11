import React from 'react'
// import {Row,Col} from 'react-bootstrap'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className = 'footer'>
      <div className = 'copyright'>

      <div className='footerContent'>

        <div className='topicContainer'>
          <div className='topic'>
            <span className='top'>Ceylon</span>
            <span className='sub'>Assistant</span>
          </div>

          <div className='hotline'>
              <span>Tourism Hotline</span>
              <span>1912</span>
          </div>

          <div className='hotline'>
              <span>Ambulance Service</span>
              <span>1990</span>
          </div>

          <div className='hotline'>
              <span>Police Hotline</span>
              <span>119</span>
          </div>

        </div>

        <div>
          <h3 className='contentTopic'>Tourism Related Sites</h3>
          <div className='sites'>    
            <span><a href = 'https://www.sltda.gov.lk/en' target = '_blank'>Sri Lanka Tourism Development Authority</a></span>
            <span><a href = 'https://meetinsrilanka.com/' target = '_blank'>Sri Lanka Tourism Convention Bureau</a></span>
            <span><a href = 'https://www.slithm.edu.lk/' target = '_blank'>Sri Lanka Institute of Tourism & Hotel Management</a></span>
            <span><a href = 'https://www.tourismmin.gov.lk/' target = '_blank'>Sri Lanka Tourism Ministry</a></span>
            <span><a href = 'https://www.srilankan.com/en_uk/lk' target = '_blank'>Sri Lankan Airlines</a></span>
            <span><a href = 'https://www.airport.lk/main' target = '_blank'>Sri Lanka Airport & Aviation Services</a></span>
            <span><a href = 'https://www.immigration.gov.lk/' target = '_blank'>Immigration & Emigration Department</a></span>
            <span><a href = 'https://www.slaito.com/' target = '_blank'>Sri Lanka Association of Inbound Tour Operators</a></span>
            <span><a href = 'https://www.thasl.lk/' target = '_blank'>Sri Lanka Tourist Hotel Association</a></span>
            <span><a href = 'https://eta.gov.lk/slvisa/' target = '_blank'>Electronic Travel Authorisation System</a></span> 
          </div>
        </div>

        <div>
          <h3 className='contentTopic'>Contact Info</h3>

          <div className='contactTiles'>
            <span>Address</span>
            <span>No. 106, Beliaththa Road, Yonakapura, Dickwella.</span>
          </div>

          <div className='contactTiles'>
            <span>Email</span>
            <span>ceylonassistant@gmail.com</span>
          </div>

          <div className='contactTiles'>
            <span>Contact Number</span>
            <span>041-2255623</span>
          </div>

        </div>
      </div>

      <hr></hr>
        Copyright &copy; Ceylon Assistant 2022
      </div> 
    </footer>
  )
}

export default Footer



