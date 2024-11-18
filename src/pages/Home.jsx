import About from "../components/About";
import HowWorks from "../components/HowWorks";
import Slider from "../components/Slider";

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <About></About>
           <HowWorks></HowWorks>
        </div>
    );
};

export default Home;