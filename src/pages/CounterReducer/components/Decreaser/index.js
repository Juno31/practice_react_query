import React, { useContext } from 'react'
import { CounterReducerContext } from 'pages/CounterReducer'

function Decreaser() {
    const {handleDecreaseOnclick} = useContext(CounterReducerContext)

  return (
    <button onClick={handleDecreaseOnclick}>감소</button>
  )
}

export default Decreaser