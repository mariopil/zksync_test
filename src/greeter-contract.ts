// Localnet - 0x111C3E89Ce80e62EE88318C2804920D4c96f92bb
// Testnet - 0xbe9bcf56654fd81a921b6Bd07965Dd67Afbb0B69
// local - 0x6E6bc3D438d0f4Fb61c2141c97F008507E7bb183
export const greeterContract = {
  address: '0xbe9bcf56654fd81a921b6Bd07965Dd67Afbb0B69',
  abi: [
    {
      inputs: [
        {
          internalType: "string",
          name: "_greeting",
          type: "string"
        }
      ],
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      inputs: [],
      name: "greet",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_greeting",
          type: "string"
        }
      ],
      name: "setGreeting",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    }    
  ],
} as const
