import { LoaderFunctionArgs } from "@remix-run/node";
import { dummyCampaigns, keywordsList } from "../sampleData";
import { redirect, useLoaderData, useNavigate } from "@remix-run/react";
import { Campaign } from "../types";
import { useState } from "react";

export async function loader({ params }: LoaderFunctionArgs) {
  const campaignId = params.campaignId;

  if (!campaignId) {
    throw new Response("Campaign ID not provided", { status: 400 });
  }

  const campaign: Campaign | undefined = dummyCampaigns.find(
    (campaign: Campaign) => String(campaign.id) === campaignId
  );

  if (!campaign) {
    return redirect("/");
  }

  return campaign;
}

export default function CampaignDetails() {
  const campaign = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  const [kwords, setKeywords] = useState(keywordsList);

  function handleDeleteKeyword(key: string) {
    setKeywords((previousKeywords) => {
      const updated = { ...previousKeywords };
      delete updated[key];
      return updated;
    });
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Campaign Overview</h1>
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2.5 bg-white text-blue-600 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors text-sm font-medium"
        >
          Back to Campaigns
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        <div className="p-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-800">
                {campaign.name}
              </h2>
              <span className="inline-block bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full font-medium">
                Campaign ID: {campaign.id}
              </span>
            </div>

            <div className="bg-gray-50 px-5 py-4 rounded-lg min-w-[200px]">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500">
                  Daily Budget
                </p>
                <p className="text-xl font-semibold text-gray-800">
                  ${campaign.dailyBudget.toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <div className="border-t border-gray-100 pt-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Keywords
              </h3>
              <div className="overflow-hidden rounded-lg border border-gray-200 shadow-xs">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Keyword
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        State
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {campaign.keywords.map((key) => (
                      <tr key={key} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {kwords[key]?.text || "Not Found"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {kwords[key]?.state || "Not Found"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button
                            onClick={() => handleDeleteKeyword(key)}
                            className="text-red-600 hover:text-red-900 font-medium"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Add Keyword
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
