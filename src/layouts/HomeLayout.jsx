import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = () => {
    return (
        <div>
            <nav className="bg-sky-100">
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