import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import { colors } from '../Variables';

import Navigation from '../Navigation';
import StyledApp from '../StyledApp';
import Footer from '../Footer';
import Project from './Project';

export default function() {
  return (
    <StyledApp>
      <Navigation />
      <Box py={4}>
        <h1>Product <span>designer</span> and full stack <span>developer</span> from Denver.</h1>
      </Box>
      <Box py={4}>
        <Project
          photo="images/blink-main.svg"
          name="Blink Lending"
          link="/work/blink"
          description="A 21st century online mortgage experience for Canadian citizens."
        />
      </Box>
      <Box py={4}>
        <Project
          photo="images/nexleader-main.svg"
          name="nexleader IPSAT"
          link="/work/ipsat"
          description="Helping people understand their leadership potentials."
          reverse
        />
      </Box>
      <Footer />
    </StyledApp>
  );
}
