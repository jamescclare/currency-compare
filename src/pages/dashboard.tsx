import * as React from 'react';
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { VStack, Heading, useDisclosure } from '@chakra-ui/react'
import Dashboard from '@/components/Dashboard';

const inter = Inter({ subsets: ['latin'] });

const DEFAULT_CURRENCIES = ['AUD', 'USD', 'EUR'];
const DEFAULT_PRIMARY_CURRENCY = 'AUD';

export default function Home() {
    return (
        <>
            <Head>
                <title>Dashboard - Currency Compare</title>
                <meta name="description" content="Dashboard - Currency Compare" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/svg+xml" href="/dollar.svg" />
                <link rel="icon" type="image/png" href="/favicon.png" />
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <VStack spacing="3rem">
                    <Dashboard />
                </VStack>
            </main>
        </>
    )
}
