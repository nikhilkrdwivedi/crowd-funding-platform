import React from "react";
import { useNavigate } from "react-router-dom";
import { loader } from "../assets";
import FundCard from "./FundCard";
export default function DisplayCampaigns({ title, campaigns, isLoading }) {
  const navigate = useNavigate();
  const handleNavigate = async (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };
  return (
    <div>
      <h1 className="font-epilogue font-semibold text-white text-left text-[18px]">
        {title} ({campaigns.length})
      </h1>
      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img
            src={loader}
            alt="loader"
            className="w-[100px] h-[100px] object-contain"
          />
        )}
        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campaign
          </p>
        )}
        {!!(!isLoading && campaigns.length) &&
          campaigns.map((campaign, index) => (
            <FundCard
              key={index}
              {...campaign}
              handleClick={() => handleNavigate(campaign)}
            />
          ))}
      </div>
    </div>
  );
}
