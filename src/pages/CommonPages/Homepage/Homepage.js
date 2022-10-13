import React from 'react'
import Layout from '../../../Components/layouts/Layout'
import TopGuides from '../../../Components/PageComponents/Homepage/TopGuides'
import MailList from '../../../Components/PageComponents/Homepage/MailList'
import HomeContents from '../../../Components/PageComponents/Homepage/HomeContents'
import {useUserAuth} from '../../../Context/Context'

function Homepage() {

  const {user} = useUserAuth()
  console.log(user)

  return (
    <Layout>
        <HomeContents />
        <MailList />

    </Layout>
  )
}

export default Homepage
