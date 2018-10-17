import React from 'react';
import { Flex, Box } from 'grid-styled';

import Head from '../components/Head';
import StyledApp from '../components/StyledApp';
import Footer from '../components/Footer';
import Project from '../components/Project';
import Contact from '../components/Contact';
import { TextContainer } from '../components/PanelContainer';

export default () => (
  <StyledApp>
    <Head />
    <Box my={4} pb={4}>
      <Contact />
      <h1>Henry Kaufman is a <span>designer</span> and <span>developer</span> in Boston focused on creating intuitive interfaces.</h1>
    </Box>
    <Box mb={4}>
      <Project
        photo="static/images/blink-main.svg"
        name="Blink Mortgage"
        link="/blink"
        description="A 21st century Canadian mortgage company dedicated to providing fast, simple mortgages."
      />
    </Box>
    <Box mb={4}>
      <Project
        photo="static/images/nexleader-main.svg"
        name="nexleader IPSAT"
        link="/ipsat"
        description="A user management tool that helps people understand and utilize their passions."
        reverse
      />
    </Box>
    <Box mb={4}>
      <Project
        photo="static/images/sponta-dashboard.svg"
        name="Sponta"
        link="/sponta"
        description="Aiming to provide small groups a way of communication through a simple application interface."
        reverse
      />
    </Box>
    <Box mb={4}>
      <Project
        photo="static/images/blade-create.svg"
        name="Blade Signatures"
        link="/blade"
        description="A simple way to create simple, beautiful signatures for Gmail all inside of Chrome."
      />
    </Box>
    <Box py={4}>
      <Box mb={3}>
        <h2>Other Projects</h2>
      </Box>
      <Flex wrap mx={-2}>
        <Box w={[1, 1 / 3]} px={2} mb={3}>
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
            <h3>designBase</h3>
            <Box mb={2}>
              <p>Build user interfaces and export them to your favorite framework.</p>
            </Box>
            <a href>Coming Soon</a>
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
