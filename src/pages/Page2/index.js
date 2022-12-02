import { useMutation, useQuery } from '@tanstack/react-query'
import React from 'react'

//Api
import { api } from 'api'

//Types
import QUERYKEYS from 'features/types/queryKeys'

function Page2() {
    const {data, isLoading, isError} = useQuery(
      { 
        queryKey: [QUERYKEYS.data1], 
        queryFn: async function(){
          try{

            const response = await api.data1('dorai').promise('open')

            if(response){

              return response.data.response
            }
          }catch(error){

            console.log(error)
          }
        },
        retry: 3,
        refetchOnWindowFocus: false,
        // refetchInterval: 1000
        refetchOnMount: false
      }
    )

    const mutation = useMutation({
      mutationFn: async function(){
        try {

          const response = await api.data1('1').promise('open')

          if (response) {

            return response.data.response
          }
        } catch (error) {

          console.log(error)
        }
      },
      onSuccess: function(){

        console.log(1)
      }
    })

  if(isLoading){

    return <div>isLoading</div>
  }

  if(isError){

    return <div>isError</div>
  }

  if(data){

    return (
      <div>{`${data.whether_beta}`}</div>
    )
  }
}

export default Page2