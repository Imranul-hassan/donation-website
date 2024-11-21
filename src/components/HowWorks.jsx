
const HowWorks = () => {
    return (
        <div id="how_works" className="my-10 ">
                <div className=" pr-4">
                    <div className="w-9/12 mx-auto text-center ">
                        <h3 className="font-bold text-base">How It Works</h3>
                        <h1 className="font-semibold text-4xl my-3 text-[#1D3557]">Our Works Process</h1>
                        <p>It's easy to contribute! Simply follow these steps to donate items, find collection points, and help bring warmth to those in need this winter. Together, we can make a real difference.</p>
                    </div>
                    <div className=" md:grid grid-cols-4 mt-6 gap-3 animate__animated animate__bounce animate__delay-1s ">
                        <div className="bg-blue-300 shadow-lg p-3 rounded-lg">
                            <h1 className="font-bold text-lg text-[#1D3557]">Choose a Campaign</h1>
                            <p>Browse through our active donation campaigns and select the one you’d like to contribute to.</p>
                        </div>
                        <div className="bg-purple-200 shadow-lg p-3 rounded-lg">
                            <h1 className="font-bold text-lg text-[#1D3557]">Supported Divisions</h1>
                            <div className="flex  space-x-6">
                                <ul>
                                    <li>Dhaka</li>
                                    <li>Chattogram</li>
                                    <li>Sylhet</li>
                                </ul>
    
                            </div>
                        </div>

                        <div className="bg-orange-300 shadow-lg p-3 rounded-lg ">
                            <h1 className="font-bold text-lg text-[#1D3557]">Donate Items</h1>
                            <p>Donate winter essentials like blankets, coats, or warm clothing.</p>
                        </div>

                        <div className="bg-pink-200 shadow-lg p-3 rounded-lg">
                        <h3 className="font-bold text-lg text-[#1D3557]">Donation Collection Points</h3>
                        <div className="flex  space-x-6">
                               <p>You can either drop them off at our collection points or arrange a pickup.</p>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default HowWorks;