const API_KEY = '6ad143f5e897da3cbdfaccb63647a2b2192b4849cc37d69ce7ba61dac5fb6662'

// TODO: refactor to use URLSearchParams
export const loadTicker = tickerName =>
    fetch(
        `https://min-api.cryptocompare.com/data/price?fsym=${tickerName}&tsyms=USD&api_key=${API_KEY}`
        ).then(r => r.json());