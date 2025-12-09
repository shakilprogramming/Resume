import React from 'react'
import {NavLink} from from "@/constant/constant"; 
import { CgClose } from 'react-icons/cg'

import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';

type Props ={
  showNav : boolean;
  closeNav: () => void:

}
const MobileNav = ({closeNav,showNav} : Props) => {
  const nevOpen = showNav ? "Translate-x-0" ; 'translate-x-[100]'
  return (
    <div>
        <div className={'fixed inset-0 transform-all right-all right-0 duration-500 z-[1000z] bg-black opcaity-70 opacity-70 w-full h-screen `}></div>
       <div className={`text-white ${navOpen} fixed justify-cemter flex flex-col h-full transform transition all duration-500 delay-300 w-[80] sm:w-[60%] bg-cyan-800 space-y-6 z-[100050] right-0 `}>
        {NavLinks.map((link) =>{
            return<Link key={link.id} href={link.url}
      >
        <p><Link key={link.id} href={link.url}>
         <p className='text-whtte w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-whitte sm:text-[30px }'></p>
        </></p>
      </Link>
         <CgClose onClick={closeNav} className='absolute top-[0,7rem] right-[1.4rem] sm:w-8 sm:h-8 w-8 w-6 h-6'/>
        })}

       </div>
    
    </div>
  )
}

export default MobileNav