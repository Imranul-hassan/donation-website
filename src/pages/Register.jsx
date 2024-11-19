import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";

const Register = () => {
    const {handleRegister, manageProfile, handleGoogleLogin} = useContext(authContext);
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault();
        setError("")
        const form = new FormData(e.target);
        const name = form.get("name")
        const photo = form.get("photo")
        const email = form.get("email")
        
        const password = form.get("password")
        if(password.length<6){
            setError("Password Must Contain 6 Character")
            return;
        }
        if(!/[A-Z]/.test(password)){
            setError("Password Must Contain One Upercase")
            return;
        }
        if(!/[a-z]/.test(password)){
            setError("Password Must Contain One Lowercase")
            return;
        }
        console.log(error)
        handleRegister(email, password)
        .then(res =>{
            manageProfile(name, photo)
            navigate("/")
        })
     
    }
    const googleHandler=()=>{
        handleGoogleLogin()
        .then(res=>{
            // 
            navigate("/")
        })

    }
    return (
        <div>
           <div className="min-h-screen  flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h2 className=" font-semibold text-2xl text-center mt-2">Register your account</h2>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input name="photo" type="text" placeholder="photo url" className="input input-bordered" required />
                </div>
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
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
        
                </div>
                <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Register</button>
                </div>
                <button onClick={googleHandler}>Google Login</button>
                {error && <p className="text-red-500">{error} </p>}
            </form>
            
            <p className="text-center mb-4 font-semibold">Already Have An Account ? <Link to="/login"> Login</Link></p>
            </div>
        </div>
        </div>
    );
};

export default Register;