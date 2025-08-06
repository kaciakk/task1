import { Form, redirect, useLoaderData } from "react-router-dom";
import { CAMPAIGN_TOWN } from "../../../utils/constants";
import customFetch from "../utils/customFetch";
import CreatableSelect from "react-select/creatable";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/campaigns/${params.id}`);
    return data.campaign;
  } catch (error) {
    return redirect("/dashboard/all-campaigns");
  }
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  data.campaignStatus = formData.get("campaignStatus") === "on";

  data.campaignKeywords = data.campaignKeywords
    ? Array.from(
        new Set(
          data.campaignKeywords.split(",").map((k) => k.trim().toLowerCase())
        )
      )
    : [];

  try {
    await customFetch.patch(`/campaigns/${params.id}`, data);
    toast.success("Campaign edited successfully!");
    return redirect("/dashboard/all-campaigns");
  } catch (error) {
    console.log(error);
  }
  return null;
};

const EditCampaign = () => {
  const campaign = useLoaderData();
  const [keywords, setKeywords] = useState([]);

  const keywordOptions = [
    { value: "sale", label: "Sale" },
    { value: "discount", label: "Discount" },
    { value: "new", label: "New" },
    { value: "limited", label: "Limited" },
    { value: "exclusive", label: "Exclusive" },
  ];

  useEffect(() => {
    if (campaign?.campaignKeywords) {
      const initialKeywords = Array.from(
        new Set(campaign.campaignKeywords.map((k) => k.toLowerCase()))
      ).map((k) => ({ value: k, label: k }));
      setKeywords(initialKeywords);
    }
  }, [campaign]);

  const handleKeywordsChange = (newKeywords) => {
    if (!newKeywords) {
      setKeywords([]);
      return;
    }
    const unique = Array.from(
      new Set(newKeywords.map((k) => k.value.toLowerCase()))
    ).map((value) => ({ value, label: value }));
    setKeywords(unique);
  };

  const keywordsString = keywords.map((k) => k.value).join(",");

  return (
    <div className="bg-white shadow-md rounded-lg max-w-6xl mx-auto px-4 py-8 mt-6 w-full">
      <Form method="post" className="flex flex-col gap-6">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Edit Campaign
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <input
            type="text"
            name="campaignName"
            placeholder="Campaign Name"
            className="w-full h-12 border border-gray-300 rounded-md px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue={campaign.campaignName}
            required
          />
          <input
            type="number"
            name="campaignFund"
            placeholder="Campaign Fund"
            className="w-full h-12 border border-gray-300 rounded-md px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue={campaign.campaignFund}
            required
          />
          <div className="w-full">
            <CreatableSelect
              isMulti
              options={keywordOptions}
              value={keywords}
              onChange={handleKeywordsChange}
              isClearable
              isSearchable
              placeholder="Type and select keywords"
              styles={{
                control: (base) => ({
                  ...base,
                  minHeight: "3rem",
                  borderColor: "#d1d5db",
                  boxShadow: "none",
                  "&:hover": { borderColor: "#3b82f6" },
                }),
              }}
            />
            <input
              type="hidden"
              name="campaignKeywords"
              value={keywordsString}
            />
          </div>

          <select
            name="campaignTown"
            defaultValue={campaign.campaignTown}
            className="w-full h-12 border border-gray-300 rounded-md px-4 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {Object.values(CAMPAIGN_TOWN).map((itemValue) => (
              <option key={itemValue} value={itemValue}>
                {itemValue}
              </option>
            ))}
          </select>
          <input
            type="number"
            name="campaignBidAmount"
            placeholder="Bid Amount"
            className="w-full h-12 border border-gray-300 rounded-md px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue={campaign.campaignBidAmount}
            required
            min={0.01}
            step={0.01}
          />
          <input
            type="number"
            name="campaignRadius"
            placeholder="Radius (km)"
            className="w-full h-12 border border-gray-300 rounded-md px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue={campaign.campaignRadius}
            required
          />

          <label className="flex items-center space-x-2 text-gray-700 col-span-1 md:col-span-2 lg:col-span-3">
            <input
              type="checkbox"
              name="campaignStatus"
              className="accent-blue-600 w-4 h-4"
              defaultChecked={campaign.campaignStatus}
            />
            <span>Active</span>
          </label>
        </div>

        <button
          type="submit"
          className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition w-full sm:w-auto self-center"
        >
          Save
        </button>
      </Form>
    </div>
  );
};

export default EditCampaign;
