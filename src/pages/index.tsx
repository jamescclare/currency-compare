import * as React from 'react';
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Card, CardHeader, CardBody, CardFooter, Text, HStack, VStack, Heading, Divider, Button, Select } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import CurrencyChart from '@/components/CurrencyChart'
import CountrySelect from '@/components/CountrySelect'
import { RandomQuote } from './api/demo';
import Demo from '@/components/Demo';
import CURRENCIES from '@/libs/currencies';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Compare currency prices" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/dollar.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <HStack spacing="2rem">
          {/* <Card>
            <CardHeader>
              <Heading size='md'>Try comparing currencies!</Heading>
            </CardHeader>
            <CardBody>
              <CurrencyChart />
            </CardBody>
            <CardFooter>
              <HStack width="100%">
                <Text whiteSpace="nowrap">Convert from</Text>
                <CountrySelect defaultCode={FROM_COUNTRY_DEFAULT}/>
                <Text>to</Text>
                <CountrySelect defaultCode={TO_COUNTRY_DEFAULT}/>
              </HStack>
            </CardFooter>
          </Card> */}
          <Card>
            <CardHeader>
              <Heading size='md'>Compare current prices of {CURRENCIES.length} currencies</Heading>
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
                  <Button rightIcon={<ArrowForwardIcon />}>Create free account</Button>
                </VStack>
                <Divider />
                <VStack>
                  <Text>Already have an account?</Text>
                  <Button variant='outline'>Sign in</Button>
                </VStack>
              </VStack>
            </CardBody>
          </Card>
        </HStack>
      </main>
    </>
  )
}
