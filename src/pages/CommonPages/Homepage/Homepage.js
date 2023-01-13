import React from 'react'
import Layout from '../../../Components/layouts/Layout'
import TopGuides from '../../../Components/PageComponents/Homepage/TopGuides'
import MailList from '../../../Components/PageComponents/Homepage/MailList'
import HomeContents from '../../../Components/PageComponents/Homepage/HomeContents'
import {useUserAuth} from '../../../Context/Context'
import ReviewSlideshow from '../../../Components/PageComponents/Homepage/ReviewSlideshow'

function Homepage() {

  const {user} = useUserAuth()
  console.log(user)

  return (
    <Layout>
        <HomeContents />
        <ReviewSlideshow />
        <MailList />

    </Layout>
  )
}

export default Homepage
