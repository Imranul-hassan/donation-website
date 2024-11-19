import { useContext, useState } from "react";
import { authContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const {handleGoogleLogin, handleLogin, handleLogOut} = useContext(authContext);
    const [error , setError] = useState("")
    const location = useLocation()
    const navigate = useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value 
        const password = form.password.value   
        
        handleLogin(email, password)
        .then(res =>{
            // navigate(location.state.from)
            navigate("/")
        })
        .catch(err=>{
            setError(err.message)
        })
    }
    const googleLoginHandler=()=>{
        handleGoogleLogin()
        .then(res=>{
            // 
            navigate("/")
        })

    }

    return (
        <div>
            <div className="min-h-screen  flex justify-center items-center">
                <div className="card bg-base-100 w-full max-w-sm shrink-0">
                <h2 className=" font-semibold text-2xl text-center mt-2">Login your account</h2>
                <form onSubmit={handleSubmit}  className="card-body pt-3">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="password" autoComplete="off" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                         <button type="submit" className="btn btn-primary">Login</button>
                    </div>
        
                    <button onClick={googleLoginHandler}>Google Login</button>
                    {error && <p className="text-red-400">{error}</p>}
                </form>
                <p className="text-center mb-4 font-semibold">Dont’t Have An Account ? <Link to="/register"> Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;