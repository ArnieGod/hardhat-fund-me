const {
    networkConfig,
    developmentChains
} = require("../helper-hardhat-config");
const { network } = require("hardhat");

const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = network.config.chainId;

    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [address], //put price feed address,
        log: true
    });
};
