const API_KEY = '6ad143f5e897da3cbdfaccb63647a2b2192b4849cc37d69ce7ba61dac5fb6662'

const tickers = new Map();

// TODO: refactor to use URLSearchParams
export const loadTickers = tickers =>
    fetch(
        `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${tickers.join(',')}&tsyms=USD&api_key=${API_KEY}`
        )
        .then(response => response.json())
        .then(rawData => 
            Object.fromEntries(
                Object.entries(rawData).map(([key, value]) => [key, value.USD])
            ));

export const subscribeToTicker = (ticker, cb) => {
    if (!tickers.has(ticker)) {
        tickers.set(ticker);
    }
}