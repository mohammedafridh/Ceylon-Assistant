import React from 'react'
import {Row,Col} from 'react-bootstrap'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className = {classes.container}>
      
        <Row>
          <Col className = {classes.copyright}>
            Copyright &copy; Ceylon Assistant
          </Col>
        </Row>
     
    </footer>
  )
}

export default Footer



