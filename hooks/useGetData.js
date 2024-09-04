import axios from "axios";

export default async function useGetData(apiUrl) {
    try{
        const data = {
            success: true,
            data: (await axios.get(apiUrl)).data
        }
        return {data }
    }
    catch(e){
        const data = {
            success:false,
            data:e
        }
        return {data }
    }
}
