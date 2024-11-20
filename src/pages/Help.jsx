import { Link } from "react-router-dom";

const Help = () => {
    return (
        <div>
           <div className="w-10/12 mx-auto my-10">
                <h3 className="font-bold text-3xl text-center">How You Can Help Spread Warmth</h3>
                <div className=" my-5 mb-12">
                    <h3 className="text-xl font-bold mb-2 text-[#1D3557]">Become a Winter Hero</h3>
                    <p className="  text-lg">Join us in our mission to provide warmth and support to those in need this winter. Whether through donations, volunteering, or spreading awareness, your involvement can make a meaningful difference. Together, we can help keep vulnerable communities safe and warm during the harsh winter months.</p>
                </div>
                <h3 className="text-xl font-bold text-[#1D3557]">Get Involved: Spread Warmth and Make a Difference</h3>
                <div className="md:flex my-5 gap-2 mb-10">
                    <div className="bg-orange-200 p-4 rounded-lg">
                        <h2 className="text-lg font-bold mb-2 text-[#1D3557]">Donation Campaign</h2>
                        <p>Contribute winter essentials or spread the word to support our donation drives and make an impact.</p>
                        <Link to="/campaign"><button className="btn font-bold bg-[#3b6781] mt-2 text-white font-base">Campaign Details</button></Link>
                    </div>
                    <div className="bg-lime-500 p-4 rounded-lg">
                        <h2 className="text-lg font-bold mb-2 text-[#1D3557]">Lend a Hand: Distribute Warmth This Winter</h2>
                        <p>
                        Help collect, sort, and distribute winter clothing to bring warmth to those in need this winter.</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-2 text-[#1D3557]">Get in Touch</h2>
                    <p>Email: contact@winterdonation.org</p>
                    <p>Phone: (+123) 456-7890</p>
                    <p>Address: Winter Donation HQ, 123 Charity Lane, City, Country</p>
                </div>
           </div>
        </div>
    );
};

export default Help;