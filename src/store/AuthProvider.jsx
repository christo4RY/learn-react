import { createContext } from "react"
import useAuth from "../hooks/useAuth"


export const AuthStore = createContext({
user:null,
setUser:null
})
const AuthProvider = ({children}) => {
const {setUser,user} = useAuth()

return (
<AuthStore.Provider value={{ user, setUser }}>
    {children}
</AuthStore.Provider>
)
}

export default AuthProvider
