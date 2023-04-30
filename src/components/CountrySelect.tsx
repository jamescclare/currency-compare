import * as React from 'react';
import { Select } from '@chakra-ui/react';

type Props = { onChange?: () => string }

const CurrencyChart = ({ onChange }: Props) => {
    return (
        <Select onChange={onChange}>

        </Select>
    );
};

export default CurrencyChart;
export { CurrencyChart };