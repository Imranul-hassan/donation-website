import About from "../components/About";
import FAQ from "../components/FAQ";
import HowWorks from "../components/HowWorks";
import Impact from "../components/Impact";
import Slider from "../components/Slider";

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <About></About>
           <HowWorks></HowWorks>
           <FAQ></FAQ>
           <Impact></Impact>
        </div>
    );
};

export default Home;