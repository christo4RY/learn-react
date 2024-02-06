import Navbar from './components/Navbar'
import Tab from './../../components/Tab'
import {Outlet } from "react-router-dom"
import { useLocation,Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

const App = () => {
const {pathname} = useLocation()
if(pathname === '/'){
  return <Navigate to="/books"/>
}

return (

<div className='container mx-auto'>
    <Navbar />
    <Tab />
    <Carousel/>
    <Outlet />
    <Footer/>
</div>
)
}

export default App
