import { z } from 'zod';

import type { NextApiRequest, NextApiResponse } from 'next'
import { currencyCodeSchema, getRandomCurrency } from '@/libs/currencies';
import * as queries from '@/libs/queries';

// const demoComparisonSchema = z.object({
//     from: currencyCodeSchema,
//     to: currencyCodeSchema
// });

export type RandomQuote = { from: string, to: string } & queries.Quote;

export default async function handler(req: NextApiRequest, res: NextApiResponse<RandomQuote>) {
    const from = "EUR";
    const { code: to } = getRandomCurrency();
    
    const quote = await queries.compareTwoCurrencies(from, to);
    
    return res.status(200).send({
        from,
        to,
        ...quote
    });
}