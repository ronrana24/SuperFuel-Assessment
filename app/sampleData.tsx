import {Campaign} from "./types"

const getRandomBudget = () => (Math.random() * (200 - 50) + 50).toFixed(2);

export const keywordsList = {
  "b1d8c8d0-13f4-41fc-bd08-62aab56cc21c": {
    state: "enabled",
    bid: 0.0,
    text: "marketing"
  },
  "c19e6a2f-097c-40aa-a8e4-0fc6cc8c60a3": {
    state: "enabled",
    bid: 0.0,
    text: "advertising"
  },
  "9c053cb2-3494-4cf6-a4a0-30e18f343438": {
    state: "enabled",
    bid: 0.0,
    text: "promotion"
  },
  "bb5c14db-1b91-4e46-9319-e8a9e3489985": {
    state: "enabled",
    bid: 0.0,
    text: "sales"
  },
  "4329e124-e13e-420e-bd7a-9319dc7d0ff1": {
    state: "enabled",
    bid: 0.0,
    text: "digital"
  },
  "b4cb8d5f-9965-4c5b-9345-7ab9aa64efec": {
    state: "enabled",
    bid: 0.0,
    text: "social media"
  },
  "f8ec2e18-0405-4d4b-b1a0-29b99c6b4784": {
    state: "enabled",
    bid: 0.0,
    text: "branding"
  },
  "aa1e1a12-c4d2-4aaf-9499-f1e8a3e55e04": {
    state: "enabled",
    bid: 0.0,
    text: "campaign"
  },
  "e2728c9f-6b4d-4b2f-b6c3-31e1290a36a7": {
    state: "enabled",
    bid: 0.0,
    text: "strategy"
  },
  "05cce0c5-94fa-46ee-9637-5905a7bd7262": {
    state: "enabled",
    bid: 0.0,
    text: "analytics"
  }
};



export const dummyCampaigns: Campaign[] = [
  {
    id: 1,
    name: "Campaign A",
    dailyBudget: parseFloat(getRandomBudget()),
    keywords: ["05cce0c5-94fa-46ee-9637-5905a7bd7262"]
  },
  {
    id: 2,
    name: "Campaign B",
    dailyBudget: parseFloat(getRandomBudget()),
    keywords: ["e2728c9f-6b4d-4b2f-b6c3-31e1290a36a7"]
  },
  {
    id: 3,
    name: "Campaign C",
    dailyBudget: parseFloat(getRandomBudget()),
    keywords: ["e2728c9f-6b4d-4b2f-b6c3-31e1290a36a7"],
  },
  {
    id: 4,
    name: "Campaign D",
    dailyBudget: parseFloat(getRandomBudget()),
    keywords: ["e2728c9f-6b4d-4b2f-b6c3-31e1290a36a7"]
  },
  {
    id: 5,
    name: "Campaign E",
    dailyBudget: parseFloat(getRandomBudget()),
    keywords: ["e2728c9f-6b4d-4b2f-b6c3-31e1290a36a7"]
  },
  {
    id: 6,
    name: "Campaign F",
    dailyBudget: parseFloat(getRandomBudget()),
    keywords: ["e2728c9f-6b4d-4b2f-b6c3-31e1290a36a7"]
  },
  {
    id: 7,
    name: "Campaign G",
    dailyBudget: parseFloat(getRandomBudget()),
    keywords: ["e2728c9f-6b4d-4b2f-b6c3-31e1290a36a7"]
  },
];
