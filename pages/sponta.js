import React from 'react';
import { Flex, Box } from 'grid-styled';

import Head from '../components/Head';
import StyledApp, { SubText, Container } from '../components/StyledApp';
import Navigation from '../components/Navigation';
import PanelContainer, { TextContainer } from '../components/PanelContainer';
import Introduction from '../components/Introduction';
import Footer from '../components/Footer';

export default function () {
  return (
    <div>
      <Head />
      <StyledApp>
        <Navigation />
        <Box py={4}>
          <h1>Sponta</h1>
          <SubText>Sponta aims to provide small groups a way of communication through a simple application interface.</SubText>
        </Box>
        <Introduction
          desc="After working on intrn with Daniel Farrell, we decided to collaborate on a new project aimed to help groups of the University of Denver communicate with their group members. I worked on designing the web interface along with building it."
          skills={['Full Stack Development', 'UI/UX Design']}
        />
      </StyledApp>
      <Box>
        <PanelContainer
          direction="full"
          image="/static/images/sponta-dashboard.svg"
          header="A Friendly Interface"
          text="I focused on creating a fun interface that would invite users into it, and in return have them create new “pushes” for their channels. The two sections divided the content well and provided the user with an overview of what’s going on."
        />
        <PanelContainer
          direction="left"
          image="/static/images/sponta-create.svg"
          header="Create a Channel"
          text="The create a channel page had to keep the fun, lively personality of the website, so I used vibrant colors and bold text to convey this. The create a channel page followed the style of large, round text and a bold style."
        />
        <Container>
          <Flex wrap mx={-2} my={3}>
            <Box w={[1, 1 / 3]} px={2} my={3}>
              <TextContainer left>
                <h3>Change Channel</h3>
                <p>A large portion of the application was providing the ability for a user to change the current channel their viewing, as many group admins had multiple groups. I controlled this change through a simple dropdown.</p>
              </TextContainer>
            </Box>
            <Box w={[1, 1 / 3]} px={2} my={3}>
              <TextContainer left>
                <h3>Fun Copy</h3>
                <p>Incredibly important to the application was building fun, flexible copy that kept the user enthralled, but also clearly conveyed what was requested. Phrases like “Bad memory, eh?” kept the personality vibrant for more dull pages.</p>
              </TextContainer>
            </Box>
            <Box w={[1, 1 / 3]} px={2} my={3}>
              <TextContainer left>
                <h3>Mission Control</h3>
                <p>A feature that was in the works for many hours is the mission control page that allows users to view statistics for all of their groups in one place, yet keeping it simple enough to glance at and recognize trends.</p>
              </TextContainer>
            </Box>
          </Flex>
        </Container>
      </Box>
      <StyledApp>
        <Footer />
      </StyledApp>
    </div>
  );
}
