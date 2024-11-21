import { useLoaderData } from "react-router-dom";
import CampaignCard from "../components/CampaignCard";

const DonationCampaigns = () => {
    const campaigns = useLoaderData();
    return (
        
      <div>
            <h3 className="font-bold text-3xl text-center mt-5">Join Our Winter Relief Campaigns</h3>
            <div className="md:grid grid-cols-3 gap-4 my-8">
                {
                    campaigns.map(campaign => <CampaignCard key={campaign.id} campaign={campaign}></CampaignCard>)
                }
            </div>
      </div>
    );
};

export default DonationCampaigns;