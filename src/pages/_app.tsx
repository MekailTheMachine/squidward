import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {ThirdwebProvider, ChainId} from '@thirdweb-dev/react'
import React, { useState } from 'react';


export default function App({ Component, pageProps }: AppProps) {
  const desiredChainId = ChainId.Goerli;

  return <ThirdwebProvider>
     <Component {...pageProps} /> 
     </ThirdwebProvider>
}
