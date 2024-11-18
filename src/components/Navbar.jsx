import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between mt-8">
          <div></div>
          <div className="nav space-x-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to=" ">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
          <div className="login">
                <button className="btn ">Login</button>
          </div>
          
        </div>
    );
};

export default Navbar;