import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Container from './Container';
import { colors } from './Variables';

const StyledNavar = styled.div`
  align-items: center;
  display: flex;
  padding: 40px 0;
  .grow {
    flex-grow: 1;
  }
  h3 {
    a {
      color: ${colors.black};
      text-decoration: none;
    }
    font-size: 20px;
    font-weight: 500;
  }
  a {
    color: ${colors.gray};
    text-decoration: none;
    &:hover {
      opacity: .7;
    }
  }
`;

const Navbar = () => (
  <Container>
    <StyledNavar>
      <h3>
        <Link href="/">
          <a>Henry Kaufman</a>
        </Link>
      </h3>
      <div className="grow" />
      <a href="mailto:henry@kaufman.io">henry@kaufman.io</a>
    </StyledNavar>
  </Container>
);

export default Navbar;
