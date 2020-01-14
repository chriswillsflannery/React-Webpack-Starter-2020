import React from 'react';
import styled from 'styled-components';
import marketVolume from '../../../marketLogic/marketVolume.json';
import colors from '../../../colors.js';

const StyledStocks = styled.div`
  margin-left: 3rem;
`;

const StyledMTV = styled.div`
  display: flex;
  overflow: scroll;
  div {
    margin-right: 2rem;
  }
`;

class FavoritedStocks extends React.Component {
  constructor() {
    super();

    this.state = {
      marketVolume: []
    }
  }

  componentDidMount() {
    this.setState({
      marketVolume
    })
  }

  render() {
    const mV = this.state.marketVolume.map((el, id) => {
      return (
        <div key={id}>
          <h2 style={{ color: colors.mintgreen }}>{el.mic}</h2>
          <h2>{el.marketPercent}</h2>
        </div>
      )
    })

    return (
      <StyledStocks>
        <h2>Favorited Stocks</h2>
        <hr style={{ width: '50%', marginLeft: 0 }} />
        <StyledMTV>
          {mV}
        </StyledMTV>
      </StyledStocks>
    )
  }
}

export default FavoritedStocks;