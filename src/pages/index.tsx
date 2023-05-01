import * as React from 'react';
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Card, CardHeader, CardBody, CardFooter, Text, HStack, VStack, Heading, Divider, Button, Select, Link } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import CurrencyChart from '@/components/CurrencyChart'
import CountrySelect from '@/components/CountrySelect'
import { RandomQuote } from './api/demo';
import Demo from '@/components/Demo';
import CURRENCIES from '@/libs/currencies';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Home - Currency Compare</title>
        <meta name="description" content="Compare currency prices" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/dollar.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <main className={`${styles.main} ${styles.center} ${inter.className}`}>
        <VStack spacing="5rem">
          <VStack spacing="1rem">
            <Heading size="3xl">Welcome to Currency Compare</Heading>
            <Text>Compare the current prices of world currencies</Text>
          </VStack>
          <HStack spacing="2rem">
            <Card>
              <CardHeader>
                <Heading size='md'>{CURRENCIES.length} currencies at your fingertips!</Heading>
              </CardHeader>
              <CardBody>
                <Demo />
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <VStack spacing="1.5rem">
                  <VStack spacing="1rem">
                    <Heading size='md'>Want more data?</Heading>
                    <Button
                      rightIcon={<ArrowForwardIcon />}
                      backgroundColor="#A2E3C4"
                      onClick={() => router.push('/dashboard')}
                    >
                      Create your dashboard
                    </Button>
                  </VStack>
                </VStack>
              </CardBody>
            </Card>
          </HStack>
        </VStack>
      </main>
    </>
  )
}
