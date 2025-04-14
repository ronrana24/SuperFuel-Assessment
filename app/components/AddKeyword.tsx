import { Form } from "@remix-run/react";
import { Campaign } from "../types";
import { keywordsList } from "../sampleData";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  campaign: Campaign;
}

export default function AddKeyModal({ isOpen, onClose, campaign }: Props) {
  if (!isOpen) return null;

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
          Add Keyword
        </h2>

        <Form method="POST" className="space-y-5">
          <div>
            <label
              htmlFor="keyword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Keywords (Select multiple)
            </label>
            <select
              name="keyword"
              id="keyword"
              multiple // Enable multiple selection
              size={5} // Show 5 options at once (adjust as needed)
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
              onChange={(e) => {
                const selectedOptions = Array.from(
                  e.target.selectedOptions
                ).map((option) => option.value);
                console.log(selectedOptions);
                // Handle the selected options array
              }}
            >
              {Object.entries(keywordsList).map(([key, value]) => (
                <option key={key} value={key}>
                  {value.text}
                </option>
              ))}
            </select>
            <p className="mt-1 text-xs text-gray-500">
              Hold Ctrl (Windows/Linux) or Command (Mac) to select multiple
              options
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl"
          >
            Add Keyword
          </button>
        </Form>
      </div>
    </div>
  );
}
