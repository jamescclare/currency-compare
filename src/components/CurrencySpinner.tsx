import { findName, getRandomCurrency } from '@/libs/currencies';
import { Quote } from '@/libs/queries';
import { RandomQuote } from '@/pages/api/demo';
import { Heading } from '@chakra-ui/react';
import * as React from 'react';
import CurrencyValue from './CurrencyValue';

type Props = { quote?: Quote };

const DEFAULT_TICKRATE = 100;

const CurrencySpinner = ({ quote }: Props) => {
    const [tickrate, setTickrate] = React.useState(quote ? 0 : DEFAULT_TICKRATE);
    const [code, setCode] = React.useState("AUD");
    const [value, setValue] = React.useState<number>();

    React.useEffect(() => {
        if (tickrate <= 0) {
            return;
        };

        const intervalId = setInterval(() => {
            setCode(getRandomCurrency().code);
        }, tickrate);

        return () => clearInterval(intervalId);
    }, [tickrate])

    React.useEffect(() => {
        if (quote) {
            const handleTimeout = (current: number) => {
                if (current >= 300) {
                    setTickrate(0);
                    setCode(quote.currency);
                    setValue(quote.quote);
                    return;
                }

                const next = current * 1.4;
                setTickrate(next);
                setTimeout(() => handleTimeout(next), next);
            };

            handleTimeout(tickrate);
        }
    }, [quote]);

    return <CurrencyValue 
        code={code}
        name={findName(code) || ''}
        value={value}
    />
};

export default CurrencySpinner;
export { CurrencySpinner };