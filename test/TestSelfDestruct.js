//var SelfDestruct = artifacts.require("./SelfDestruct.sol");
var SelfDestruct = artifacts.require('SelfDestruct');

contract('Test SelfDestruction Contract', function(accounts) {


    it('Test Destruction Function ', function(){

        var selfDestruct;

        //1. Get the deployed contract instance
        return SelfDestruct.deployed().then(function(instance) {
            //2. Set the value
            selfDestruct = instance;
            selfDestruct.setName("Mosquito", {from:accounts[0]});
            //3. Get the value
            return selfDestruct.name.call();
        }).then(function(result){
            //4. Print the received value to console
            console.log("Name : ", result);
            //5. Call kill
            return selfDestruct.killContract({from:accounts[0]});
        }).then(function(){
            console.log("Contract Destroyed");
            // This call will throw an excepion as contract is destroyed
            selfDestruct.setName("Rat");
        });
    });
})
