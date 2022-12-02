import Axios from "axios";

const axios = Axios.create({
    baseURL: '/api',
    responseType: "json",
    withCredentials: false,
    timeout: 10000,
});

export const api = {
    data1(creatorId){

        return {
            async promise(part){
                try{
                    const options = {
                        url: `/creators/${creatorId}?part=${part}`
                    }
                    const response = await axios(options)

                    return response

                }catch(error){

                    throw error
                }
            }
        }
    }
}

