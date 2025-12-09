"use client";
import React, { useState } from 'react'
import Nav from "./Nav"
import MobileNav from './MobileNav'

const ResponsiveNav = () => {

    const [showNav,setNavBg] = useState(false);
    const openNavHandler =()=>setShowNav(true);  
    const closeNavHandler =() => serShowNav(false);

  return (
    <div>ResponsiveNav</div>
   <Nav/>  
   <MobileNav showNav={showNav} closeNav={classNavHandler}/>
)
}

export default ResponsiveNav