//Core
import React from 'react'

function usePhoneInput() {
    const [phoneNum, setPhoneNum] = useState('')

    const handlePhoneNumChange = function(e){

        if(true){   // phone format checker

            setPhoneNum(e.target.value)
        }
    }

    const resetPhoneNum = function(){

        setPhoneNum('')
    }

    return {
        phoneNum,
        onChange,
        reset,
    }
}

export default usePhoneInput