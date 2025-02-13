import React, { useState } from 'react'
import { counterContext } from './Context/contex'
import Navbar from './components/Navbar'

const App = () => {
  const [count, setCount] = useState(0)

  const handlechange = ()=>{
    setCount(count +1);
  }
  return (
    <>
    <counterContext.Provider value={count}>
      <h1>useContext Hooks</h1> <br /> <br />
      <Navbar/>
      <div>
        <button onClick={handlechange}>update count</button>
      </div>
      <br />
      <br /><br />
      <h3>Note:</h3>
      <h4>
        here using useContext hook we manage to pass props directly to propsdriiling component which was inside button component where button component was inside a navbar component. 
        the point is that; if we want to pass props globally to another component which is inside antther then we use useContex hooks. 
      </h4>
      </counterContext.Provider>
    
    </>
  )
}

export default App;