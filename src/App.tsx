import {
  createWeb3Modal,
  defaultConfig,
  useWeb3Modal,
  useWeb3ModalEvents,
  useWeb3ModalState,
  useWeb3ModalTheme,
  useWeb3ModalAccount,
  useWeb3ModalProvider
} from '@web3modal/ethers/react'

import { zkSyncTestnet } from "viem_zksync_chains"
import { utils, BrowserProvider, Wallet } from "zksync2-js";
import { gaslessPaymasterContract } from './paymaster-contract';
import { ethers } from "ethers";

const projectId = '5a99d9369e7d9d41d706df47234a30e1'
if (!projectId) {
  throw new Error('VITE_PROJECT_ID is not set')
}

// 2. Set chains
const chains = [
  zkSyncTestnet
]

const usePaymasterHelper = async () => {
  const paymasterParams = utils.getPaymasterParams(
    gaslessPaymasterContract.address,
    {
      type: "General",
      innerInput: new Uint8Array(),
    }
  );

  return {
    gasPerPubdata: BigInt(utils.DEFAULT_GAS_PER_PUBDATA_LIMIT),
    paymasterParams: {
      paymaster: paymasterParams.paymaster as `0x${string}`,
      paymasterInput: paymasterParams.paymasterInput as `0x${string}`
    }
  }
};

const ethersConfig = defaultConfig({
  metadata: {
    name: "Web3Modal & zkSync",
    description: "Web3Modal & zkSync Tutorial",
    url: "https://web3modal.com",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
  },
  defaultChainId: zkSyncTestnet.id,
  rpcUrl: zkSyncTestnet.rpcUrls.default.http[0]
})

// 3. Create modal
createWeb3Modal({
  ethersConfig,
  chains,
  projectId,
  enableAnalytics: true,
  themeMode: 'light',
  themeVariables: {
    '--w3m-color-mix': '#00DCFF',
    '--w3m-color-mix-strength': 20
  }
})

export default function App() {
  // 4. Use modal hook
  const modal = useWeb3Modal()
  const state = useWeb3ModalState()
  const { themeMode, themeVariables, setThemeMode } = useWeb3ModalTheme()
  const events = useWeb3ModalEvents()
  const { address, chainId, isConnected } = useWeb3ModalAccount()
  const { walletProvider } = useWeb3ModalProvider()

  //testnet acc
  const PRIVATE_KEY = 'ac1e735be8536c6534bb4f17f06f6afc73b2b5ba84ac2cfb12f7461b20c0bbe3'

  async function onSendTransaction() {
    const provider = new BrowserProvider(walletProvider)
    const ethProvider = ethers.getDefaultProvider("goerli");
    const wallet = new Wallet(PRIVATE_KEY, provider, ethProvider);

    console.log(`Balance before: ${await provider.getBalance(address)}`);
    
    const params = usePaymasterHelper()
    console.log('sendTransaction ', provider)
    const tx = await wallet.sendTransaction({
      account: address,
      to: '0x36615Cf349d7F6344891B1e7CA7C72883F5dc049',
      maxFeePerGas: 250000000n,
      maxPriorityFeePerGas: 0n,
      value: 100000,
      customData:{
         ...params,
      },
      chain: zkSyncTestnet,
      type: 113
    });

    console.log('tx, ', tx)

    await tx.wait()
    console.log(`Balance after: ${await provider.getBalance(address)}`);
  }

  async function onSignMessage() {
    const provider = new BrowserProvider(walletProvider)
    const signer = await provider.getSigner()
    const signature = await signer?.signMessage('Hello Web3Modal Ethers')
    console.log(signature)
  }

  return (
    <>
      <w3m-button />
      <w3m-network-button />

      <button onClick={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}>
        Toggle Theme Mode
      </button>
      <button onClick={() => onSendTransaction()}>Send transaction</button>
      <button onClick={() => onSignMessage()}>Sign Message</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <pre>{JSON.stringify({ themeMode, themeVariables }, null, 2)}</pre>
      <pre>{JSON.stringify(events, null, 2)}</pre>
    </>
  )
}
