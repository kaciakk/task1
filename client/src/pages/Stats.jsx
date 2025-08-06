import { useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch";

export const loader = async () => {
  try {
    const response = await customFetch.get("/campaigns");
    const campaigns = response.data.campaigns;
    const emeraldBalance = 1000; // mock emerald balance
    return { campaigns, emeraldBalance };
  } catch (error) {
    console.error("Error loading stats:", error);
    return { campaigns: [], emeraldBalance: 0 };
  }
};

const Stats = () => {
  const { campaigns, emeraldBalance } = useLoaderData();

  const totalCampaignFunds = campaigns.reduce(
    (acc, campaign) => acc + campaign.campaignFund,
    0
  );
  const availableBalance = emeraldBalance - totalCampaignFunds;

  return (
    <div className="p-4 bg-white shadow rounded-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Statistics</h2>
      <p>
        <strong>Emerald Balance:</strong> {emeraldBalance.toFixed(2)}
      </p>
      <p>
        <strong>Total Campaign Budget:</strong> {totalCampaignFunds.toFixed(2)}
      </p>
      <p>
        <strong>Available Funds:</strong> {availableBalance.toFixed(2)}
      </p>
    </div>
  );
};

export default Stats;
