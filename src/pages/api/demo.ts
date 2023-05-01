import { z } from 'zod';

import type { NextApiRequest, NextApiResponse } from 'next'
import { currencyCodeSchema, getRandomCurrency } from '@/libs/currencies';
import * as queries from '@/libs/queries';

export type RandomQuote = { from: string, to: string, quote: number };

export default async function handler(req: NextApiRequest, res: NextApiResponse<RandomQuote>) {
    const { code: from } = getRandomCurrency();
    const { code: to } = getRandomCurrency();
    
    const comparison = await queries.compareTwoCurrencies(from, to);
    
    return res.status(200).send({
        from,
        to,
        quote: comparison.quote
    });
}