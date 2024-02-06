import { useContext } from "react"
import { AuthStore } from "../store/AuthProvider"
import {useNavigate} from 'react-router-dom'
const NonAuth = ({children}) => {
const {user} = useContext(AuthStore)
const nav = useNavigate()
if(user.auth){
nav('/dashboard')
}else{
return children
}
}

export default NonAuth
