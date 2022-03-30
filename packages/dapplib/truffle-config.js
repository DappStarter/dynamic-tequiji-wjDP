require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note spice purchase install ensure olympic gauge'; 
let testAccounts = [
"0xdc439b9865a1509011bc0c96bc9361d5426ed5dcf8611de0c3499dbf1ca88f05",
"0xb071fba79083e3936c4c68a7d511f4ded16af646ca4ceda2dcbc531b31c250b8",
"0xdb77d985c629b5d3f7ea98104f04d10b71784dd11dcf0c26ec405fdb663920eb",
"0x8c3614e161d7eb07e122380ca9ce81c8105cafcde9f8801fa1736d97c171e895",
"0xd6416453f21f523874e2b2f101c9d5c015939414ce9b4cd97b66a5e67924c7fd",
"0x83e69224488cd5a2424624ffceb175687fc43c10aaebbed416a3ca0e9e7c41da",
"0x6562c71e5773b9106f6d62a937d208f9862885a62875220c0804a36be90c5de2",
"0x3ccb060b7de3e34a2631b1ee7a9f0478a7514973109b151efb5eb80de54f23d0",
"0xc9006ea16ab17d87e650af63d8058fe8f338f1eb4570b4eb41d06544c8248941",
"0xa7e4ac784337e86b485b417e524adbb52b0e71dbcca6f75d4249f8dabce42b76"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

