import { Campaign, Keyword } from "./types";

const getRandomBudget = () => (Math.random() * (200 - 50) + 50).toFixed(2);

export const dummyKeywordList: Keyword[] = [
  {
    id: "05cce0c5-94fa-46ee-9637-5905a7bd7262",
    text: "TypeScript",
    bid: 1.5,
    match_type: "exact",
    state: "enabled",
  },
  {
    id: "4329e124-e13e-420e-bd7a-9319dc7d0ff1",
    text: "JavaScript",
    bid: 2.0,
    match_type: "phrase",
    state: "enabled",
  },
  {
    id: "9c053cb2-3494-4cf6-a4a0-30e18f343438",
    text: "Web Development",
    bid: 1.2,
    match_type: "broad",
    state: "disabled",
  },
  {
    id: "c19e6a2f-097c-40aa-a8e4-0fc6cc8c60a3",
    text: "React",
    bid: 1.8,
    match_type: "exact",
    state: "enabled",
  },
  {
    id: "b1d8c8d0-13f4-41fc-bd08-62aab56cc21c",
    text: "Node.js",
    bid: 2.5,
    match_type: "phrase",
    state: "enabled",
  },
];

export const dummyCampaigns: Campaign[] = [
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    name: "Campaign A",
    dailyBudget: parseFloat(getRandomBudget()),
    keywords: [
      "05cce0c5-94fa-46ee-9637-5905a7bd7262",
      "4329e124-e13e-420e-bd7a-9319dc7d0ff1",
    ],
  },
  {
    id: "c9eb1c3e-1b2e-4c3b-8c3b-1c3b8c3b1c3b",
    name: "Campaign B",
    dailyBudget: parseFloat(getRandomBudget()),
    keywords: ["9c053cb2-3494-4cf6-a4a0-30e18f343438"],
  },
  {
    id: "d9b1c3e1-1b2e-4c3b-8c3b-1c3b8c3b1c3b",
    name: "Campaign C",
    dailyBudget: parseFloat(getRandomBudget()),
    keywords: [
      "c19e6a2f-097c-40aa-a8e4-0fc6cc8c60a3",
      "b1d8c8d0-13f4-41fc-bd08-62aab56cc21c",
    ],
  },
  {
    id: "e9b1c3e1-1b2e-4c3b-8c3b-1c3b8c3b1c3b",
    name: "Campaign D",
    dailyBudget: parseFloat(getRandomBudget()),
    keywords: [
      "4329e124-e13e-420e-bd7a-9319dc7d0ff1",
      "c19e6a2f-097c-40aa-a8e4-0fc6cc8c60a3",
    ],
  },
  {
    id: "f9b1c3e1-1b2e-4c3b-8c3b-1c3b8c3b1c3b",
    name: "Campaign E",
    dailyBudget: parseFloat(getRandomBudget()),
    keywords: ["b1d8c8d0-13f4-41fc-bd08-62aab56cc21c"],
  },
  {
    id: "g9b1c3e1-1b2e-4c3b-8c3b-1c3b8c3b1c3b",
    name: "Campaign F",
    dailyBudget: parseFloat(getRandomBudget()),
    keywords: [
      "05cce0c5-94fa-46ee-9637-5905a7bd7262",
      "9c053cb2-3494-4cf6-a4a0-30e18f343438",
    ],
  },
  {
    id: "h9b1c3e1-1b2e-4c3b-8c3b-1c3b8c3b1c3b",
    name: "Campaign G",
    dailyBudget: parseFloat(getRandomBudget()),
    keywords: [
      "4329e124-e13e-420e-bd7a-9319dc7d0ff1",
      "b1d8c8d0-13f4-41fc-bd08-62aab56cc21c",
    ],
  },
];
