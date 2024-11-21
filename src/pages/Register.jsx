import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import logo from "../assets/google.png"

const Register = () => {
    const {handleRegister, manageProfile, handleGoogleLogin} = useContext(authContext);
    const [error, setError] = useState("");
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
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
           <div className=" flex justify-center items-center my-10">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h2 className=" font-semibold text-2xl text-center mt-2 ">Register your account</h2>
            <form onSubmit={handleSubmit} className="card-body relative">
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
                <input name="password" type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" required />
                <button onClick={()=> setShowPassword(!showPassword)} 
                    className="absolute right-4 top-[355px] left-72 md:left-80 text-2xl ">
                        {
                            showPassword ?  <IoMdEyeOff />  : <IoMdEye />
                        }
                </button>
                </div>
                <div className="form-control mt-6">
                <button type="submit" className="btn bg-[#3b6781] text-white">Register</button>
                </div>
                <div className="flex mt-4 border p-2 rounded-md items-center justify-center">
                        <img className="w-9" src={logo}></img>
                         <button className=" bg-white" onClick={googleHandler}>Sign up with google</button>
                </div>
                {error && <p className="text-red-500">{error} </p>}
            </form>
            
            <p className="text-center mb-6 font-semibold">Already Have An Account ? <Link to="/login"> <span className="text-orange-500">Login</span></Link></p>
            </div>
        </div>
        </div>
    );
};

export default Register;