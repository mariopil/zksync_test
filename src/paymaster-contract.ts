// Localnet - 0x4B5DF730c2e6b28E17013A1485E5d9BC41Efe021
// Testnet - 0xFD9aE5ebB0F6656f4b77a0E99dCbc5138d54b0BA
// local - 0xf20c4bEbd07368578Db26f814b9934f22F9aa8E9
export const gaslessPaymasterContract = {
    address: '0xFD9aE5ebB0F6656f4b77a0E99dCbc5138d54b0BA',
    abi: [
        {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
              },
              {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
              }
            ],
            name: "OwnershipTransferred",
            type: "event"
          },
          {
            inputs: [],
            name: "owner",
            outputs: [
              {
                internalType: "address",
                name: "",
                type: "address"
              }
            ],
            stateMutability: "view",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "bytes",
                name: "_context",
                type: "bytes"
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "txType",
                    type: "uint256"
                  },
                  {
                    internalType: "uint256",
                    name: "from",
                    type: "uint256"
                  },
                  {
                    internalType: "uint256",
                    name: "to",
                    type: "uint256"
                  },
                  {
                    internalType: "uint256",
                    name: "gasLimit",
                    type: "uint256"
                  },
                  {
                    internalType: "uint256",
                    name: "gasPerPubdataByteLimit",
                    type: "uint256"
                  },
                  {
                    internalType: "uint256",
                    name: "maxFeePerGas",
                    type: "uint256"
                  },
                  {
                    internalType: "uint256",
                    name: "maxPriorityFeePerGas",
                    type: "uint256"
                  },
                  {
                    internalType: "uint256",
                    name: "paymaster",
                    type: "uint256"
                  },
                  {
                    internalType: "uint256",
                    name: "nonce",
                    type: "uint256"
                  },
                  {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                  },
                  {
                    internalType: "uint256[4]",
                    name: "reserved",
                    type: "uint256[4]"
                  },
                  {
                    internalType: "bytes",
                    name: "data",
                    type: "bytes"
                  },
                  {
                    internalType: "bytes",
                    name: "signature",
                    type: "bytes"
                  },
                  {
                    internalType: "bytes32[]",
                    name: "factoryDeps",
                    type: "bytes32[]"
                  },
                  {
                    internalType: "bytes",
                    name: "paymasterInput",
                    type: "bytes"
                  },
                  {
                    internalType: "bytes",
                    name: "reservedDynamic",
                    type: "bytes"
                  }
                ],
                internalType: "struct Transaction",
                name: "_transaction",
                type: "tuple"
              },
              {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
              },
              {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
              },
              {
                internalType: "enum ExecutionResult",
                name: "_txResult",
                type: "uint8"
              },
              {
                internalType: "uint256",
                name: "_maxRefundedGas",
                type: "uint256"
              }
            ],
            name: "postTransaction",
            outputs: [],
            stateMutability: "payable",
            type: "function"
          },
          {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "newOwner",
                type: "address"
              }
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
              },
              {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "txType",
                    type: "uint256"
                  },
                  {
                    internalType: "uint256",
                    name: "from",
                    type: "uint256"
                  },
                  {
                    internalType: "uint256",
                    name: "to",
                    type: "uint256"
                  },
                  {
                    internalType: "uint256",
                    name: "gasLimit",
                    type: "uint256"
                  },
                  {
                    internalType: "uint256",
                    name: "gasPerPubdataByteLimit",
                    type: "uint256"
                  },
                  {
                    internalType: "uint256",
                    name: "maxFeePerGas",
                    type: "uint256"
                  },
                  {
                    internalType: "uint256",
                    name: "maxPriorityFeePerGas",
                    type: "uint256"
                  },
                  {
                    internalType: "uint256",
                    name: "paymaster",
                    type: "uint256"
                  },
                  {
                    internalType: "uint256",
                    name: "nonce",
                    type: "uint256"
                  },
                  {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                  },
                  {
                    internalType: "uint256[4]",
                    name: "reserved",
                    type: "uint256[4]"
                  },
                  {
                    internalType: "bytes",
                    name: "data",
                    type: "bytes"
                  },
                  {
                    internalType: "bytes",
                    name: "signature",
                    type: "bytes"
                  },
                  {
                    internalType: "bytes32[]",
                    name: "factoryDeps",
                    type: "bytes32[]"
                  },
                  {
                    internalType: "bytes",
                    name: "paymasterInput",
                    type: "bytes"
                  },
                  {
                    internalType: "bytes",
                    name: "reservedDynamic",
                    type: "bytes"
                  }
                ],
                internalType: "struct Transaction",
                name: "_transaction",
                type: "tuple"
              }
            ],
            name: "validateAndPayForPaymasterTransaction",
            outputs: [
              {
                internalType: "bytes4",
                name: "magic",
                type: "bytes4"
              },
              {
                internalType: "bytes",
                name: "context",
                type: "bytes"
              }
            ],
            stateMutability: "payable",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "address payable",
                name: "_to",
                type: "address"
              }
            ],
            name: "withdraw",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          },
          {
            stateMutability: "payable",
            type: "receive"
          }          
      ],
  } as const
  
