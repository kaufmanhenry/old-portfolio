import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from 'grid-styled';

import Navigation from './Navigation';
import StyledApp, { NiceLink } from './StyledApp';
import Footer from './Footer';

const NoMatch = () => (
  <StyledApp>
    <Navigation />
    <Box py={4}>
      <h1>This page doesn't exist.</h1>
      <br />
      <NiceLink to="/">Head Home</NiceLink>
    </Box>
    <Footer />
  </StyledApp>
);

export default NoMatch;
