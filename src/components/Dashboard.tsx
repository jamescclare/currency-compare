'use client'

import * as React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text, HStack, VStack, Heading, Divider, Button, Select, Grid, GridItem, useDisclosure } from '@chakra-ui/react'
import { PlusSquareIcon } from '@chakra-ui/icons'
import CURRENCIES, { findName } from '@/libs/currencies';
import CurrencyChart from '@/components/CurrencyChart';
import AddCurrencyModal from '@/components/modals/AddCurrencyModal';
import CurrencyValue from '@/components/CurrencyValue';
import { Quote } from '@/libs/queries';

const DEFAULT_CURRENCIES = ['AUD', 'EUR', 'USD'];
const DEFAULT_PRIMARY_CURRENCY = 'AUD';

const getQuotes = async (fromCurrency: string, trackedCurrencies: Array<string>): Promise<Array<Quote>> => {
    const toCurrencies = trackedCurrencies.filter((currency) => currency !== fromCurrency);
    
    const resp = await fetch('/api/compare', {
        method: 'post',
        body: JSON.stringify({
            from: fromCurrency,
            to: toCurrencies,
        })
    });
    const data = await resp.json();
    return data;
};

const Dashboard = () => {
    const modalDisclosure = useDisclosure();
    const [trackedCurrencies, setTrackedCurrencies] = React.useState<Array<string>>(DEFAULT_CURRENCIES);
    const [primaryCurrency, setPrimaryCurrency] = React.useState(DEFAULT_PRIMARY_CURRENCY);
    const [quotes, setQuotes] = React.useState<Array<Quote>>([]);

    React.useEffect(() => {
        getQuotes(primaryCurrency, trackedCurrencies).then(setQuotes);
    }, [primaryCurrency, trackedCurrencies]);

    const handleAdd = (newCurrency: string, isPrimary: boolean) => {
        setTrackedCurrencies([...trackedCurrencies, newCurrency]);
        isPrimary && setPrimaryCurrency(newCurrency);
    };

    const handleRemove = (currency: string) => {
        const newCurrencies = trackedCurrencies.filter(c => c !== currency);
        setTrackedCurrencies(newCurrencies);
        primaryCurrency === currency && setPrimaryCurrency(newCurrencies[0]);
    };

    const actionsFor = (currency: string) => ({
        onRemove: () => handleRemove(currency),
        onMakePrimary: () => setPrimaryCurrency(currency),
    })

    const findQuoteValueFor = (currency: string) => {
        return quotes.find((quote) => quote.currency === currency)?.quote;
    };

    return (
        <>
            <HStack width="100%" justifyContent="space-between">
                <Heading>Dashboard</Heading>
                <Button
                        onClick={modalDisclosure.onOpen}
                        rightIcon={<PlusSquareIcon />}
                        backgroundColor="#A2E3C4"
                    >
                    Add Currency
                </Button>
            </HStack>
            <CurrencyChart quotes={[
                { currency: primaryCurrency, quote: 1 }, 
                ...quotes
            ]}/>
            <Grid templateColumns='repeat(5, 1fr)' gap={6} alignItems="top">
                <GridItem>
                    <CurrencyValue
                        code={primaryCurrency}
                        name={findName(primaryCurrency) || ''}
                        value={1}
                        actions={actionsFor(primaryCurrency)}
                    />
                </GridItem>
                {
                    trackedCurrencies
                        .filter(currency => currency !== primaryCurrency)
                        .map(currency => (
                            <CurrencyValue
                                key={currency}
                                code={currency}
                                name={findName(currency) || ''}
                                value={findQuoteValueFor(currency)}
                                actions={actionsFor(currency)}
                            />
                        ))
                }
            </Grid>
            <AddCurrencyModal exclude={trackedCurrencies} onComplete={handleAdd} {...modalDisclosure} />
        </>
    )
};

export default Dashboard;
export { Dashboard };
