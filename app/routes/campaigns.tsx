import { Link, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import AddCampaignModal from "../components/AddCampaign";
import { Campaign } from "../models/types";
import { getCampaigns } from "../models/campaigns.server";
import { LoaderFunction } from "@remix-run/node";
import CampaignTable from "../components/CampaignTable";

type LoaderData = {
  campaigns: Awaited<ReturnType<typeof getCampaigns>>;
};

export const loader: LoaderFunction = async () => {
  const campaigns = await getCampaigns();
  return Response.json({ campaigns });
};

export default function campaigns() {
  const { campaigns } = useLoaderData<LoaderData>();

  const handleDelete = async (id: string) => {
    await fetch("/campaigns", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        intent: "delete",
        id: id,
      }),
    });
    window.location.reload();
  };

  return <CampaignTable campaigns={campaigns} onDelete={handleDelete} />;
}
