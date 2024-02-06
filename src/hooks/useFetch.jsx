import { useEffect, useState } from "react"

const useFetch = (fun,arg) => {
    const [data,setData] = useState({
        loading:true,
        data:null,
        error:null
    })
  useEffect(()=>{
    (async()=>{
        try {
            const data = await fun(arg);
            setData((pre)=>{
                return {
                    data:data.data,
                    loading:false,
                    error:null
                }
            })
        } catch (error) {
            setData((pre)=>{
                return {
                    data:null,
                    loading:true,
                    error:error.message
                }
            })
        }
    })()
  },[])
  return data;
}

export default useFetch
