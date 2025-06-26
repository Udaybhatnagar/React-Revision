import React, {  useState } from 'react'

export const Rollingupstate = () => {
  return (
    <div>
        <LightBulb/>
    </div>
  )
}

function LightBulb(){
    const [bulbon,setbulbon]=useState("bulb on")

return(
    <>
    <BulbState bulbon={bulbon}/>
    <ToggleBulbstate bulbon={bulbon} setbulbon={setbulbon} />
    </>
)
  kldfnkaldnflkfnlkdsa
}


function BulbState({bulbon}){

    return  (
        <div>
            {bulbon ? "bulb on" :"bulb off"}
        </div>
    )
}

function ToggleBulbstate({bulbon, setbulbon}) {

  function toggle() {
    // setBulbOn(currentState => !currentState)
    setbulbon(!bulbon)
    
  }

  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>
}
