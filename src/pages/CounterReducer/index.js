//Core
import React, { createContext } from 'react'

//Hooks
import useCounter, { USECOUNTERTYPES, increase, decrease } from 'hooks/useCounter'
import Increaser from './components/Increaser'
import Decreaser from './components/Decreaser'

export const CounterReducerContext = createContext()

function CounterReducer() {
  const {state: counter, dispatch: counterDispatch} = useCounter(1)
  
  const contextValue = {  // 단순 값의 전달
    counter,
    counterDispatch,
    increase,
    decrease
  }

  return (
    <CounterReducerContext.Provider value={contextValue}>
      <p>{counter}</p>
      <Increaser />
      <Decreaser />
    </CounterReducerContext.Provider>
  )
}

export default CounterReducer