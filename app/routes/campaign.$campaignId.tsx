import { LoaderFunctionArgs } from "@remix-run/node";
import { Campaign, dummyCampaigns } from "../sampleData";
import { redirect, useLoaderData, useNavigate } from "@remix-run/react";

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
    // throw new Response("Campaign not found", { status: 404 });
  }

  return campaign;
}

export default function CampaignDetails() {
  const { id, dailyBudget, keywords, name } = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  function handleRedirection() {
    navigate("/");
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6">Campaign Details</h1>
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-bold text-gray-800">{name}</h2>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              ID: {id}
            </span>
          </div>

          <div className="mt-4">
            <div className="flex items-center text-gray-600">
              <span className="font-semibold">Daily Budget:</span>
              <span className="ml-2 text-gray-800">
                ${dailyBudget.toFixed(2)}
              </span>
            </div>

            <div className="mt-3">
              <h3 className="text-sm font-semibold text-gray-600 mb-1">
                Keywords
              </h3>
              <div className="flex flex-wrap gap-2">
                {keywords.map((keyword: string, index: number) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex space-x-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
              Edit Campaign
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={handleRedirection}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
      >
        Back to all Campaigns
      </button>
    </div>
  );
}
