function checkAllBalances() {
    web3.eth.getAccounts(function(err, accounts) {
        accounts.forEach(function(id) {
            web3.eth.getBalance(id, function(err, balance) {
                console.log("" + id + ":\tbalance: " + web3.fromWei(balance, "ether") + " ether");
            });
        });
    });
};

/*
contract token {
    mapping (address => uint) public coinBalanceOf;
    event CoinTransfer(address sender, address receiver, uint amount);
    function token(uint supply) {
        coinBalanceOf[msg.sender] = supply;
    }
    function sendCoin(address receiver, uint amount) returns(bool sufficient) {
        if (coinBalanceOf[msg.sender] < amount) return false;
        coinBalanceOf[msg.sender] -= amount;
        coinBalanceOf[receiver] += amount;
        CoinTransfer(msg.sender, receiver, amount);
        return true;
    }
}
*/

var tokenSource = 'contract token {mapping (address => uint) public coinBalanceOf; event CoinTransfer(address sender, address receiver, uint amount); function token(uint supply) {coinBalanceOf[msg.sender] = supply;} function sendCoin(address receiver, uint amount) returns(bool sufficient) {if (coinBalanceOf[msg.sender] < amount) return false; coinBalanceOf[msg.sender] -= amount; coinBalanceOf[receiver] += amount; CoinTransfer(msg.sender, receiver, amount); return true;}}';

var tokenCompiled = eth.compile.solidity(tokenSource);
