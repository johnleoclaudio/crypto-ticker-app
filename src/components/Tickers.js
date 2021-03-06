import React, { Component } from 'react';
import './Tickers.css';
import Cryptocurrency from './Cryptocurrency';
import axios from 'axios';

class Tickers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: "bitcoin",
                    name: "Bitcoin",
                    symbol: "BTC",
                    price_usd: "1",
                },
                {
                    id: "ethereum",
                    name: "Ethereum",
                    symbol: "ETH",
                    price_usd: "1",
                },
                {
                    id: "litecoin",
                    name: "Litecoin",
                    symbol: "LTC",
                    price_usd: "1",
                }
            ]
        };
    }

    fetchCryptocurrencyData() {
        axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=10")
            .then( response => {
                const wanted = ['bitcoin', 'ethereum', 'litecoin'];
                const result = response.data.filter( currency => wanted.includes(currency.id));
                this.setState({ data: result });
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.fetchCryptocurrencyData();
        this.interval = setInterval(() => this.fetchCryptocurrencyData(), 10 * 1000);
    }

    render() {
        const tickers = this.state.data.map((currency)=>
            <Cryptocurrency data={currency} key={currency.id}/>
        );

        return(
            <div className="tickers-container">
                <ul className="tickers">{tickers}</ul>
                <p>Information updates every 10 seconds courtesy of coinmarketcap.com</p>
            </div>
        );
    }
}

export default Tickers;