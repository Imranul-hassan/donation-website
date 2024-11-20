import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";


const DonationDetails = () => {
    const singleData = useLoaderData();
    const {title, image, description, division, id} = singleData
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target 
        form.reset();
    }

    return (
        <div className="my-10">
            <div className="card card-compact bg-base-100 h-auto shadow-xl md:w-1/2 mx-auto">
                <figure>
                    <img
                    className="w-full h-52 p-3 rounded-md"
                    src={image}
                    alt="Shoes"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p> Division: {division}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4 mt-6 bg-white rounded-lg p-3 shadow-xl">
                <div>
                    <label className="block text-sm font-medium">Quantity</label>
                    <input
                    type="number"
                    name="quantity"
                    className="border rounded px-3 py-2 w-full"
                    placeholder="E.g., 2"
                    required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Item Type</label>
                    <select
                    name="itemType"
                    className="border rounded px-3 py-2 w-full"
                    required
                    >
                    <option value="blanket">Blanket</option>
                    <option value="jacket">Jacket</option>
                    <option value="sweater">Sweater</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium">Pickup Location</label>
                    <input
                    type="text"
                    name="pickupLocation"
                    className="border rounded px-3 py-2 w-full"
                    placeholder="E.g., House 12, Road 5, Dhanmondi, Dhaka"
                    required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Additional Notes</label>
                    <textarea
                    name="notes"
                    className="border rounded px-3 py-2 w-full"
                    placeholder="Optional"
                    />
                </div>
                <button type="submit" className="bg-[#457B9D] text-white py-2 px-4 rounded-lg font-bold">
                    Submit Donation
                </button>
                </form>

            </div>
        </div>
    );
};

export default DonationDetails;