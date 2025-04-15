import { Link } from "@remix-run/react";
import { Campaign } from "../models/types";
import AddCampaignModal from "./AddCampaign";
import { useState } from "react";

interface CampaignTableProps {
  campaigns: Campaign[];
  onDelete: (id: string) => void;
}

export default function CampaignTable({ campaigns, onDelete  }: CampaignTableProps) {
  const [openModel, setOpenModel] = useState(false);
  const [editingCampaign, setEditingCampaign] = useState<Campaign | null>(null);
//   const [columnOrder, setColumnOrder] = useState<string[]>(
//     campaignColumns.map((c) => c.key)
//   );
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Campaigns</h1>
        <button
          onClick={() => {
            setEditingCampaign(null);
            setOpenModel(true);
          }}
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
            {campaigns.map((campaign: Campaign, index: number) => (
              <tr
                key={campaign.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {index + 1}
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
                      onClick={() => {
                        setEditingCampaign(campaign);
                        setOpenModel(true);
                      }}
                      className="text-indigo-600 hover:text-indigo-900 px-2 py-1 rounded-md transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(campaign.id)}
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
        }}
        campaign={editingCampaign || undefined}
      />
    </div>
  );
}
