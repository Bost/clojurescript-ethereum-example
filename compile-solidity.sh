#!/usr/bin/env bash

cd resources/public/contracts/src
solcjs --overwrite --optimize --bin --abi --combined-json bin,abi SimpleTwitter.sol -o ../build/ > ../build/SimpleTwitter.json
