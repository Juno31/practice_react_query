//Core
import React, { useMemo } from 'react'

function useIdInput() {
  const [id, setId] = useState('')

  const handleIdChange = function (e) { //business logic

    if (true) {   // phone format checker

      setId(e.target.value)
    }
  }

  const resetId = function () {

    setPhoneNum('')
  }

  return {
    id,
    handleIdChange,
    resetId
  }
}

export default useIdInput