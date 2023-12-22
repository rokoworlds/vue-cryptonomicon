const API_KEY = '6ad143f5e897da3cbdfaccb63647a2b2192b4849cc37d69ce7ba61dac5fb6662'

const tickersHandlers = new Map();

// TODO: refactor to use URLSearchParams
export const loadTickers = () => {
    if (tickersHandlers.size === 0) {return};
    fetch(
        `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${[...tickersHandlers.keys()].join(',')}&tsyms=USD&api_key=${API_KEY}`
        )
        .then(response => response.json())
        .then(rawData => {
            const updatedPrices = Object.fromEntries(
                Object.entries(rawData).map(([key, value]) => [key, value.USD])
            )

            Object.entries(updatedPrices).forEach(([currency, newPrise]) => {
                const handlers = tickersHandlers.get(currency) ?? [];
            })
            
        });}

export const subscribeToTicker = (ticker, cb) => {
    const subscribers = tickersHandlers.get(ticker) || [];
    tickersHandlers.set(ticker, [...subscribers, cb]);
};

export const unsubscribeFromTicker = (ticker) => {
    tickersHandlers.delete(ticker)
};

setInterval(loadTickers, 5000)

window.tickers = tickersHandlers;