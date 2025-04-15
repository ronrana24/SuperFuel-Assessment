import { dummyCampaigns } from "./sampleData";
import { Campaign } from "./types";
import { v4 as uuidv4 } from "uuid";

export async function getCampaigns() {
  return dummyCampaigns;
}

export async function getCampaignById(id: string) {
  return dummyCampaigns.find((c) => c.id === id);
}

export async function createCampaign(campaign: Omit<Campaign, "id">) {
  if (dummyCampaigns.some((c) => c.name === campaign.name)) {
    throw new Error("Campaign name must be unique");
  }

  const newCampaign = { ...campaign, id: uuidv4() };
  dummyCampaigns.push(newCampaign);
  return newCampaign;
}

export async function updateCampaign(id: string, updates: Partial<Campaign>) {
  const index = dummyCampaigns.findIndex((c) => c.id === id);
  if (index === -1) throw new Error("Campaign not found");

  if (
    updates.name &&
    dummyCampaigns.some((c) => c.name === updates.name && c.id !== id)
  ) {
    throw new Error("Campaign name must be unique");
  }

  dummyCampaigns[index] = { ...dummyCampaigns[index], ...updates };
  return dummyCampaigns[index];
}

export async function deleteCampaign(id: string) {
  dummyCampaigns = dummyCampaigns.filter((c) => c.id !== id);
}

export async function getKeywordsByCampaignId(campaignId: string) {
  const campaign: Campaign | undefined = dummyCampaigns.find(
    (k) => k.id === campaignId
  );
  return campaign?.keywords || [];
}

export async function addKeywordToExistingCampaign(
  campaignId: string,
  keywordIds: string[]
) {
  dummyCampaigns = dummyCampaigns
    .find((c) => c.id === campaignId)
    ?.keywords.push(...keywordIds);
}

export async function deleteKeywordFromCampaign(
  campaignId: string,
  keywordId: string
) {
  dummyCampaigns = dummyCampaigns
    .find((c) => c.id === campaignId)
    ?.keywords.filter((k) => k !== keywordId);
}
