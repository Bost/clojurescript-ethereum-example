var event = token.CoinTransfer({}, '', function(error, result){
    if (!error) {
        console.log(
            "\n"+
            "Coin transfer: " + result.args.amount + " tokens sent!"+
            " New balances: \n"+
            " Sender:   " + result.args.sender   + " " + token.coinBalanceOf.call(result.args.sender) + " tokens \n"+
            " Receiver: " + result.args.receiver + " " + token.coinBalanceOf.call(result.args.receiver) + " tokens" );
    }
    else {
        console.log("ERROR: "+error);
    }
});

var amount = 1000;
var src = eth.accounts[0];
var dst = eth.accounts[1];

console.log("Unlocking "+src+" ...");
personal.unlockAccount(src,"m");
console.log("Unlocking "+src+" ... done");

console.log("Sending "+amount+" coins from: "+src+" to "+dst);
var txhash = token.sendCoin.sendTransaction(dst, amount, {from: src});
console.log("TxHash: "+txhash);
