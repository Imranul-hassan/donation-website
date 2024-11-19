
const HowWorks = () => {
    return (
        <div className="my-10">
                <div className=" pr-4">
                    <h3>How It Works</h3>
                    <h1 className="font-semibold text-4xl my-3">Our Works Process</h1>
                    <p>It's easy to contribute! Simply follow these steps to donate items, find collection points, and help bring warmth to those in need this winter. Together, we can make a real difference.</p>
                    <div className=" md:flex mt-6 gap-3 animate__animated animate__bounce animate__delay-1s ">
                        <div className="bg-orange-100 p-3">
                            <h1 className="font-bold text-lg">Choose a Campaign</h1>
                            <p>Browse through our active donation campaigns and select the one you’d like to contribute to.</p>
                        </div>
                        <div className="bg-amber-100 p-3 ">
                            <h1 className="font-bold text-lg">Supported Divisions</h1>
                            <div className="flex  space-x-6">
                                <ul>
                                    <li>Dhaka</li>
                                    <li>Chattogram</li>
                                    <li>Sylhet</li>
                                </ul>
    
                            </div>
                        </div>

                        <div className="bg-amber-100 p-3 ">
                            <h1 className="font-bold text-lg">Donate Items</h1>
                            <p>Donate winter essentials like blankets, coats, or warm clothing. You can either drop them off at our collection points or arrange a pickup.</p>
                        </div>

                        <div className="bg-yellow-100 p-3">
                        <h3 className="font-bold text-lg">Donation Collection Points</h3>
                        <div className="flex  space-x-6">
                                <ul>
                                    <li>Dhaka</li>
                                    <li>Chattogram</li>
                                    <li>Sylhet</li>
                                </ul>
    
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default HowWorks;