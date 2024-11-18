import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import DonationCampaigns from "../pages/DonationCampaigns";
import Help from "../pages/Help";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";


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
                element:<DonationCampaigns></DonationCampaigns>
            },
            {
                path:"/help",
                element:<Help></Help>
            },
            {
                path:"/dashboard",
                element:<Dashboard></Dashboard>
            },
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