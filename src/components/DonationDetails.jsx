import { useLoaderData } from "react-router-dom";

const DonationDetails = () => {
    const singleData = useLoaderData();
    const {title, image, description, division, id} = singleData
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="mb-10 md:flex gap-3">
            <div className="card card-compact bg-base-100 h-auto shadow-xl w-1/2">
                <figure>
                    <img
                    className="w-full h-52 p-3 rounded-md"
                    src={image}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p> Division: {division}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="w-1/2">
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
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                    Submit Donation
                </button>
                </form>

            </div>
        </div>
    );
};

export default DonationDetails;