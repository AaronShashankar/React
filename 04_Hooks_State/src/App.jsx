import { useState } from "react"

const App = () => {

  const [count, setCount] = useState(1)

  let handleChange = ()=>{
    setCount(count +2)
  }

  return (
    <div className="box">
      <p>{count}</p>
      <button onClick={handleChange}>Update Count</button>
    </div>
  )
}

export default App