import {Routes,Route} from 'react-router-dom'
import App from '../pages/Layout/App'
import '../assets/css/app.css'
import Product from '../pages/Product/Product'
import ProductDetail from '../pages/product/Product-Detail'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import NotFound from '../pages/errors/NotFound'
import Dashboard from '../pages/admin/Dashboard'
import AdminLayout from '../pages/admin/layouts/AdminLayout'
import RouteGuard from './RouteGuard'
import NonAuth from './NonAuth'
const Index = () => {
return (
<Routes>
    <Route path='/' element={<App />}>
    <Route path='/books' element={<Product />}/>
    <Route path='/books/:id' element={<ProductDetail />}/>
    </Route>
    <Route path='/login' element={ <NonAuth>
        <Login />
        </NonAuth>
        }/>
        <Route path='/register' element={ <NonAuth>
            <Register />
        </NonAuth>}/>
        <Route path='/*' element={<NotFound />}/>
        <Route path='/dashboard' element={ <RouteGuard>
            <AdminLayout />
            </RouteGuard>}>
            <Route index element={<Dashboard />}/>
        </Route>
</Routes>
)
}

export default Index
