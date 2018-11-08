pragma solidity ^0.4.0;
contract Banker {
    mapping (address => uint256) balances;
    constructor() public {
        balances[msg.sender] = 10000;
    }
    
    function deposit(uint256 depositAmount) public {
        balances[msg.sender] += depositAmount;
    }
    
    function withdraw(uint256 withdrawalAmount) public returns(bool sufficient) {
        if(balances[msg.sender] < withdrawalAmount) return false;
        balances[msg.sender] -= withdrawalAmount;
        return true;
    }
    
    function getBalance() public view returns(uint256){
        return balances[msg.sender];
    }
}