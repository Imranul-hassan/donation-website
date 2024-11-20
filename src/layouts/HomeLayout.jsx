import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

const HomeLayout = () => {
    return (
        <div className="bg-[#F1FAEE]">
            <ToastContainer />
            <nav className="bg-[#1D3557]">
                <Navbar></Navbar>
            </nav>
            <main className="min-h-[calc(100vh-240px)] w-10/12 mx-auto">
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
            
        </div>
    );
};

export default HomeLayout;