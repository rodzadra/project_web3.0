require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/APw7NLAzGGFuyp-5AsQHphA5deuu1uxC',
      accounts: ['ef3cf422968a97c85a73f95b40fe4530aa950edc641b47bc94d957450c3c70b7'],
    },
  },
};