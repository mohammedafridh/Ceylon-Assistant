import React from 'react'
import HomeHeader from '../../../Components/PageComponents/Homepage/HomeHeader'
import Layout from '../../../Components/layouts/Layout'
import TopGuides from '../../../Components/PageComponents/Homepage/TopGuides'
import MailList from '../../../Components/PageComponents/Homepage/MailList'

function Homepage() {
  return (
    <Layout>
        <HomeHeader />
        <TopGuides />
        <MailList />
    </Layout>
  )
}

export default Homepage
