import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  loadStocks = (list) => list.map( (stock) => {
    // console.log(stock)
    return <Stock
      clickEvent = {this.props.buyStock}
      key = {stock.id}
      id = {stock.id}
      ticker = {stock.ticker}
      name = {stock.name}
      type = {stock.type}
      price = {stock.price}    
    />

  })

  render() {
    // console.log(this.props.stocks)
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          this.loadStocks(this.props.stocks)
        }
      </div>
    );
  }

}

export default StockContainer;
