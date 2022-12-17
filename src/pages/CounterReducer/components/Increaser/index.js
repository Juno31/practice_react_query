import React, { useContext } from 'react'
import { CounterReducerContext } from 'pages/CounterReducer'

function Increaser() {
    const {counterDispatch, increase} = useContext(CounterReducerContext)

  return (
    <button onClick={function(){counterDispatch(increase(1))}}>증가</button>
  )
}

export default Increaser