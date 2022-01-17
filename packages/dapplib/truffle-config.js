require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note oven evil hover clog bubble ghost'; 
let testAccounts = [
"0x4fd9d5191c1b61e4e725c0fc0144426ac08a1da6624858b067633768848077b6",
"0xec7e57e6f515b03aec5fd71e69ad1708405c8e2b2a463a48658cdd9994ba353f",
"0x4d3a936458acebfa113f4699a6a7ae0c2f869a141bc391b92b44d8f634134d51",
"0xe6b64758d4a5bcfd63a23f4129895d823611a2756a9d8d017e621b96e9920efe",
"0xe59990f0cd9a0308147cbb18ad7632ff56c36fa3c99606dd1031149e37ad0f67",
"0x75c9634cb5617e37eec84681b51e07fbedbaa7428827a6329dd9af8d9a408676",
"0x9c4f7a54956d12b2cd16f822a93dd0996c2069bd4b766ede8e6c1d55f1c317b4",
"0x3e37bdff922ae00b441d479ad791fdb116c2c95ce97a6a139bbf1212ed3a6cbb",
"0xe0323882a3109b9a2ef56861027f90b179bff8646f18ef398a64a2fb018b6e55",
"0xdce20b9bb38d609417a68f79696af86b5bd56972863e525414f49256ad83fab3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

