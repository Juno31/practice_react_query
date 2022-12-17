const eventStore = {}

const Event = {  // event 관리를 위한 event emitter

    on: (event, lister) => {
        
        if(!eventStore?.[event]){    // eventStore에 해당 이벤트가 없다면

            eventStore[event] = []
        }

        if(eventStore?.[event] && !eventStore?.[event]?.find(storeLister => storeLister === lister)){

            eventStore?.[event].push(lister)

            console.log(eventStore)
        }
    },

    remove: (event) => {

        if(eventStore?.[event]){
            
            delete eventStore[event]
            
            console.log(eventStore)
        }
    },

    removeAll: () => {
        const events = Object.keys(eventStore)
        
        events?.forEach(event => {

            delete eventStore[event]
        })

        console.log(eventStore)
    },

    emit: (event, payload) => {

        if(eventStore?.[event]){   // eventStore에 해당 인자로 전달된 event가 존재한다면

            eventStore?.[event].forEach((lister) => {

                lister(payload)
            })
        }
    }
}

export default Event

export {eventStore}