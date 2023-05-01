import { z } from 'zod';

import type { NextApiRequest, NextApiResponse } from 'next'
import { currencyCodeSchema, getRandomCurrency } from '@/libs/currencies';
import * as queries from '@/libs/queries';

const comparisonSchema = z.object({
    from: currencyCodeSchema,
    to: currencyCodeSchema.array()
});

export default async function handler(req: NextApiRequest, res: NextApiResponse<Array<queries.Quote>>) {
    const body = JSON.parse(req.body);

    const { from, to } = comparisonSchema.parse(body);
    const comparison = await queries.compareMultipleCurrencies(from, to);
    
    return res.status(200).send(comparison);
}