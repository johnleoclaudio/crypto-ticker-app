import React, { Component } from 'react';
import './Cryptocurrency.css';

class Cryptocurrency extends Component {
    render() {
        let {
            id,
            name,
            symbol,
            price_usd,
        } = this.props.data;

        return (
            <li className={"cryptocurrency " + id}>
                <p className="cryptocurrency-name">{name} ({symbol})</p>
                <h1>${ (+price_usd).toFixed(2) }</h1>
            </li>
        );
    }
}

export default Cryptocurrency;