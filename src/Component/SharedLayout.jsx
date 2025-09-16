import React from 'react'
import AppleHeader from './Header/AppleHeader'
import Footer from './Footer/Footer'
import { Outlet } from "react-router-dom";
import All from './Main/all';

const SharedLayout = () => {
  return (
    <>

    <AppleHeader/>
    

    <Outlet/>
    {/* <Footer/> */}
    
    </>
  )
}

export default SharedLayout