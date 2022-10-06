import React from 'react'
import List from '../../../Components/PageComponents/TourGuideComponents/List';
import Layout from '../../../Components/layouts/Layout';
import SubNavigation from '../../../Components/layouts/SubNavigation';

function NewTourGuide() {
  return (
    <Layout>
      <SubNavigation />
      <List />
    </Layout>
  )
}

export default NewTourGuide;
