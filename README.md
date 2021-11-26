
Program Versions -
Truffle v5.4.21 (core: 5.4.21)
Solidity - 0.4.24 (solc-js)
Node v14.17.6
Web3.js v1.5.3
Contract address on the Rinkeby test network (Etherscan):
https://rinkeby.etherscan.io/address/0x1d4396d3dfdfffb57e2ae580f175e7dfcf08759a
Network name: 'rinkeby' Network id: 4 Block gas limit: 0x989677

Libraries Used –
1.	Truffle-hd-Wallet Provider – to sign the transactions

IPFS –  Was not used

UML Diagrams and screen shots are in the images folder

I gratefully acknowledge the help I got from the following resources while completing this project.

References –
https://www.youtube.com/watch?v=s-Cp9CYBheo
https://github.com/scliff108/udacity_SupplyChain
https://github.com/andistoev/udacity-blockchain-developer-nanodegree--nd1309/tree/master/project3-ethereum-supply-chain-n-data-auditing-dapp
https://github.com/axelgalicia/blockchain-supply-chain/blob/master/project-6/test/TestSupplychain.js



# Supply chain & data auditing

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.



The DApp User Interface when running should look like...

![truffle test](images/ftc_product_overview.png)

![truffle test](images/ftc_farm_details.png)

![truffle test](images/ftc_product_details.png)

![truffle test](images/ftc_transaction_history.png)


## Getting Started

 These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

```
Give examples (to be clarified)
```

### Installing

> The starter code is written for **Solidity v0.4.24**. At the time of writing, the current Truffle v5 comes with Solidity v0.5 that requires function *mutability* and *visibility* to be specified (please refer to Solidity [documentation](https://docs.soliditylang.org/en/v0.5.0/050-breaking-changes.html) for more details). To use this starter code, 
please run `npm i -g truffle@4.1.14` to install Truffle v4 with Solidity v0.4.24. 


A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/udacity/nd1309/tree/master/course-5/project-6
```



Change directory to ```project-6``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd project-6
npm install
```

Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```



Your terminal should look something like this:

![truffle test](images/ganache-cli.png)

In a separate terminal window, 
Compile smart contracts:

```
truffle compile
```


Your terminal should look something like this:

![truffle test](images/truffle_compile.png)


This will create the smart contract artifacts in folder ```build\contracts```.


Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```


Your terminal should look something like this:

![truffle test](images/truffle_migrate.png)

Test smart contracts:

```
truffle test
```


All 10 tests should pass.

![truffle test](images/truffle_test.png)


In a separate terminal window, launch the DApp:

```
npm run dev
```


## Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [IPFS](https://ipfs.io/) - IPFS is the Distributed Web | A peer-to-peer hypermedia protocol
to make the web faster, safer, and more open.
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.


## Authors

See also the list of [contributors](https://github.com/your/project/contributors.md) who participated in this project.

## Acknowledgments

* Solidity
* Ganache-cli
* Truffle
* IPFS