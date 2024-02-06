import { useContext } from "react"
import { AuthStore } from "../store/AuthProvider"
import  {useNavigate} from 'react-router-dom'
const RouteGuard = ({children}) => {
    const {user} = useContext(AuthStore)
    const nav = useNavigate()
    if(user.auth){
        return children
    }else{
        nav('/login')
    }
}

export default RouteGuard
