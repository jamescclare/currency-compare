import { gql } from "@apollo/client";
import client from "./swop-apollo-client";

type SWOPQuote = { quoteCurrency: string, quote: number };
export type Quote = { currency: string, quote: number };

const compareMultipleCurrencies = async (fromCurrency: string, toCurrencies: string[]): Promise<Array<Quote>> => {
    const query = gql`query CompareMultipleCurrencies($baseCurrency: String, $quoteCurrencies: [String!]) {
        latest(baseCurrency: $baseCurrency, quoteCurrencies: $quoteCurrencies) {
          quote
          quoteCurrency
        }
    }`;

    // The free tier fo this API only lets you use "EUR" as the base currency, 
    // so we have to do our own normaisation.
    const baseCurrency = "EUR";
    const quoteCurrencies = [fromCurrency, ...toCurrencies];

    const { data } = await client.query({ query, variables: { baseCurrency, quoteCurrencies } });

    const isFromCurrency = ({ quoteCurrency }: SWOPQuote) => quoteCurrency === fromCurrency;

    const { quote: normalisationQuote } = data.latest.find(isFromCurrency);

    return data.latest
        .filter((quote: SWOPQuote) => !isFromCurrency(quote))
        .map(({ quote, quoteCurrency }: SWOPQuote) => ({
            quote: quote / normalisationQuote,
            currency: quoteCurrency
        }));
};

const compareTwoCurrencies = async (fromCurrency: string, toCurrency: string) => {
    const quotes = await compareMultipleCurrencies(fromCurrency, [toCurrency]);
    return quotes[0];
}

export { compareMultipleCurrencies, compareTwoCurrencies };