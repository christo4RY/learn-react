import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Index from './router'
import ApiProvider from './store/ApiProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
<>
    <ApiProvider>
        <BrowserRouter>
            <Index />
        </BrowserRouter>
    </ApiProvider>
</>,
)
