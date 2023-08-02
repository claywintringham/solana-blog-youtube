import { useMemo } from 'react'
import { BlogProvider } from 'src/context/Blog'
import { Router } from 'src/router'
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import './App.css'

export const App = () => {
  const endpoint =
    'https://white-compatible-borough.solana-devnet.discover.quiknode.pro/2e39dd9a6346f5748a1db040b4297093c73bbc58/'

  const wallets = useMemo(() => [new PhantomWalletAdapter()], [])
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <BlogProvider>
          <Router />
        </BlogProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
