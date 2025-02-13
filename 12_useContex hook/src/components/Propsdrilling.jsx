import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../Context/contex'

const Propsdrilling = () => {
    const counter = useContext(counterContext)
  return (
    <div>
        {counter}
    </div>
  )
}

export default Propsdrilling