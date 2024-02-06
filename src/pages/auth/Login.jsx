import { useContext, useState } from "react"
import Authetication from "../../components/auth/Authetication"
import { AuthStore } from "../../store/AuthProvider"
import {useNavigate} from 'react-router-dom'

const Login = () => {
const {user,setUser} = useContext(AuthStore)
const [wrong,setWrong] = useState(false)
const nav = useNavigate()
const [auth,setAuth] = useState({
email:"",
password:""
})
const handleSubmit = (e) => {
e.preventDefault()
const find = user.user?.find(u=>u.email == auth.email)
if(find.password == auth.password){
localStorage.setItem('auth',JSON.stringify(user))
setUser(pre=>{
    return {
        user:pre.user,
        error:pre.error,
        loading:pre.loading,
        auth:JSON.parse(localStorage.getItem('auth'))
    }
})
nav('/dashboard')
}else{
setWrong(true)
}
}
return (
<Authetication title='Login now!'
    description='Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.'>
    {
    wrong && (<div role="alert" className="alert alert-error">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Error! Login failed.</span>
    </div>)
    }
    <div className="form-control">
        <label className="label">
            <span className="label-text">Email</span>
        </label>
        <input type="email" value={auth.email} onChange={(e)=> setAuth((pre)=>{
        return {
        email:e.target.value,
        password:pre.password
        }
        })} placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text">Password</span>
        </label>
        <input type="password" value={auth.password} onChange={(e)=> setAuth((pre)=>{
        return {
        email:pre.email,
        password:e.target.value
        }
        })} placeholder="password" className="input input-bordered" required />
        <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
    </div>
    <div className="form-control mt-6">
        <button className="btn btn-primary" onClick={(e)=> handleSubmit(e)}>Login</button>
    </div>
</Authetication>
)
}

export default Login
