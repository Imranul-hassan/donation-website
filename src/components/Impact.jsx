import { NavLink } from "react-router-dom";

const Impact = () => {
    return (
        <div>
            <section className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-12 mb-10 rounded-lg">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Our Impact So Far</h2>
                    <p className="text-lg  mb-10">Together, we've brought warmth and hope to thousands of lives.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <div className="text-5xl font-extrabold text-blue-600">5,000+</div>
                            <p className="font-semibold mt-2">Winter Clothes Donated</p>
                        </div>
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <div className="text-5xl font-extrabold text-blue-600">1,200+</div>
                            <p className="font-semibold mt-2">Families Helped</p>
                        </div>
                        <div className="bg-white shadow-lg p-6 rounded-lg">
                            <div className="text-5xl font-extrabold text-blue-600">300+</div>
                            <p className=" font-semibold mt-2">Volunteers</p>
                        </div>
                    </div>

                    <div className="mt-10">
                    <blockquote className="italic text-lg text-gray-700">
                        "Thanks to your donations, my family stayed warm this winter. We are truly grateful!" — A Beneficiary
                    </blockquote>
                    </div>

                    <div className="mt-8">
                    <NavLink to="/campaign">
                        <button className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-700">
                            Donate Now
                        </button>
                    </NavLink>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Impact;