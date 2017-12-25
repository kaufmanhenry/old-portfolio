import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from 'grid-styled';

import Navigation from './components/Navigation';
import StyledApp, { NiceLink } from './components/StyledApp';
import Footer from './components/Footer';

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
