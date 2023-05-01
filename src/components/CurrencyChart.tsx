import { Quote } from '@/libs/queries';
import * as React from 'react';

import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, BarChart, Bar } from 'recharts';

type Props = { quotes: Array<Quote> }

const CurrencyChart = ({ quotes }: Props) => {
    return (<BarChart width={730} height={250} data={quotes}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="currency" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="quote" fill="#7E8D85" />
      </BarChart>
    )
};

export default CurrencyChart;
export { CurrencyChart };