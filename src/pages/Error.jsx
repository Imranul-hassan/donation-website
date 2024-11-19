import { NavLink } from "react-router-dom";

const Error = () => {
    
    return (
        <div className="w-72 mx-auto mt-60">
            <p className="font-bold text-3xl mb-4">Not Found Page</p>
           <button className="btn bg-slate-300"> <NavLink to="/">Go to Home</NavLink></button>
        </div>
    );
};

export default Error;