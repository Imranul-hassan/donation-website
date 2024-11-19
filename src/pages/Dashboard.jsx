import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";


const Dashboard = () => {
    const {user} = useContext(authContext)
    console.log(user)
    return (
        <div>
            {
              <div className="mt-10">
                 <h3 className="font-bold text-3xl">Welcome,{user.displayName}!</h3>
                 <p className="my-3">Email: {user.email} </p>
                 <p>Name: {user.displayName}</p>
                <p>Image: <img className="w-20 mb-2" src={user.photoURL} alt="" /></p>
                <button>Update Profile</button>
              </div>

            }
        </div>
    );
};

export default Dashboard;