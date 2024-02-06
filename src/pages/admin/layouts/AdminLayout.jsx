import {Outlet} from "react-router-dom"
import Navbar from "../../../components/admin/Navbar"
const AdminLayout = () => {
return (
<div className=" container mx-auto">
    <Navbar/>
    <Outlet />
</div>
)
}

export default AdminLayout
