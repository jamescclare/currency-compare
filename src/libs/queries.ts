import { gql } from "@apollo/client";
import client from "./swop-apollo-client";

export type Quote = { quoteCurrency: string, quote: number };

const compareMultipleCurrencies = async (baseCurrency: string, quoteCurrencies: string[]): Promise<Array<Quote>> => {
    console.log(baseCurrency, quoteCurrencies);

    const query = gql`query CompareMultipleCurrencies($baseCurrency: String, $quoteCurrencies: [String!]) {
        latest(baseCurrency: $baseCurrency, quoteCurrencies: $quoteCurrencies) {
          quote
          quoteCurrency
        }
    }`;

    const { data } = await client.query({ query, variables: { baseCurrency, quoteCurrencies } });
    
    return data.latest;
};

const compareTwoCurrencies = async (baseCurrency: string, quoteCurrencies: string) => {
    const latest = await compareMultipleCurrencies(baseCurrency, [quoteCurrencies]);

    return latest[0];
};

export { compareMultipleCurrencies, compareTwoCurrencies };