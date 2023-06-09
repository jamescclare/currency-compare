import { z } from "zod";

// This could be loaded dynamically from graphQL but
// that will eat up my request allowance, so hardcode it in here for now.
const CURRENCIES = [
    {
        "code": "AED",
        "name": "United Arab Emirates dirham"
    },
    {
        "code": "AFN",
        "name": "Afghan afghani"
    },
    {
        "code": "ALL",
        "name": "Albanian lek"
    },
    {
        "code": "AMD",
        "name": "Armenian dram"
    },
    {
        "code": "ANG",
        "name": "Netherlands Antillean guilder"
    },
    {
        "code": "AOA",
        "name": "Angolan kwanza"
    },
    {
        "code": "ARS",
        "name": "Argentine peso"
    },
    {
        "code": "AUD",
        "name": "Australian dollar"
    },
    {
        "code": "AWG",
        "name": "Aruban florin"
    },
    {
        "code": "AZN",
        "name": "Azerbaijani manat"
    },
    {
        "code": "BAM",
        "name": "Bosnia and Herzegovina convertible mark"
    },
    {
        "code": "BBD",
        "name": "Barbados dollar"
    },
    {
        "code": "BDT",
        "name": "Bangladeshi taka"
    },
    {
        "code": "BGN",
        "name": "Bulgarian lev"
    },
    {
        "code": "BHD",
        "name": "Bahraini dinar"
    },
    {
        "code": "BIF",
        "name": "Burundian franc"
    },
    {
        "code": "BND",
        "name": "Brunei dollar"
    },
    {
        "code": "BOB",
        "name": "Boliviano"
    },
    {
        "code": "BRL",
        "name": "Brazilian real"
    },
    {
        "code": "BSD",
        "name": "Bahamian dollar"
    },
    {
        "code": "BWP",
        "name": "Botswana pula"
    },
    {
        "code": "BYN",
        "name": "Belarusian ruble"
    },
    {
        "code": "BZD",
        "name": "Belize dollar"
    },
    {
        "code": "CAD",
        "name": "Canadian dollar"
    },
    {
        "code": "CDF",
        "name": "Congolese franc"
    },
    {
        "code": "CHF",
        "name": "Swiss franc"
    },
    {
        "code": "CLP",
        "name": "Chilean peso"
    },
    {
        "code": "CNY",
        "name": "Renminbi (Chinese) yuan"
    },
    {
        "code": "COP",
        "name": "Colombian peso"
    },
    {
        "code": "CRC",
        "name": "Costa Rican colon"
    },
    {
        "code": "CVE",
        "name": "Cape Verdean escudo"
    },
    {
        "code": "CZK",
        "name": "Czech koruna"
    },
    {
        "code": "DJF",
        "name": "Djiboutian franc"
    },
    {
        "code": "DKK",
        "name": "Danish krone"
    },
    {
        "code": "DOP",
        "name": "Dominican peso"
    },
    {
        "code": "DZD",
        "name": "Algerian dinar"
    },
    {
        "code": "EGP",
        "name": "Egyptian pound"
    },
    {
        "code": "ERN",
        "name": "Eritrean nakfa"
    },
    {
        "code": "ETB",
        "name": "Ethiopian birr"
    },
    {
        "code": "EUR",
        "name": "Euro"
    },
    {
        "code": "FJD",
        "name": "Fiji dollar"
    },
    {
        "code": "GBP",
        "name": "Pound sterling"
    },
    {
        "code": "GEL",
        "name": "Georgian lari"
    },
    {
        "code": "GHS",
        "name": "Ghanaian cedi"
    },
    {
        "code": "GIP",
        "name": "Gibraltar pound"
    },
    {
        "code": "GMD",
        "name": "Gambian dalasi"
    },
    {
        "code": "GNF",
        "name": "Guinean franc"
    },
    {
        "code": "GTQ",
        "name": "Guatemalan quetzal"
    },
    {
        "code": "GYD",
        "name": "Guyanese dollar"
    },
    {
        "code": "HKD",
        "name": "Hong Kong dollar"
    },
    {
        "code": "HNL",
        "name": "Honduran lempira"
    },
    {
        "code": "HRK",
        "name": "Croatian kuna"
    },
    {
        "code": "HTG",
        "name": "Haitian gourde"
    },
    {
        "code": "HUF",
        "name": "Hungarian forint"
    },
    {
        "code": "IDR",
        "name": "Indonesian rupiah"
    },
    {
        "code": "ILS",
        "name": "Israeli new shekel"
    },
    {
        "code": "INR",
        "name": "Indian rupee"
    },
    {
        "code": "IQD",
        "name": "Iraqi dinar"
    },
    {
        "code": "IRR",
        "name": "Iranian rial"
    },
    {
        "code": "ISK",
        "name": "Icelandic króna"
    },
    {
        "code": "JMD",
        "name": "Jamaican dollar"
    },
    {
        "code": "JOD",
        "name": "Jordanian dinar"
    },
    {
        "code": "JPY",
        "name": "Japanese yen"
    },
    {
        "code": "KES",
        "name": "Kenyan shilling"
    },
    {
        "code": "KGS",
        "name": "Kyrgyzstani som"
    },
    {
        "code": "KHR",
        "name": "Cambodian riel"
    },
    {
        "code": "KMF",
        "name": "Comoro franc"
    },
    {
        "code": "KRW",
        "name": "South Korean won"
    },
    {
        "code": "KWD",
        "name": "Kuwaiti dinar"
    },
    {
        "code": "KZT",
        "name": "Kazakhstani tenge"
    },
    {
        "code": "LAK",
        "name": "Lao kip"
    },
    {
        "code": "LBP",
        "name": "Lebanese pound"
    },
    {
        "code": "LKR",
        "name": "Sri Lankan rupee"
    },
    {
        "code": "LRD",
        "name": "Liberian dollar"
    },
    {
        "code": "LSL",
        "name": "Lesotho loti"
    },
    {
        "code": "LYD",
        "name": "Libyan dinar"
    },
    {
        "code": "MAD",
        "name": "Moroccan dirham"
    },
    {
        "code": "MDL",
        "name": "Moldovan leu"
    },
    {
        "code": "MGA",
        "name": "Malagasy ariary"
    },
    {
        "code": "MKD",
        "name": "Macedonian denar"
    },
    {
        "code": "MMK",
        "name": "Myanmar kyat"
    },
    {
        "code": "MNT",
        "name": "Mongolian tögrög"
    },
    {
        "code": "MOP",
        "name": "Macanese pataca"
    },
    {
        "code": "MRU",
        "name": "Mauritanian ouguiya"
    },
    {
        "code": "MUR",
        "name": "Mauritian rupee"
    },
    {
        "code": "MVR",
        "name": "Maldivian rufiyaa"
    },
    {
        "code": "MWK",
        "name": "Malawian kwacha"
    },
    {
        "code": "MXN",
        "name": "Mexican peso"
    },
    {
        "code": "MYR",
        "name": "Malaysian ringgit"
    },
    {
        "code": "MZN",
        "name": "Mozambican metical"
    },
    {
        "code": "NAD",
        "name": "Namibian dollar"
    },
    {
        "code": "NGN",
        "name": "Nigerian naira"
    },
    {
        "code": "NIO",
        "name": "Nicaraguan córdoba"
    },
    {
        "code": "NOK",
        "name": "Norwegian krone"
    },
    {
        "code": "NPR",
        "name": "Nepalese rupee"
    },
    {
        "code": "NZD",
        "name": "New Zealand dollar"
    },
    {
        "code": "OMR",
        "name": "Omani rial"
    },
    {
        "code": "PAB",
        "name": "Panamanian balboa"
    },
    {
        "code": "PEN",
        "name": "Peruvian sol"
    },
    {
        "code": "PGK",
        "name": "Papua New Guinean kina"
    },
    {
        "code": "PHP",
        "name": "Philippine peso"
    },
    {
        "code": "PKR",
        "name": "Pakistani rupee"
    },
    {
        "code": "PLN",
        "name": "Polish złoty"
    },
    {
        "code": "PYG",
        "name": "Paraguayan guaraní"
    },
    {
        "code": "QAR",
        "name": "Qatari riyal"
    },
    {
        "code": "RON",
        "name": "Romanian leu"
    },
    {
        "code": "RSD",
        "name": "Serbian dinar"
    },
    {
        "code": "RUB",
        "name": "Russian ruble"
    },
    {
        "code": "RWF",
        "name": "Rwandan franc"
    },
    {
        "code": "SAR",
        "name": "Saudi riyal"
    },
    {
        "code": "SBD",
        "name": "Solomon Islands dollar"
    },
    {
        "code": "SCR",
        "name": "Seychelles rupee"
    },
    {
        "code": "SDG",
        "name": "Sudanese pound"
    },
    {
        "code": "SEK",
        "name": "Swedish krona/kronor"
    },
    {
        "code": "SGD",
        "name": "Singapore dollar"
    },
    {
        "code": "SLE",
        "name": "Sierra Leonean leone"
    },
    {
        "code": "SOS",
        "name": "Somali shilling"
    },
    {
        "code": "SRD",
        "name": "Surinamese dollar"
    },
    {
        "code": "SSP",
        "name": "South Sudanese pound"
    },
    {
        "code": "STN",
        "name": "São Tomé and Príncipe dobra"
    },
    {
        "code": "SVC",
        "name": "Salvadoran colón"
    },
    {
        "code": "SYP",
        "name": "Syrian pound"
    },
    {
        "code": "SZL",
        "name": "Swazi lilangeni"
    },
    {
        "code": "THB",
        "name": "Thai baht"
    },
    {
        "code": "TJS",
        "name": "Tajikistani somoni"
    },
    {
        "code": "TMT",
        "name": "Turkmenistan manat"
    },
    {
        "code": "TND",
        "name": "Tunisian dinar"
    },
    {
        "code": "TOP",
        "name": "Tongan paanga"
    },
    {
        "code": "TRY",
        "name": "Turkish lira"
    },
    {
        "code": "TTD",
        "name": "Trinidad and Tobago dollar"
    },
    {
        "code": "TWD",
        "name": "New Taiwan dollar"
    },
    {
        "code": "TZS",
        "name": "Tanzanian shilling"
    },
    {
        "code": "UAH",
        "name": "Ukrainian hryvnia"
    },
    {
        "code": "UGX",
        "name": "Ugandan shilling"
    },
    {
        "code": "USD",
        "name": "United States dollar"
    },
    {
        "code": "UYU",
        "name": "Uruguayan peso"
    },
    {
        "code": "UZS",
        "name": "Uzbekistan som"
    },
    {
        "code": "VES",
        "name": "Venezuelan bolívar soberano"
    },
    {
        "code": "VND",
        "name": "Vietnamese đồng"
    },
    {
        "code": "VUV",
        "name": "Vanuatu vatu"
    },
    {
        "code": "WST",
        "name": "Samoan tala"
    },
    {
        "code": "XAF",
        "name": "CFA franc BEAC"
    },
    {
        "code": "XAU",
        "name": "Gold (one troy ounce)"
    },
    {
        "code": "XCD",
        "name": "East Caribbean dollar"
    },
    {
        "code": "XDR",
        "name": "Special drawing rights  International Moneta"
    },
    {
        "code": "XOF",
        "name": "CFA franc BCEAO"
    },
    {
        "code": "XPF",
        "name": "CFP franc (franc Pacifique)"
    },
    {
        "code": "YER",
        "name": "Yemeni rial"
    },
    {
        "code": "ZAR",
        "name": "South African rand"
    },
    {
        "code": "ZMW",
        "name": "Zambian kwacha"
    },
    {
        "code": "ZWL",
        "name": "Zimbabwean dollar"
    }
];

const CURRENCIES_CODES = CURRENCIES.map(({ code }) => code); 

const currencyCodeSchema = z.string().refine(s => CURRENCIES_CODES.includes(s), { message: 'Invalid currency code' });

const getRandomCurrency = () => CURRENCIES[Math.floor(Math.random() * CURRENCIES.length)];

const findName = (code: string) => CURRENCIES.find((currency) => currency.code === code)?.name;

export default CURRENCIES;
export { CURRENCIES, CURRENCIES_CODES, currencyCodeSchema, getRandomCurrency, findName };