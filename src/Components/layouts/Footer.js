import React from 'react'
// import {Row,Col} from 'react-bootstrap'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className = {classes.footer}>
          <div className = {classes.copyright}>
            
            Copyright &copy; Ceylon Assistant
          </div> 
    </footer>
  )
}

export default Footer



