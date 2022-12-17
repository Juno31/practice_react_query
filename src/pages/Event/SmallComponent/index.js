import React, {useContext} from 'react'
import { PageContext } from '..'

function SomeSmallComponent() {
    const { Event } = useContext(PageContext)

    const handleOnclick = function(){

        Event.emit('onClick', 'helllloooo')
    }

    return (
    <button onClick={handleOnclick}>smallcompoennt</button>
  )
}

export default SomeSmallComponent