var mining_threads = 1

// var filter = eth.filter({address: "0xa38095dc720654f1c4ac90596b0030673d5d1bf9"})
// filter.watch(function(error, result){
//     if (!error)
//         console.log(result);
// });


var filterL = eth.filter("latest");
filterL.watch(function(error, result){
    if (!error) {
        console.log("latest: "+result);
    }
});


var filterP = eth.filter("pending");
filterP.watch(function(error, result){
    if (!error)
        console.log("pending: "+result);
});


function checkWork() {
    if (eth.pendingTransactions.length > 0) {
        if (eth.mining) {
            return;
        }
        console.log("== X == Pending transactions! Mining...");
        miner.start(mining_threads);
    } else {
        miner.stop();
        console.log("== X == No transactions! Mining stopped.");
    }
}

eth.filter("latest", function(err, block) { checkWork(); });
eth.filter("pending", function(err, block) { checkWork(); });

checkWork();
