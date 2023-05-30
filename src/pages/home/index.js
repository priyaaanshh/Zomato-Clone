import React, { useState } from 'react'
import Header from '../../components/common/header';
import TabOptions from '../../components/common/tabOptions';
import Footer from '../../components/common/footer';
import Delivery from '../../components/Delivery';
import DinningOut from '../../components/DinningOut';
import NightLife from '../../components/NightLife';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreens(activeTab)}
      <Footer />
    </div>
  )
}

const getCorrectScreens = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />
    case "Dinning Out":
      return <DinningOut />
    case "Night Life":
      return <NightLife />
    default:
      return <Delivery />
  }
}

export default HomePage
