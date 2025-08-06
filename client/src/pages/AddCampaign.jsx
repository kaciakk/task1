import { useState } from "react";
import { Form, redirect } from "react-router-dom";
import { CAMPAIGN_STATUS, CAMPAIGN_TOWN } from "../../../utils/constants";
import customFetch from "../utils/customFetch";
import CreatableSelect from "react-select/creatable";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  data.campaignStatus = formData.has("campaignStatus");

  data.campaignKeywords = data.campaignKeywords
    ? Array.from(
        new Set(
          data.campaignKeywords.split(",").map((k) => k.trim().toLowerCase())
        )
      )
    : [];

  try {
    await customFetch.post("/campaigns", data);
    return redirect("/dashboard/all-campaigns");
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

const AddCampaign = () => {
  const [keywords, setKeywords] = useState([]);

  const keywordOptions = [
    { value: "sale", label: "Sale" },
    { value: "discount", label: "Discount" },
    { value: "new", label: "New" },
    { value: "limited", label: "Limited" },
    { value: "exclusive", label: "Exclusive" },
  ];

  const handleKeywordsChange = (newKeywords) => {
    if (!newKeywords) {
      setKeywords([]);
      return;
    }
    const uniqueKeywords = Array.from(
      new Set(newKeywords.map((k) => k.value.toLowerCase()))
    ).map((value) => ({ value, label: value }));
    setKeywords(uniqueKeywords);
  };

  const keywordsString = keywords.map((keyword) => keyword.value).join(",");

  return (
    <div className="bg-white shadow-md rounded-lg p-8 w-6xl mx-auto">
      <Form method="post" className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Add Campaign
        </h2>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            name="campaignName"
            placeholder="Campaign Name"
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <CreatableSelect
            isMulti
            options={keywordOptions}
            value={keywords}
            onChange={handleKeywordsChange}
            isClearable
            isSearchable
            placeholder="Type and select keywords"
          />
          <input type="hidden" name="campaignKeywords" value={keywordsString} />

          <input
            type="number"
            name="campaignBidAmount"
            placeholder="Bid Amount"
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            min={0.01}
            step={0.01}
          />

          <input
            type="number"
            name="campaignFund"
            placeholder="Campaign Fund"
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <select
            name="campaignTown"
            defaultValue={CAMPAIGN_TOWN.OPOLE}
            className="border border-gray-300 rounded-md px-4 py-3 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {Object.values(CAMPAIGN_TOWN).map((itemValue) => (
              <option key={itemValue} value={itemValue}>
                {itemValue}
              </option>
            ))}
          </select>

          <input
            type="number"
            name="campaignRadius"
            placeholder="Radius (km)"
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label className="flex items-center space-x-2 text-gray-700">
            <input
              type="checkbox"
              name="campaignStatus"
              className="accent-blue-600 w-4 h-4"
            />
            <span>Active</span>
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition"
        >
          Add Campaign
        </button>
      </Form>
    </div>
  );
};

export default AddCampaign;
