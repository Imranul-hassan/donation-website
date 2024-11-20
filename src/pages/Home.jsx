import About from "../components/About";
import FAQ from "../components/FAQ";
import HowWorks from "../components/HowWorks";
import Slider from "../components/Slider";

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <About></About>
           <HowWorks></HowWorks>
           <FAQ></FAQ>
        </div>
    );
};

export default Home;