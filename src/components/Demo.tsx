'use client';

import * as React from 'react';
import { Box, Heading, HStack, Text, useBoolean, VStack } from '@chakra-ui/react';
import { RandomQuote } from '@/pages/api/demo';
import CurrencySpinner from './CurrencySpinner';

// const DEFAULT_TICKRATE = 1000 / 3; // 3 ticks per second.

const getDemoQuote = async (): Promise<RandomQuote> => {
    console.log('demo');
    // const resp = await fetch('/api/demo');
    // const data = await resp.json();
    return new Promise((resolve) => setTimeout(() => resolve({ from: 'EUR', to: 'AUD', quote: 0.91, quoteCurrency: "AUD"}), 2000));
};

const Demo = () => {
    const [quote, setQuote] = React.useState<RandomQuote>();
    const [showFrom, setShowFrom] = useBoolean();
    const [showTo, setShowTo] = useBoolean();

    React.useEffect(() => {
      getDemoQuote().then(setQuote);
    }, []);

    return <Box>
        <HStack spacing="2rem">
            <CurrencySpinner 
                currencyCode={quote?.quoteCurrency} 
                onStoppedSpinning={setShowFrom.on}
            />
            <CurrencySpinner 
                currencyCode={quote?.quoteCurrency} 
                onStoppedSpinning={setShowTo.on}
            />
        </HStack>
        <HStack spacing="2rem" align="center">
            <Text fontSize="xl">{ showFrom ? "1" : "?" }</Text>
            <Text fontSize="xl">{ showTo ? quote?.quote : "?" }</Text>
        </HStack>
    </Box>
};

export default Demo;
export { Demo };