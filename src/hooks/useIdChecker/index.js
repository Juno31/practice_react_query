import React, { useEffect, useState } from 'react'

//Api
import { CAMPAIGNAPI } from 'api'

function useIdChecker(id) {
    const [isIdUsed, setIsIdUsed] = useState(false)
    const [isCheckerLoading, setIsCheckerLoading] = useState(false)

    const checkIdUsed = async function(){
        try{
            const checkIdUsedPromise = CAMPAIGNAPI.checkId()
            const checkIdUsedInCmapaignPromise = CAMPAIGNAPI.checkId()
            const checkIdUsed = await checkIdUsedPromise    // true || false
            const checkIdUsedInCampaign = await checkIdUsedInCmapaignPromise    // true || false

            return (checkIdUsed && checkIdUsedInCampaign)

        }catch(error){

        }

        finally{
            setIsCheckerLoading(false)
        }
    }

    useEffect(function(){

    }, [])

    return {
        isIdUsed,
        isCheckerLoading,

    }
}

export default useIdChecker