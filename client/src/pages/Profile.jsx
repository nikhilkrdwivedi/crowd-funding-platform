import React, { useEffect, useState } from "react";
import { useStateContext } from "../context";
import { DisplayCampaigns } from "../components";
export default function Profile() {
  const { address, contract, getUserCampaigns } = useStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };
  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);
  return (
    <DisplayCampaigns
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
  );
}
