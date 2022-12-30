import React, { createContext, useContext } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { contractAddress } from "../constants";
const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(contractAddress);
  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  );
  const address = useAddress();
  console.log("address ", address);
  const connect = useMetamask();
  const publishCampaign = async (campaign) => {
    try {
      const data = await createCampaign([
        address,
        campaign.title,
        campaign.description,
        campaign.target,
        new Date(campaign.deadline).getTime(),
        campaign.image,
      ]);
      console.log("contract call success ", data);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  const getCampaigns = async () => {
    const campaigns = await contract.call("getCampaigns");
    // console.log("getCampaigns ", campaigns);
    const parsedCampaigns = campaigns.map((campaign, i) => {
      return {
        title: campaign.title,
        description: campaign.description,
        target: ethers.utils.formatEther(campaign.target.toString()),
        image: campaign.image,
        owner: campaign.owner,
        deadline: campaign.deadline.toNumber(),
        amountCollected: ethers.utils.formatEther(
          campaign.amountCollected.toString()
        ),
        pId: i,
      };
    });
    // console.log("parsedCampaigns ", parsedCampaigns);
    return parsedCampaigns;
  };
  const getUserCampaigns = async () => {
    const allCampaigns = await getCampaigns();
    const filteredCampaigns = allCampaigns.filter(
      (campaign) => campaign.owner === address
    );
    return filteredCampaigns;
  };
  const donate = async (pId, amount) => {
    const data = await contract.call("donateToCampaign", pId, {
      value: ethers.utils.parseEther(amount),
    });
    return data;
  };
  const getDonations = async (pId) => {
    const donations = await contract.call("getDonators", pId);
    const numberOfDonations = donations[0].length;
    const parsedDonations = [];
    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString()),
      });
    }
    return parsedDonations;
  };
  return (
    <StateContext.Provider
      value={{
        connect,
        address,
        contract,
        createCampaign: publishCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
