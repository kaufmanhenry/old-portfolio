import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import { colors } from './Variables';

import Navigation from './Navigation';
import Project from './Project';
import Footer from './Footer';

const StyledApp = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 80px 0;
  width: 90%;

  h1 {
    color: ${colors.black};
    font-size: 40px;
    font-weight: 400;
    line-height: 1.5;
    padding: 100px 0;
    max-width: 640px;
    span {
      color: ${colors.blue};
    }
  }
`;

export default function() {
  return (
    <StyledApp>
      <Navigation />
      <h1>Product <span>designer</span> and full stack <span>developer</span> from Denver.</h1>
      <Box py={4}>
        <Project
          photo="images/blink-main.svg"
          name="Blink Lending"
          link="http://blinklending.ca"
          description="A 21st century online mortgage experience for Canadian citizens."
        />
      </Box>
      <Box py={4}>
        <Project
          photo="images/nexleader-main.svg"
          name="nexleader IPSAT"
          link="http://myipsat.com"
          description="Helping people understand their leadership potentials."
          reverse
        />
      </Box>
      <Footer />
    </StyledApp>
  );
}
