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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto p-4">
      <div className="bg-white shadow rounded-md p-6 text-center">
        <h3 className="text-sm font-medium text-gray-500 mb-2">
          Emerald Balance
        </h3>
        <p className="text-2xl font-semibold text-emerald-600">
          {emeraldBalance.toFixed(2)}
        </p>
      </div>

      <div className="bg-white shadow rounded-md p-6 text-center">
        <h3 className="text-sm font-medium text-gray-500 mb-2">
          Total Campaign Budget
        </h3>
        <p className="text-2xl font-semibold text-blue-600">
          {totalCampaignFunds.toFixed(2)}
        </p>
      </div>

      <div className="bg-white shadow rounded-md p-6 text-center">
        <h3 className="text-sm font-medium text-gray-500 mb-2">
          Available Funds
        </h3>
        <p className="text-2xl font-semibold text-indigo-600">
          {availableBalance.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Stats;
