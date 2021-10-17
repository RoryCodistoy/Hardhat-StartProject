/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "ei4w6-PmSXVvsjBCOnrGU98a206Qv2DR";
const ROPSTEN_PRIVATE_KEY = "0f2fe5c15f0e23f4e2134b509f7f5eeb75afeab1e1adb536e1c8be74a85075bc";

module.exports = {
  solidity: "0.7.3",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`],
    },
  },
};