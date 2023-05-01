import { getRandomCurrency } from '@/libs/currencies';
import { RandomQuote } from '@/pages/api/demo';
import { Heading } from '@chakra-ui/react';
import * as React from 'react';

type Props = { currencyCode?: string, onStoppedSpinning: () => void };

const DEFAULT_TICKRATE = 100;

const CurrencySpinner = ({ currencyCode, onStoppedSpinning }: Props) => {
    const isFirstRender = React.useRef(true);
    const [tickrate, setTickrate] = React.useState(currencyCode ? 0 : DEFAULT_TICKRATE);
    const [code, setCode] = React.useState("AUD");

    React.useEffect(() => {
        if (tickrate <= 0) {
            if (isFirstRender.current) {
                isFirstRender.current = false;
            } else {
                onStoppedSpinning();
            }
               
            return;
        };

        const intervalId = setInterval(() => {
            setCode(getRandomCurrency().code);
        }, tickrate);

        return () => clearInterval(intervalId);
    }, [tickrate])

    React.useEffect(() => {
        if (currencyCode) {
            const handleTimeout = (current: number) => {
                if (current >= 2000) {
                    setTickrate(0);
                    return;
                }

                const next = current * 1.4;
                setTickrate(next);
                setTimeout(() => handleTimeout(next), next);
            };

            handleTimeout(tickrate);
        }
    }, [currencyCode]);

    return <Heading size='2xl'>{code}</Heading>
};

export default CurrencySpinner;
export { CurrencySpinner };