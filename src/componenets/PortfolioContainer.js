import React from 'react'
import NavBar from './NavBar'
import Intro from './Intro'
import '../assest/css/PortfolioContainer.css'


export default function PortfolioContainer() {
  return (
    <div className='port-container'>
        < Intro />
        <NavBar />
    </div>
  )
}
