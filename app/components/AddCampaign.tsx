import { Form } from "@remix-run/react";
import { Campaign } from "../types";
import { keywordsList } from "../sampleData";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  campaign: Campaign;
}

export default function AddCampaignModal({ isOpen, onClose, campaign }: Props) {
  if (!isOpen) return null;
  console.log(campaign);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Create New Campaign
        </h2>

        <Form method="POST" className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Campaign Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g., Summer Sale"
              value={campaign?.name || ""}
            />
          </div>

          <div>
            <label
              htmlFor="dailyBudget"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Daily Budget ($)
            </label>
            <input
              type="number"
              name="dailyBudget"
              id="dailyBudget"
              step="0.01"
              min="0"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="e.g., 25.50"
              value={campaign?.dailyBudget || 0}
            />
          </div>

          <div>
            <label
              htmlFor="keyword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Keyword
            </label>
            <select
              name="keyword"
              id="keyword"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
            >
              <option value="">Select a keyword</option>
              {campaign?.keywords
                ? campaign.keywords.map((id) => (
                  <option key={id} value={id}>
                    {keywordsList[id]?.text || "Unknown Keyword"}
                  </option>
                ))
                : Object.entries(keywordsList).map(([key, value]) => (
                    <option key={key} value={value.text}>
                      {value.text}
                    </option>
                  ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl"
          >
            Launch Campaign
          </button>
        </Form>
      </div>
    </div>
  );
}
