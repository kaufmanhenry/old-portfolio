import React from 'react';
import styled from 'styled-components';

import { colors } from './Variables';

import Head from './Head';

import Navigation from './Navigation';

const StyledApp = styled.div`
  margin: 0 auto;
  max-width: 640px;
  padding: 80px 0;
  width: 90%;

  h1 {
    color: ${colors.black};
    font-size: 40px;
    font-weight: 400;
    line-height: 1.5;
    padding: 100px 0;
  }
`;

export default function() {
  return (
    <StyledApp>
      <Head />
      <Navigation />
      <h1>
        Product designer and full stack developer from Denver.
      </h1>
    </StyledApp>
  );
}
