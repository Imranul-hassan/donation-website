import { useLoaderData } from "react-router-dom";
import CampaignCard from "../components/CampaignCard";

const DonationCampaigns = () => {
    const campaigns = useLoaderData();
    console.log(campaigns)
    return (
        <div className="md:grid grid-cols-3 gap-4 my-8">
            {
                campaigns.map(campaign => <CampaignCard key={campaign.id} campaign={campaign}></CampaignCard>)
            }
        </div>
    );
};

export default DonationCampaigns;