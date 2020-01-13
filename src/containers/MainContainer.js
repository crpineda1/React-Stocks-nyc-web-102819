import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {


  state = {
    stocks: [],
    stockList: [],
    myPortfolio: [],
    filter: 'none',
    sortBy: 'none'
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(data => {
      console.dir(data)

      this.setState({
        stocks: data,
        stockList: data
      })

    })
  }

  componentDidUpdate(prevProps,prevState) {
    console.log("prev portfolio", prevState.myPortfolio)
    console.log("new portfolio", this.state.myPortfolio)
    console.log("prev filter", prevState.filter)
    console.log("new filter", this.state.filter)
  }
  
  setSortBy = (target) => {
    // console.log("sort target",target.value)
    let newList = []
    if (target.value === "Alphabetically") {
      newList = this.state.stockList.sort((a,b) => (a.ticker > b.ticker)? 1 : -1)
    }else{
      newList = this.state.stockList.sort((a,b) => (a.price < b.price)? 1 : -1)
    }
    
    this.setState({
      sortBy: target.value,
      stockList: newList
    })
  }

  setFilter = (target) => {
    console.log("filter target:", target.value)
    let newList = this.state.stocks.filter(stock => stock.type === target.value)

    this.setState({
      filter: target.value,
      stockList: newList
    })
    
  }



  buyStock = (stock) => {
    console.dir("buy stock:", stock.id)

    if (this.state.myPortfolio.some(each => each.id == stock.id)) {

    }else{
      let list = this.state.stocks.filter( each => each.id == stock.id)
      
      console.log("buystock list",list)

      this.setState({
        myPortfolio: [...this.state.myPortfolio,...list]
      })
    }
    
  }

  sellStock = (stock) => {
    console.dir("sell stock:", stock.id)
    let list = this.state.myPortfolio.filter( each => each.id != stock.id)
    
    console.log("remain list",list)

    this.setState({
      myPortfolio: list
    })
    
  }
  
  
  
  
  render() {
    
    console.log("render new portfolio", this.state.myPortfolio)

    return (
      <div>
        <SearchBar setSortBy = {this.setSortBy} setFilter = {this.setFilter}/>

          <div className="row">
            <div className="col-8">
              
              <StockContainer stocks = {this.state.stockList} buyStock = {this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio = {this.state.myPortfolio} sellStock = {this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
 