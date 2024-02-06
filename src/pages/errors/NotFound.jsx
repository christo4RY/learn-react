import { Link } from "react-router-dom"
const NotFound = () => {
return (
<div className=" min-h-screen min-w-full flex flex-col justify-center items-center">
    <h1 className="text-red-500 font-bold text-4xl font-mono">404 not found</h1>
    <div className="mt-3">
        <Link to='/' className="py-2 px-4 bg-black text-white rounded-lg">Go to Home</Link>
    </div>
</div>
)
}

export default NotFound
