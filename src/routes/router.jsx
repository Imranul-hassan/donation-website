import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";


const router = createBrowserRouter([
    {
        path:"/",
        element: <HomeLayout></HomeLayout>
    },
    {
        path:"/new...",
        element:<h2>Something</h2>
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