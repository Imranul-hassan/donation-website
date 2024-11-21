import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import DonationCampaigns from "../pages/DonationCampaigns";
import Help from "../pages/Help";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import DonationDetails from "../components/DonationDetails";
import Login from "../pages/Login";
import Error from "../pages/Error";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../components/UpdateProfile";
import ForgetPassword from "../components/ForgetPassword";


const router = createBrowserRouter([
    {
        path:"/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/campaign",
                element:<DonationCampaigns></DonationCampaigns>,
                loader:()=>fetch("/campaigns.json")
            },
            {
                path:"/help",
                element:<Help></Help>
            },
            {
                path:"/dashboard",
                element:<PrivateRoute>
                    <Dashboard></Dashboard>
                </PrivateRoute>
            },
            {
                path:"/details/:id",
                element: <PrivateRoute>
                    <DonationDetails></DonationDetails>
                </PrivateRoute>,
                loader:async({params})=>{
                    const res = await fetch("/campaigns.json")
                    const data = await res.json()
                    const singleData = data.find(d=> d.id == params.id)
                    console.log(singleData)
                    return singleData
                }
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/update-profile",
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path:"/forget-password",
                element: <ForgetPassword></ForgetPassword>
            }
        ]
    },
    {
        path:"*",
        element:<Error></Error>
    }

])

export default router;