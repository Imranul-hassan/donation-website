import { NavLink } from "react-router-dom";

const CampaignCard = ({campaign}) => {
    console.log(campaign)
    const {title, image, description, division, id} = campaign
    return (
        <div className="my-3">
           <div className="card card-compact bg-base-100 h-96 shadow-2xl rounded-xl">
                <figure>
                    <img
                    className="w-full h-40 p-4 rounded-lg"
                    src={image}
                    alt=" " />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p> Division: {division}</p>
                    <div className="card-actions justify-center">
                    <NavLink to={`/details/${id}`}><button className="btn bg-[#E63946] text-white rounded-full px-10 font-bold text-base">Donate</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;