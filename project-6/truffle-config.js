
const HDWalletProvider = require('truffle-hdwallet-provider');
//const fs = require('fs');

//const infuraKey = fs.readFileSync(".rinkeby-infurakey").toString().trim();
//const mnemonic = fs.readFileSync(".secret").toString().trim();
infurakey = '8e06621f67b04bb9b30e022f5ca64b41'
menmonic = 'vedanta krishna blue amount human itemsong harsh scarce progress discscover talent churchill'
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }
  },

  rinkeby: {
    provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
    network_id: 4,
    gas: 4500000,
    gasPrice: 10000000
  },
mocha: {
     //timeout: 10000000
  },
  compilers:{
    solc:{
      //version: "0.8.6",
    }
  }

};