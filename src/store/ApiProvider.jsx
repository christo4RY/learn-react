import AuthProvider from "./AuthProvider"
import { BookProvider } from "./BookProvider"

const ApiProvider = ({children}) => {
return (
<BookProvider>
    <AuthProvider>
        {children}
    </AuthProvider>
</BookProvider>
)
}

export default ApiProvider
