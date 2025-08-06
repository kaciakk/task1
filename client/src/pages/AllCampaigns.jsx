import { useLoaderData, redirect, Form, Link } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { LuTrash2, LuPencilLine } from "react-icons/lu";

export const loader = async () => {
  try {
    const response = await customFetch.get("/campaigns");
    return response.data.campaigns;
  } catch (error) {
    console.log("Loader error:", error);
    return [];
  }
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const id = formData.get("id");
  await customFetch.delete(`/campaigns/${id}`);
  return redirect("/dashboard/all-campaigns");
};

const AllCampaigns = () => {
  const campaigns = useLoaderData();

  return (
    <>
      <div className="overflow-x-auto bg-white shadow rounded-lg hidden md:block">
        <table className="min-w-full table-fixed divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="w-[6rem] px-4 py-3 text-xs font-semibold uppercase text-gray-700 text-center">
                Status
              </th>
              <th className="w-[10rem] px-4 py-3 text-xs font-semibold uppercase text-gray-700 text-left">
                Campaign name
              </th>
              <th className="w-[12.5rem] px-4 py-3 text-xs font-semibold uppercase text-gray-700 text-left">
                Keywords
              </th>
              <th className="w-[8rem] px-4 py-3 text-xs font-semibold uppercase text-gray-700 text-center">
                Bid amount
              </th>
              <th className="w-[10rem] px-4 py-3 text-xs font-semibold uppercase text-gray-700 text-center">
                Campaign fund
              </th>
              <th className="w-[10rem] px-4 py-3 text-xs font-semibold uppercase text-gray-700 text-center">
                Town
              </th>
              <th className="w-[8rem] px-4 py-3 text-xs font-semibold uppercase text-gray-700 text-center">
                Radius
              </th>
              <th className="w-[6rem] px-4 py-3 text-xs font-semibold uppercase text-gray-700 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {campaigns.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-10 text-center text-gray-400">
                  No campaigns found.
                </td>
              </tr>
            ) : (
              campaigns.map((campaign) => (
                <tr
                  key={campaign._id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-4 text-center">
                    <label className="flex justify-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="campaignStatus"
                        className="sr-only peer"
                        defaultChecked={campaign.campaignStatus}
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all peer-checked:bg-blue-600 peer-checked:after:translate-x-full"></div>
                    </label>
                  </td>

                  <td className="px-4 py-4 text-gray-800 font-medium">
                    {campaign.campaignName}
                  </td>

                  <td className="px-4 py-4 text-gray-600 ">
                    {campaign.campaignKeywords.join(", ")}
                  </td>

                  <td className="px-4 py-4 text-gray-600 text-center">
                    {campaign.campaignBidAmount}
                  </td>

                  <td className="px-4 py-4 text-gray-600 text-center">
                    {campaign.campaignFund}
                  </td>

                  <td className="px-4 py-4 text-center">
                    {campaign.campaignTown}
                  </td>

                  <td className="px-4 py-4 text-gray-600 text-center">
                    {campaign.campaignRadius}km
                  </td>

                  <td className="px-4 py-4 text-center">
                    <div className="flex justify-center gap-2">
                      <Link to={`../edit-campaign/${campaign._id}`}>
                        <button className="text-blue-600 hover:underline flex items-center gap-1 cursor-pointer">
                          <LuPencilLine size={20} />
                          Edit
                        </button>
                      </Link>

                      <Form method="post">
                        <input type="hidden" name="id" value={campaign._id} />
                        <button
                          type="submit"
                          className="text-red-600 hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <LuTrash2 size={20} />
                          Delete
                        </button>
                      </Form>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-4">
        {campaigns.length === 0 ? (
          <p className="text-center text-gray-400 py-10">No campaigns found.</p>
        ) : (
          campaigns.map((campaign) => (
            <div
              key={campaign._id}
              className="bg-white shadow rounded-lg p-4 space-y-2"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {campaign.campaignName}
                </h3>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked={campaign.campaignStatus}
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all peer-checked:bg-blue-600 peer-checked:after:translate-x-full"></div>
                </label>
              </div>

              <p>
                <strong>Keywords:</strong>{" "}
                {campaign.campaignKeywords.join(", ")}
              </p>
              <p>
                <strong>Bid amount:</strong> {campaign.campaignBidAmount}
              </p>
              <p>
                <strong>Campaign fund:</strong> {campaign.campaignFund}
              </p>
              <p>
                <strong>Town:</strong> {campaign.campaignTown}
              </p>
              <p>
                <strong>Radius:</strong> {campaign.campaignRadius} km
              </p>

              <div className="flex gap-4 mt-2">
                <button className="text-blue-600 hover:underline flex items-center gap-1 cursor-pointer">
                  <LuPencilLine size={20} />
                  Edit
                </button>

                <Form method="post">
                  <input type="hidden" name="id" value={campaign._id} />
                  <button
                    type="submit"
                    className="text-red-600 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <LuTrash2 size={20} />
                    Delete
                  </button>
                </Form>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default AllCampaigns;
