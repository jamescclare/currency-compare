import * as React from 'react';
import { Select } from '@chakra-ui/react';
import { CURRENCIES } from '@/libs/currencies';

type Props = { 
    onChange?: () => string,
    defaultCode: string 
}

const CurrencySelect = ({ onChange, defaultCode }: Props) => {
    return (
        <Select onChange={onChange}>
            {CURRENCIES.map(({ code, name }) => 
                <option key={code} value={code} selected={defaultCode === code}>
                    {`${name} (${code})`}
                </option>
            )}
        </Select>
    );
};

export default CurrencySelect;
export { CurrencySelect };