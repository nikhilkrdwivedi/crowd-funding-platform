# Crowd Funding Platform

#### Pre-Requisite
- Metamask wallet
- Thirdweb
- Basic knowledge of Blockchain and Reactjs
- Node Version [v16.15.1]
- Basic knowledge of Tailwind-css
 
#### Features
Currently, this project supports following methods, which are below:
- ###### Create Campaign
    - Connect Metamask wallet and create new campaign
- ###### Fetch Campaign from Smart Contract
    - Fetch and show all campaign listed in platform
- ###### Campaign Details Page
    - This page shows all information about campaign like Target, Donators, Days left, and Story
- ###### Donate Ethers
    - You can donate ethers to campaign
 
#### Installation
###### Client (React APP)
App requires [Node.js](https://nodejs.org/) [v16.15.1] to run.
Install the dependencies and devDependencies and start the server.
Go *crowd-funding-platform/client/src/constants/index.js* and **Replace**  *export const contractAddress = "CONTRACT_ADDRESS";*
Go to  *crowd-funding-platform/client* folder and run following command:
```sh
npm i
npm start
npm run dev
```
###### Smart Contract (Solidity App by Thirdweb)
Create **.env** file at *crowd-funding-platform/crowd-funding* and paste PRIVATE_KEY="PRIVATE_KEY" then run following commands:
```sh
npm i
npm run deploy
```
If there is no error, you will redirect to thirdweb web app and follow the instruction given at [dashboard](https://thirdweb.com/dashboard)
## Project Screenshots
###### Home Page (You can find all campaign):
![This is an image](https://raw.githubusercontent.com/nikhilkrdwivedi/crowd-funding-platform/master/screenshots/homepage.png)
###### Create Campaign Page:
![This is an image](https://raw.githubusercontent.com/nikhilkrdwivedi/crowd-funding-platform/master/screenshots/create-campaign.png)
###### Campaign Details Page:
![This is an image](https://raw.githubusercontent.com/nikhilkrdwivedi/crowd-funding-platform/master/screenshots/campaign-details.png)
###### Profile Page (campaign created by you only):
![This is an image](https://raw.githubusercontent.com/nikhilkrdwivedi/crowd-funding-platform/master/screenshots/profile-page.png)

**Happy coding!😀**