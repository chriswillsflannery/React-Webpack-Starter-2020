import React from 'react';
import styled from 'styled-components';
import colors from '../../colors.js';

const StyledNav = styled.header`
  background-color: ${colors.businessgrey};
  width: 100%;
  height: 8rem;
  margin-top: 2rem;
  nav {
    display: flex;
    color: black;
    margin-right: 1rem;
    margin-top: -.5rem;
    div {
      margin-left: 2rem;
    }
    h2 {
      display: flex;
      align-items: center;
      width: 50rem;
    }
    ul {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      li {
        list-style-type: none;
        margin: 1rem;
        text-transform: uppercase;
        a {
          text-decoration: none;
          color: black;
        }
      }
    }
  }
`;

class Footer extends React.Component {
  render() {
    return (
      <>
        <StyledNav>
          <nav>
            <div>
              <h2>STOCK TRADER X</h2>
              <p>A platform for stock trading by traders.</p>
            </div>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Team</a></li>
            </ul>
          </nav>
        </StyledNav>
      </>
    )
  }
}

export default Footer;