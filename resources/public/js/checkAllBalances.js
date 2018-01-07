function checkAllBalances() {
    web3.eth.getAccounts(function(err, accounts) {
        accounts.forEach(function(id, idx) {
            web3.eth.getBalance(id, function(err, balance) {
                console.log("web3.eth.accounts["+idx+"]\t id: " + id + ":\tbalance: " + web3.fromWei(balance, "ether") + " ether");
            });
        });
    });
};

checkAllBalances();
