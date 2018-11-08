var Banker = artifacts.require("./Banker.sol")

contract('Banker', function(accounts) {
    it("Creates account with 10000", function() {
        return Banker.deployed().then(function(instance) {
            return instance.getBalance();
        }).then(function(balance) {
            assert.equal(balance.valueOf(), 10000, "There wasn't 10000 in the account");
        });
    });
    it("Despoit a certain amount into an account", function() {
        var bank;
        return Banker.deployed().then(function(instance) {
            bank = instance;
            return bank.deposit(1000);
        }).then(function() {
            return bank.getBalance();
        }).then(function(balance) {
            assert.equal(balance.valueOf(), 10000+1000, "The 1000 was not deposited");
        });
    });
    it("Withdraw a certain amount of money, but only if the amount is available on the account", function() {
        var bank;
        return Banker.deployed().then(function(instance) {
            bank = instance;
            return bank.withdraw(1000);
        }).then(function() {
            return bank.getBalance();
        }).then(function(balance) {
            assert.equal(balance.valueOf(), 10000, "The 1000 was not withdrawn");
        });
    });
});