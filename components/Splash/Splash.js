import React from 'react';
import styled from 'styled-components';
import colors from '../../colors.js';
import getCurrentTime from '../../marketLogic/getCurrentTime';
import MarketTradingVolume from './Markets/MarketTradingVolume';
import FavoritedStocks from './Markets/FavoritedStocks';
import StockBySymbol from './Markets/StockBySymbol';

const StyledSplash = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledMain = styled.main`
  width: 90%;
  height: 60rem;
  border: 1px solid ${colors.mintgreen};
  background-color: ${colors.businessgrey};
  margin-top: 5rem;
  box-shadow: 5px 10px 5px ${colors.businessgrey};
`;

const StyledTime = styled.div`
  display: flex;
  margin-left: 2rem;
  h4 {
    margin: 1rem;
  }
`;

const StyledFavorites = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3rem;
  p {
    margin: 0 1rem;
  }
`;

class Splash extends React.Component {
  constructor() {
    super();

    this.state = {
      currentTime: null,
      currentHour: null,
      currentMinute: null,
      marketOpen: null,
      favorites: []
    }

    this.handleAddToFavorites = this.handleAddToFavorites.bind(this);
  }

  componentDidMount() {
    let currentTime = getCurrentTime();
    let currentHour = +(currentTime.slice(0, 2));
    let currentMinute = +(currentTime.slice(3, 5));
    let ampm;
    let hour;
    if (currentHour > 12) {
      ampm = 'pm';
      hour = currentHour - 12;
    } else {
      ampm = 'am';
      hour = currentHour;
    }

    let marketOpen;

    // I think this should actually be up to 4:30 for closing bell
    if (hour > 9 && ampm === 'am' || hour < 5 && ampm === 'pm') {
      marketOpen = 'open';
    } else {
      marketOpen = 'closed';
    }

    this.setState({
      currentTime, currentHour, currentMinute, marketOpen
    })
  }

  handleAddToFavorites(val) {
    this.setState(prevState => {
      prevState.favorites.push(val);
      return prevState;
    })
  }

  render() {

    const favorites = this.state.favorites.map((el, id) => {
      return <p key={id}>{el}</p>
    })

    console.log('marketopen', this.state.marketOpen);

    return (
      <StyledSplash>
        <StyledMain>
          <StyledTime>
            <h4>Current time: {this.state.currentHour > 12 ? this.state.currentHour - 12 : this.state.currentHour}:{this.state.currentMinute}</h4>
            <h4 style={{ color: this.state.marketOpen === 'open' ? 'green' : 'red' }}>Market is: {this.state.marketOpen}</h4>
          </StyledTime>
          <MarketTradingVolume />
          <FavoritedStocks />
          <StockBySymbol favorites={this.handleAddToFavorites} />
          <StyledFavorites>
            <h4>Favorites:</h4>
            {favorites}
          </StyledFavorites>
        </StyledMain>
      </StyledSplash>
    )
  }
}

export default Splash;