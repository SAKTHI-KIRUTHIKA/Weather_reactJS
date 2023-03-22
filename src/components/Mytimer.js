import React, { useEffect, useState } from 'react'
import '../styles/Timer.css'

function Mytimer() {
    const [timer, setTimer] = useState(new Date());
    const refreshClock = () => {
        setTimer(new Date())
    }
    useEffect(()=>{
        const Mytimer = setInterval(refreshClock,1000)
    },[])

  return (
    <div className='wrapper'>
        <div className='timer'>
      {timer.toLocaleTimeString()}
    </div>
    </div>
    
  )
}

export default Mytimer
