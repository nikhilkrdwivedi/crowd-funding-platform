import React, { createContext, useContext } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0x3EdB485D9267A6B4E072cB298dCaef5CAeFaCb1B"
  );
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
  return (
    <StateContext.Provider
      value={{
        connect,
        address,
        contract,
        createCampaign: publishCampaign,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
