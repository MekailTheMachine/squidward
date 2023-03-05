import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {ConnectWallet} from '@thirdweb-dev/react'
import { lightModeTheme } from '@thirdweb-dev/react/dist/declarations/src/evm/components/theme'
import React, { useState } from 'react';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <ConnectWallet colorMode = 'light' accentColor = 'red'/>
    </div>
  )
}
