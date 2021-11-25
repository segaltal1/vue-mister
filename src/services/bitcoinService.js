import axios from "axios"
import { DbService } from "./db-service"


export const bitcoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions,
}

async function getRate() {
    const API_URL = 'https://blockchain.info/tobtc?currency=USD&value=1'
    try {
        const { data } = await axios.get(API_URL)
        return data
    } catch (error) {
        console.log('Cannot Get Data');
    }
}

async function getMarketPrice() {
    const API_KEY = 'https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true';
    const DB_KEY = 'marketPrice';
    
    var marketPrice = await DbService.query(DB_KEY);
    if (!marketPrice || !marketPrice.length) {
        const res = await axios.get(API_KEY)
        await DbService.insert(DB_KEY, res.data);
        marketPrice = res.data
        return marketPrice
    }
    else {
        return marketPrice[0]
    }
    
    
}

async function getConfirmedTransactions() {
    const API_KEY = 'https://api.blockchain.info/charts/trade-volume?timespan=1months&format=json&cors=true';
    const DB_KEY = 'transactions';

    var transactions = await DbService.query(DB_KEY);
    if (!transactions || !transactions.length) {
        const res = await axios.get(API_KEY)
        await DbService.insert(DB_KEY, res.data);
        transactions = res.data
        return transactions
    }
    else {
        return transactions[0]
    }
}

