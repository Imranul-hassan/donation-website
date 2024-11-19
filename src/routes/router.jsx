import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import DonationCampaigns from "../pages/DonationCampaigns";
import Help from "../pages/Help";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import DonationDetails from "../components/DonationDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";


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
                element:<Dashboard></Dashboard>
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
            }
        ]
    },
    {
        path:"/auth",
        element:<h1>auth</h1>
    },
    {
        path:"*",
        element: <h2>Error</h2>
    }

])

export default router;