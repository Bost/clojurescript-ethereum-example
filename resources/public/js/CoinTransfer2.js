// tokenCompiled
var path = "/tmp/geth-compile-solidity495208010:token";
var supply = 10000;
var tokenContract = web3.eth.contract(tokenCompiled[path].info.abiDefinition);

var src = eth.accounts[0];
personal.unlockAccount(src, "m");

var token = tokenContract.new(
    supply,
    {
        from: src,
        data: tokenCompiled[path].code,
        gas: 1000000
    }, function(e, contract){
        if (!e) {
            if (!contract.address) {
                console.log("Contract transaction send: TxHash: " + contract.transactionHash + " waiting to be mined...");
            }
            else {
                console.log("Contract mined! Address: " + contract.address);
                console.log(contract);
            }
        }
        else {
            console.log("ERROR: "+e);
        }
    });

miner.start(1);
miner.setEtherbase(src);
