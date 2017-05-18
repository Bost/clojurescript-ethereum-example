# Clojure Ethereum Example

This is source code for tutorials:
 * [How to create decentralised apps with Clojurescript re-frame and Ethereum](https://medium.com/@matus.lestan/how-to-create-decentralised-apps-with-clojurescript-re-frame-and-ethereum-81de24d72ff5#.nvfyq27lb)
 * [How to deploy Clojurescript app into distributed storage IPFS](https://medium.com/@matus.lestan/how-to-deploy-clojurescript-app-into-distributed-storage-ipfs-e9d02cdfbc20#.ax3ra84bz)

Deployed at:
 * https://clojurescript-ethereum-example.herokuapp.com/
 * https://ipfs.io/ipns/QmXj5vKEKSU4kkjGnWq9ZJeG4xrkacDugme4iXz6qtvPgN/


```
set ethdir "/media/bost/usb-drive/eth-devnet"
geth --dev --maxpeers 0 --port 30304 --shh --rpc --rpcport 8545 --keystore devnet --datadir $ethdir --minerthreads 1 --rpccorsdomain "*" --rpcapi "eth,net,web3,personal,shh"
geth attach ipc:/$ethdir/geth.ipc
loadScript('resources/public/js/CoinTransfer1.js');
tokenCompiled
loadScript('resources/public/js/CoinTransfer2.js');
loadScript('resources/public/js/CoinTransfer3.js');
```

```
etc.coinbase
personal.newAccount("m")
eth.accounts
web3.fromWei(eth.getBalance(eth.coinbase), "ether")
```

```
geth --preload ~/bin/check-work.js attach ipc:/$ethdir/geth.ipc
```

## Start App
Start Solidity auto compiling
```
lein auto compile-solidity
```
Start less compiling
```
lein less4j auto
```
Start App
```
lein repl
```
```clojure
(clojurescript-ethereum-example.core/-main)
(figwheel-sidecar.repl-api/start-figwheel! (figwheel-sidecar.config/fetch-config))
(figwheel-sidecar.repl-api/cljs-repl)
```
Open at http://localhost:6655/

