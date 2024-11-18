import about_banner from "../assets/cloth-3.jpg"
const About = () => {
    return (
        <div className="my-10 md:flex">
                <div className="md:w-1/2 pr-4">
                    <h3>About Us</h3>
                    <h1 className="font-semibold text-4xl my-3">Spreading Warmth, One Donation at a Time</h1>
                    <p>At Winter Donation, we connect donors and volunteers to provide warmth to those in need across Bangladesh during harsh winters. Together, we can make a difference.</p>
                    <div className="md:flex-col mt-6">
                        <div className="bg-slate-50 shadow-lg p-3">
                            <h1 className="font-bold text-lg">Donate Winter Essentials</h1>
                            <p>Donate blankets, sweaters, or coats by logging in, exploring campaigns, and pledging your support.</p>
                        </div>
                        <div className="bg-slate-50 shadow-lg p-3 my-5">
                            <h1 className="font-bold text-lg">Spread Awareness</h1>
                            <p>Spread the word on social media or with friends to inspire others to contribute.</p>
                        </div>
                        <div className="bg-slate-50 shadow-lg p-3">
                            <h1 className="font-bold text-lg">Volunteer for a Cause</h1>
                            <p>Volunteer to distribute donations and directly impact those in need.</p>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2">
                    <img className="h-full rounded-lg" src={about_banner} alt="" />
                </div>
        </div>
        
    );
};

export default About;