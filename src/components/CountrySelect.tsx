import * as React from 'react';
import { Select } from '@chakra-ui/react';
import { CURRENCIES } from '@/libs/currencies';

type Props = { 
    onChange?: (currencyCode: string) => void,
    defaultCode?: string,
    exclude?: Array<string>
}

const CurrencySelect = ({ onChange, defaultCode, exclude = [] }: Props) => {
    const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        onChange && onChange(e.target.value);
    };

    return (
        <Select onChange={handleChange} placeholder="Select currency">
            {
                CURRENCIES
                    .filter(currency => !exclude.includes(currency.code))
                    .map(({ code, name }) => 
                        <option key={code} value={code} selected={defaultCode === code}>
                            {`${name} (${code})`}
                        </option>
                    )
            }
        </Select>
    );
};

export default CurrencySelect;
export { CurrencySelect };