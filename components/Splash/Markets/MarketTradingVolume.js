import React from 'react';
import marketVolume from '../../../marketLogic/marketVolume.json';
import styled from 'styled-components';
import colors from '../../../colors.js';

const StyledMTVwrapper = styled.div`
  margin-left: 3rem;
`;

const StyledMTV = styled.div`
  display: flex;
  overflow: scroll;
  div {
    margin-right: 2rem;
  }
`;

class MarketTradingVolume extends React.Component {
  constructor() {
    super();

    this.state = {
      marketVolume: []
    }
  }

  componentDidMount() {

    //throws 402 'payment required' error so I will use dummy data
    fetch('https://cloud.iexapis.com/stable/stock/market/volume?token=pk_fe5accdfe8df4bd193370f7a6b115621&period=annual')
      .then(res => {
        // console.log('res', res);
        this.setState({
          marketVolume
        })
      })
      .catch(err => {
        console.log('err :', err.stack)
      });
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
      <StyledMTVwrapper>
        <h2>Market Trading Volume</h2>
        <hr style={{ width: '50%', marginLeft: 0 }} />
        <StyledMTV>
          {mV}
        </StyledMTV>
      </StyledMTVwrapper>
    )
  }
}

export default MarketTradingVolume;