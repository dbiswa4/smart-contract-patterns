pragma solidity ^0.4.23;

contract SelfDestruct {
    address owner;
    string public name = "NOT-SET-YET";

    modifier OwnerOnly {
        if (msg.sender != owner) {
            revert();
        } else {
            _;
        }
    }

    // Constructor
    constructor() public {
        owner = msg.sender;
    }

    // Sets the storage variable
    function setName(string _name) public {
        name = _name;
    }

    // This is where the contract is destroyed
    function killContract() public OwnerOnly {
        selfdestruct(owner);
    }
}