import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {
    const [isVisible, setIsvisible] = useState(false);

    useEffect(()=>{
        const toggleVisibility=() =>{
            if(window.scroll >300) setIsvisible(true);
            else setIsvisible(false);
        };
        window.addEventListener("scroll",toggleVisibility);

        return() => window.removeEventListener("scroll",toggleVisibility);

    },[])
    const ScrollToTop =() =>({
        top:0;
        behavior:"smooth",
    })
      return (
    <div className='fixed botom-4 animate-pulse right-4'>
        {isVisible && (
            
        )}
    </div>

  )
}

export default ScrollToTop