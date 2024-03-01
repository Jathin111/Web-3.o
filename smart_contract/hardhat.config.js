//https://eth-sepolia.g.alchemy.com/v2/4IRL-G1zcN34EX8b0qZ2qpITzpMzDn6n

require("@nomiclabs/hardhat-waffle");

module.exports ={
  solidity:"0.8.0",
  networks:{
    sepolia:{
      url:'https://eth-sepolia.g.alchemy.com/v2/4IRL-G1zcN34EX8b0qZ2qpITzpMzDn6n',
      accounts:['a8aa6255961dab51f4b63cca69b5d5c5392427526c8a2c59472dc3a90b8627d4']
    }
  }
}