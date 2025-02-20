const erc20Token = artifacts.require("./erc20Token.sol");
const SupplyChain = artifacts.require("./SupplyChain.sol");
const basicMath = artifacts.require("./basicMath.sol");

module.exports = function(deployer) {
    deployer.deploy(erc20Token, 10000, "TotalSem Token", 18, "TotalSem");
    deployer.deploy(SupplyChain);
    deployer.deploy(basicMath);
};