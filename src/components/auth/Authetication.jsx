import { Link } from "react-router-dom"

const Authetication = ({children,title,description}) => {
return (
<div className=" min-h-screen bg-base-200 flex justify-center items-center flex-col">
     <div className="ml-7 self-start ">
        <Link to='/' className="py-2 px-4 bg-black text-white rounded-lg">Go to Home</Link>
    </div>
    <div className="h-full">
        <div className="hero-content flex-col lg:flex-row-reverse ">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">{title}</h1>
                <p className="py-6">{description}</p>
            </div>
            <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                <form className="card-body">
                    {children}
                </form>
            </div>
        </div>
    </div>
</div>
)
}

export default Authetication
