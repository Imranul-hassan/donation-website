import { NavLink } from "react-router-dom";

const CampaignCard = ({campaign}) => {
    console.log(campaign)
    const {title, image, description, division, id} = campaign
    return (
        <div className="my-3">
           <div className="card card-compact bg-base-100 h-96 shadow-xl">
                <figure>
                    <img
                    className="w-full h-40"
                    src={image}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p> Division: {division}</p>
                    <div className="card-actions justify-end">
                    <NavLink to={`/details/${id}`}><button className="btn btn-primary">Donate</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;