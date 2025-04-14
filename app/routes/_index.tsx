import type { MetaFunction } from "@remix-run/node";
import { dummyCampaigns } from "../sampleData";
import { Link } from "@remix-run/react";
import { useState } from "react";
import AddCampaignModal from "../components/AddCampaign";
import { Campaign } from "../types";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [campaigns, setDummyCampaign] = useState(dummyCampaigns);
  const [openModel, setOpenModel] = useState(false);
  const [editedCampaign, setEditedCampaign] = useState<Campaign>(null);

  function handleEdit(campaignId: number) {
    const index = campaigns.findIndex((campaign) => campaign.id === campaignId);
    setEditedCampaign(campaigns[index]);
    setOpenModel(true);
  }

  function handleAdd() {
    setOpenModel(true);
  }

  function handleDelete(campaignId: number) {
    console.log("button clicked");

    setDummyCampaign((previousCampaigns) =>
      previousCampaigns.filter((campaign) => campaign.id !== campaignId)
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Campaigns</h1>
        <button
          onClick={handleAdd}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Add Campaign
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Daily Budget
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Keywords
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {campaigns.map((campaign: Campaign) => (
              <tr
                key={campaign.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {campaign.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                  <Link to={`/campaign/${campaign.id}`}>{campaign.name}</Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ${campaign.dailyBudget.toFixed(2)}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                  {campaign.keywords.join(", ")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(campaign.id)}
                      className="text-indigo-600 hover:text-indigo-900 px-2 py-1 rounded-md transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(campaign.id)}
                      className="text-red-600 hover:text-red-900 px-2 py-1 rounded-md transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AddCampaignModal
        isOpen={openModel}
        onClose={() => {
          setOpenModel(false);
          setEditedCampaign(null);
        }}
        campaign={editedCampaign}
      />
    </div>
  );
}
