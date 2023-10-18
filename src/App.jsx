import React from 'react'
import Sidebar from './components/Sidebar'
import Cards from './components/cards'
import Header from './components/header'

import Overview from './components/Overview'
import Customers from './components/customers'
import Productsell from './components/productsell'


const App = () => {
  return (
    <>
    <div className='bodyArea  '>
    <div className=' sidebar'><Sidebar/></div>
    <div className='  header'><Header/></div>
    <div className="cardblock" ><Cards/></div>
    <div className=" overview"><Overview/></div>
    <div className=" bg-white customer"><Customers/></div>
    <div className="bg-white product "><Productsell/></div>
    </div>
      </>

  )
}

export default App