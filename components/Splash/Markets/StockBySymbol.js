import React from 'react';
import styled from 'styled-components';
import colors from '../../../colors.js';

const StyledStock = styled.div`
  margin-left: 3rem;
  form {
    input {
      padding: 1rem 3rem;
      margin-right: 1rem;
      border-radius: 6px;
      font-size: 1rem;
    }
    #submit {
      background-color: ${colors.mintgreen};
      color: white;
    }
    #submit:hover {
      background-color: ${colors.hovergreen};
      cursor: pointer;
    }
  }
  #favorites {
    padding: 1rem 3rem;
    border-radius: 6px;
    font-size: 1rem;
    background-color: ${colors.mintgreen};
      color: white;
  }
`;

class StockBySymbol extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      submitted: false,
      stockData: {
        symbol: null,
        name: null,
        price: null,
        dailyChange: null,
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    // window.open(`currentStock?${this.state.inputValue}`, '_blank');

    let stockData;
    fetch(`https://api.worldtradingdata.com/api/v1/stock?symbol=${this.state.inputValue}&api_token=yIIJ4otbs9TR6nGsX2zFfHTrBuQ9TUhVcMEmaOYHQoPgQn6n0vy6T2OTIt8U`)
      .then(res => {
        console.log('res', res);
        return res.json();
      })
      .then(res2 => {
        console.log(res2.data);
        const data = res2.data[0];
        this.setState({
          submitted: true,
          stockData: {
            symbol: data.symbol,
            name: data.name,
            price: data.price,
            dailyChange: data.day_change,
          }
        })
      })
      .catch(err => {
        console.log('err:', err.stack);
      })
  }

  render(props) {
    return (
      <StyledStock>
        <h2>Stock By Symbol</h2>
        <hr style={{ width: '50%', marginLeft: 0 }} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="search" value={this.state.inputValue}></input>
          <input id="submit" type="submit"></input>
        </form>
        {this.state.submitted && (
          <>
            <h2>{this.state.stockData.symbol}</h2>
            <h4>{this.state.stockData.name}</h4>
            <h4 style={{ color: 'green' }}>Current Price: {this.state.stockData.price}</h4>
            <h4 style={{ color: Math.sign(this.state.stockData.dailyChange) === 1 ? 'green' : 'red' }}>Daily Change: {this.state.stockData.dailyChange}</h4>
            <button id="favorites" onClick={() => this.props.favorites(this.state.stockData.symbol)}>Add to favorites</button>
          </>
        )}
      </StyledStock>
    )
  }
}

export default StockBySymbol;