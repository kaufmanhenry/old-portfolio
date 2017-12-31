import React from 'react';
import { Flex, Box } from 'grid-styled';

import Head from '../components/Head';
import Navigation from '../components/Navigation';
import StyledApp from '../components/StyledApp';
import Footer from '../components/Footer';
import Project from '../components/Project';
import { TextContainer } from '../components/PanelContainer';

export default () => (
  <StyledApp>
    <Head />
    <Navigation />
    <Box py={4}>
      <h1>I <span>design</span> and <span>develop</span> websites that help startups launch.</h1>
    </Box>
    <Box py={4}>
      <Project
        photo="static/images/blink-main.svg"
        name="Blink Lending"
        link="/blink"
        description="A 21st century online mortgage experience for Canadian citizens."
      />
    </Box>
    <Box py={4}>
      <Project
        photo="static/images/nexleader-main.svg"
        name="nexleader IPSAT"
        link="/ipsat"
        description="Helping people understand their leadership potentials."
        reverse
      />
    </Box>
    <Box py={4}>
      <Box mb={3}>
        <h2>Other Projects</h2>
      </Box>
      <Flex wrap mx={-2}>
        <Box w={[1, 1 / 3]} px={2}>
          <TextContainer left>
            <h3>Sponta</h3>
            <Box mb={2}>
              <p>Sponta is an app that lets you broadcast relevant push notifications to the right people.</p>
            </Box>
            <a href="http://sponta.co" target="_blank">View Site</a>
          </TextContainer>
        </Box>
        <Box w={[1, 1 / 3]} px={2}>
          <TextContainer left>
            <h3>tragedy.party</h3>
            <Box mb={2}>
              <p>Learn about the history of tragedy, how it has changed over time, and its influence.</p>
            </Box>
            <a href="http://tragedy.party" target="_blank">View Site</a>
          </TextContainer>
        </Box>
        <Box w={[1, 1 / 3]} px={2} mb={3}>
          <TextContainer left>
            <h3>intrn</h3>
            <Box mb={2}>
              <p>Getting an internship at a startup is hard. Here{"'"}s an easy way.</p>
            </Box>
            <a href>Coming Soon</a>
          </TextContainer>
        </Box>
      </Flex>
    </Box>
    <Footer />
  </StyledApp>
);
