import { Campaign } from "../sampleData";

export function CampaignCard({ id, dailyBudget, keywords, name }: Campaign) {
  return (
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
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
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
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors text-sm font-medium">
            View Analytics
          </button>
        </div>
      </div>
    </div>
  );
}
