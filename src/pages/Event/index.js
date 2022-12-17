//Hook
import Event, { eventStore } from 'hooks/useCustomEvent'
import { createContext, useState, useLayoutEffect } from 'react'

//Components
import SomeSmallComponent from './SmallComponent'

export const PageContext = createContext()

function SomeRandomComponent({onClick, onMouseHover}) {
    const [counter, setCounter] = useState(0)
    
    useLayoutEffect(function(){
        
        Event.on('onClick', function(payload){
    
            if(onClick){
    
                onClick()
    
                return
            }
    
    
            console.log('onClick', payload)
        })

        Event.on('counterOnClick', function(current){

            setCounter(current + 1)
        })
    
        Event.on('onMouseOver', function(){
    
            console.log('onMouseHover')
        })

    }, [])

    console.log('rerender')
    
  return (
      <PageContext.Provider value={{Event}}>
        <div>
            {counter}
        </div>
        <button onClick={() => {console.log('haha'); Event.emit('counterOnClick', counter)}}>
            counter + 1
        </button>
          <div
              onClick={() => Event.emit('onClick')}
              onMouseOver={() => Event.emit('onMouseOver')}
          >
              SomeRandomComponent
          </div>
        <SomeSmallComponent />
      </PageContext.Provider>
  )
}

export default SomeRandomComponent