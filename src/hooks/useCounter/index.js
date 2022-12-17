import React, { useReducer } from 'react'

export const USECOUNTERTYPES = {
    INCREASE: 'INCREASE',
    DECREASE: 'DECREASE',
    MULTIPLY: 'MULTIPLY',
}


// dispatcher
export const increase = function(payload){

    return {
        type: USECOUNTERTYPES.INCREASE,
        paylaod: payload
    }
}

export const decrease = function(payload){

    return {
        type: USECOUNTERTYPES.DECREASE,
        paylaod: payload
    }
}

const reducer = function(state, action){    // 상태 관리 로직 관리
    switch(action.type){
        
        case USECOUNTERTYPES.INCREASE :

            const increasedState = state + action?.payload

            return increasedState
        
        case USECOUNTERTYPES.DECREASE :

            const decreasedState = state - action?.payload

            return decreasedState
    }
}

function useCounter(initialState) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return {state, dispatch}
}

export default useCounter