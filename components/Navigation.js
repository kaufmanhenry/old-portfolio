import React from 'react';
import styled from 'styled-components';
import { colors } from './Variables';

const StyledNav = styled.div`
  display: flex;
  align-items: center;
  h3 {
    color: ${colors.black};
    font-size: 20px;
    font-weight: 400;
  }
  .grow {
    flex-grow: 1;
  }
  a {
    color: ${colors.gray};
    text-decoration: none;
    transition: opacity .15s ease-in;
    &:hover {
      opacity: .5;
    }
  }
`;

const Nav = () => (
  <StyledNav>
    <div className="grow" />
    <a href="mailto:henry@kaufman.io">contact</a>
  </StyledNav>
);

export default Nav;
