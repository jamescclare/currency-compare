'use client';

import * as React from 'react';
import { Box, Heading, HStack, Text, useBoolean, VStack } from '@chakra-ui/react';
import { RandomQuote } from '@/pages/api/demo';
import CurrencySpinner from './CurrencySpinner';
import { ArrowRightIcon } from '@chakra-ui/icons';

const WAIT_BEFORE_QUOTING_MS = 2000; // 2 seconds.

const getDemoQuote = async (): Promise<RandomQuote> => {
    // Wait two seconds before quoting so the 
    // animation can spin for a bit.
    await new Promise((resolve) => setTimeout(
        resolve, 
        WAIT_BEFORE_QUOTING_MS
    ));
    const resp = await fetch('/api/demo');
    const data = await resp.json();
    return data;
};

const Demo = () => {
    const [quote, setQuote] = React.useState<RandomQuote>();

    React.useEffect(() => {
      getDemoQuote().then(setQuote);
    }, []);

    return <Box width="40vw" height="15vh">
        <HStack spacing="2rem" alignItems="center">
            <CurrencySpinner quote={quote && { currency: quote.from, quote: 1 }}/>
            <ArrowRightIcon />
            <CurrencySpinner quote={quote && { currency: quote.to, quote: quote.quote }}/>
        </HStack>
    </Box>
};

export default Demo;
export { Demo };