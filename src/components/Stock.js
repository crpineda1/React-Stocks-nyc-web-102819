import React from 'react'

const Stock = (props) => (
  <div>

    <div className="card" onClick = {(event) => {props.clickEvent(event.target)}}>
      <div id= {props.id} className="card-body">
        <h5 id= {props.id} className="card-title">{
          //Company Name
          props.name
        }</h5>
        <p  id= {props.id} className="card-text">{
          //ticker: stock price
          props.ticker}:{props.price
        }</p>
      </div>
    </div>


  </div>
);

export default Stock
