import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  loadStocks = (list) => list.map( (stock) => {
    // console.log(stock)
    return <Stock
      clickEvent = {this.props.sellStock}
      key = {stock.id}
      id = {stock.id}
      ticker = {stock.ticker}
      name = {stock.name}
      type = {stock.type}
      price = {stock.price}    
    />

  })

  render() {
    console.dir(this.props.portfolio)
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            this.loadStocks(this.props.portfolio)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
 