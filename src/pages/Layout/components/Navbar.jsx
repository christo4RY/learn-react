import { useContext } from "react"
import { Link } from "react-router-dom"
import { BookStore } from "../../../store/BookProvider"
import { AuthStore } from "../../../store/AuthProvider"

const Navbar = () => {

const {search,setSearch} = useContext(BookStore)
const {user} = useContext(AuthStore)
const handleSearch = (value) => {
setSearch(value)
}
return (
<div className="py-2">
    <div className="navbar bg-base-100">
        <div className="flex-1">
            <Link to='/' className="btn btn-ghost text-xl lg:text-3xl">Book Store</Link>
        </div>
        <div className="flex-none gap-2">
            <div className="form-control">
                <input type="text" placeholder="Search" value={search} onChange={(e)=> handleSearch(e.target.value)}
                className="input input-bordered w-24 md:w-auto" />
            </div>
            {
            user.auth && (
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component"
                            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <ul tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <Link to='/dashboard'>Dashboard</Link>
                    </li>
                </ul>
            </div>
            ) }
            {!user.auth && (
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn m-1">Sign In</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box w-52">
                    <li>
                        <Link to='/login'>Sign In</Link>
                    </li>
                    <li>
                        <Link to='/register'>Sing Up</Link>
                    </li>
                </ul>
            </div>
            )
            }
        </div>
    </div>
</div>
)
}

export default Navbar
