import React from 'react';
import styled from 'styled-components';
import colors from '../../colors.js';

const StyledNav = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${colors.mintgreen};
  width: 100%;
  height: 4rem;
  nav {
    display: flex;
    color: white;
    margin-right: 1rem;
    margin-top: -.5rem;
    h2 {
      display: flex;
      margin-left: 2rem;
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
          color: white;
        }
        a:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

class Navbar extends React.Component {
  render() {
    return (
      <>
        <StyledNav>
          <nav>
            <h2>STOCK TRADER X</h2>
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

export default Navbar;