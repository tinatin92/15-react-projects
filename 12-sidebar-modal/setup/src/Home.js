import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context.js'

const Home = () => {
  const {openSidebar, openModal} = useGlobalContext(); 

  return <>
  <main>
    <button onClick={openSidebar} className='sidebar-toggle'><FaBars/></button>
    <buttom onClick={openModal} className="btn">Show Modal</buttom>

  </main>
  
  </>
}

export default Home
