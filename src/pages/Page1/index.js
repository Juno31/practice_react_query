import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import React from 'react'

//Api
import { api } from 'api'

//Types
import QUERYKEYS from 'features/types/queryKeys'
import { useNavigate } from 'react-router-dom'

function Page1() {
  const navigate = useNavigate()
    const [creatorName, setCreatorName] = useState('dorai')
    const {data, isLoading, isError, isFetching} = useQuery(
      { 
        queryKey: [QUERYKEYS.data1, creatorName ?? ''], 
        queryFn: async function(){
          try{

            const response = await api.data1(creatorName).promise('open')

            if(response){

              return response.data.response
            }
          }catch(error){

            console.log(error)

            throw 'this is an error'
          }
        },
        refetchOnMount: false,
        // cacheTime: 1000000
      }
    )

    const handleInputOnChange = function(e){

      setCreatorName(e.target.value)
    }

    return (
      <>
        <div>Page1{`${data?.whether_beta}`} {`${isFetching}`}</div>
        <button onClick={function(e){e.preventDefault(); navigate('/page2')}}></button>
        <input 
          onChange={handleInputOnChange}
        />      
      </>
    )
}

export default Page1