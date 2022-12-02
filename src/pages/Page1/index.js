import { useQuery } from '@tanstack/react-query'
import React from 'react'

//Api
import { api } from 'api'

//Types
import QUERYKEYS from 'features/types/queryKeys'

function Page1() {
    const {data, isLoading, isError, isFetching} = useQuery(
      { 
        queryKey: [QUERYKEYS.data1], 
        queryFn: async function(){
          try{

            debugger;
            const response = await api.data1('dorai').promise('open')

            if(response){

              return response.data.response
            }
          }catch(error){

            console.log(error)
          }
        },
        initialData: {whether_beta: 'fuck'}
        // refetchInterval: 2000  
      }
    )


    console.log(data)
    console.log(isLoading)

  if(isLoading){

    return <div>isLoading</div>
  }

  if(isError){

    return <div>isError</div>
  }

  if(data){

    return (
      <div>{`${data.whether_beta}`} {`${isFetching}`}</div>
    )
  }
}

export default Page1