import React from 'react'
import HomeHeader from '../Components/PageComponents/Homepage/HomeHeader'
import Layout from '../Components/layouts/Layout'
import TopGuides from '../Components/PageComponents/Homepage/TopGuides'

function Homepage() {
  return (
    <Layout>
        <HomeHeader />
        <TopGuides />
    </Layout>
    
  )
}

export default Homepage
