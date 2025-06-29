import React, { useRef, useState } from 'react'

export const Case2ref = () => {
    const [count,setcount]=useState(0);
    const timmer=useRef();


    function startclock(){
      const value =  setInterval(function(){
            setcount(c=>c+1)

        },1000)
        timmer.current=value;

    }

    function stopclock(){

        clearInterval(timmer.current)
    }

  return (
    <div>
        {count}
        <br />
        <button onClick={startclock}>Start</button>
        <button onClick={stopclock}>Stop</button>

        
    </div>
  )
}
