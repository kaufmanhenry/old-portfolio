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
    <Box py={4} mt={4}>
      <h1>I <span>design</span> and <span>develop</span> websites that help startups launch.</h1>
    </Box>
    <Flex py={4} mx={-2} wrap>
      <Box w={[1, 1 / 2]} px={2} mb={4}>
        <Project
          photo="static/images/blink-main.svg"
          name="Blink Mortgage"
          link="/blink"
          description="A 21st century Canadian mortgage company dedicated to providing fast, simple mortgages."
        />
      </Box>
      <Box w={[1, 1 / 2]} px={2}>
        <Project
          photo="static/images/nexleader-main.svg"
          name="nexleader IPSAT"
          link="/ipsat"
          description="A user management tool that helps people understand and utilize their passions."
          reverse
        />
      </Box>
    </Flex>
    <Box py={4}>
      <Box mb={3}>
        <h2>Other Projects</h2>
      </Box>
      <Flex wrap mx={-2}>
        <Box w={[1, 1 / 3]} px={2} mb={3}>
          <TextContainer left>
            <h3>Sponta</h3>
            <Box mb={2}>
              <p>Sponta is an app that lets you broadcast relevant push notifications to the right people.</p>
            </Box>
            <a href="http://sponta.co" target="_blank">View Site</a>
          </TextContainer>
        </Box>
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
