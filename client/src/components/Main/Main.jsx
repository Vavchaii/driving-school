import React from 'react'
import Header from '../Header/Header'
import Welcome from './Welcome/Welcome'
import Numbers from './Numbers/Numbers'
import Teachers from './Teachers/Teachers'
import Format from './Format/Format'
import Courses from './Courses/Courses'
import Banner from './Banner/Banner'
import Footer from './Footer/Footer'
import { observer } from 'mobx-react-lite'

const Main = () => {

  
  return (
    <div>
        <Header />
      <main className="main">
        <Welcome />
        <Numbers />
        <Teachers />
        <Format />
        <Courses />
        <Banner />
      </main>
      <Footer />
    </div>
  )
}

export default observer(Main)