import Authetication from "../../components/auth/Authetication"

const Register = () => {
return (
<Authetication title='Register now!'
    description='Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.'>
    <div className="form-control">
        <label className="label">
            <span className="label-text">Email</span>
        </label>
        <input type="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text">Password</span>
        </label>
        <input type="password" placeholder="password" className="input input-bordered" required />
    </div>
     <div className="form-control">
        <label className="label">
            <span className="label-text">Confirm Password</span>
        </label>
        <input type="password" placeholder="confirm password" className="input input-bordered" required />
    </div>
    <div className="form-control mt-6">
        <button className="btn btn-primary">Register</button>
    </div>
</Authetication>
)
}

export default Register
