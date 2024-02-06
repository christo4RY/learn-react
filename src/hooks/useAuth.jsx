import { useEffect, useState } from "react"
import { auth } from "../services/auth.service"


const useAuth = () => {
const [user,setUser] = useState({
user:null,
error:null,
loading:true,
auth:null
})

useEffect(()=>{
(async()=>{
try {
const {data} = await auth('users')
setUser((pre)=>{
return {
user:data,
error:null,
loading:false,
auth:JSON.parse(localStorage.getItem('auth'))
}
})
} catch (error) {
setUser(pre=>{
return {
user:null,
error:error.message,
loading:true,
auth:JSON.parse(localStorage.getItem('auth'))
}
})
}
})()
},[])

return {user,setUser};

}

export default useAuth
