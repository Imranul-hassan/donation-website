import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";


const Dashboard = () => {
    const {user} = useContext(authContext)
    console.log(user)
    return (
        <div>
            {
              <div className="my-10 w-4/12 mx-auto p-5 bg-white rounded-lg">
                 <h3 className="font-bold text-3xl">Welcome,{user.displayName}!</h3>
                 <div className=" my-3 ">
                   <img className=" w-52 h-24 mb-2 rounded-md" src={user.photoURL} alt="" />
                 </div>
                 <p className="my-3 font-semibold">Email: {user.email} </p>
                 <p className="font-semibold">Name: {user.displayName}</p>
                <button className="bg-[#457B9D] text-white btn mt-3">Update Profile</button>
              </div>

            }
        </div>
    );
};

export default Dashboard;