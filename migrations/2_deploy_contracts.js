var SelfDestruct = artifacts.require("./SelfDestruct.sol");

module.exports = function(deployer) {
    deployer.deploy(SelfDestruct);
}