import { useRef } from "react"


function App() {

  const ref=useRef();

  function getfocous(){
    ref.current.focus(); //it is like we are getting id by javascript way
  }

  return (
    <div>
      Signup
      <input  ref={ref}type="text" />
      <input type="text" />
      <button onClick={getfocous}>Submit</button>
   

    </div>
  )
}

export default App
