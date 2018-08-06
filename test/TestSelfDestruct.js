//var SelfDestruct = artifacts.require("./SelfDestruct.sol");
var SelfDestruct = artifacts.require('SelfDestruct.sol');

contract('Test SelfDestruction Contract', function(accounts) {

    var selfDestruct;

    if('Test Destruction Function ', function(){
        //1. Get the deployed contract instance
        return SelfDestruct.deployed().then(function(instance) {
            //2. Set the value
            selfDestruct = instance;
            selfDestruct.setName("Mosquito");
            //3. Get the value
            return selfDestruct.name.call();
        }).then(function(result){
            //4. Print the received value to console
            console.log("Name : ", result);
            //5. Call kill
            return selfDestruct.killContract();
        }).then(function(result){
            console.log("Contract Destroyed");
            // This call will throw an excepion as contract is destroyed
            selfDestruct.setName("Rat");
        })
    });
})
