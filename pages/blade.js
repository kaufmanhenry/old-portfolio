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
          <h1>Blade Signatures</h1>
          <SubText>Blade signatures is a simple way to create simple, beautiful signatures for Gmail all inside of Chrome.</SubText>
        </Box>
        <Introduction
          desc="Jordan Gonen reached out to me one evening about a new project he was working on to make it easier to have beautiful, simple signatures inside of GMail. Over the next few days, I designed a chrome extension that would help users do this."
          skills={['UI/UX Design']}
        />
      </StyledApp>
      <Box>
        <PanelContainer
          direction="full"
          image="/static/images/blade-create.svg"
          header="Create Signature"
          text="Creating new signatures for Blade was the centerpiece of the project and while designing this aspect. I was focused on ensuring that each step of the process was clear and the user was given options and not pigeon-holed."
        />
        <PanelContainer
          direction="left"
          image="/static/images/blade-dashboard.svg"
          header="Dashboard"
          text="I worked on making the dashboard have a simple, focused design for people to get right into writing signatures. I wanted to direct attention to editing a signature, so I made the dashboard a table with a selected signature on the right."
        />
        <Container>
          <Flex wrap mx={-2} my={3}>
            <Box w={[1, 1 / 3]} px={2} my={3}>
              <TextContainer left>
                <h3>Checkout</h3>
                <p>The checkout process was designed to get the user from the free version to the paid version without hassle. We wanted to give incentives for upgrading, so we emphasized the upgrade process along the way.</p>
              </TextContainer>
            </Box>
            <Box w={[1, 1 / 3]} px={2} my={3}>
              <TextContainer left>
                <h3>No Signature State</h3>
                <p>A fun, small element of the chrome extension was building an “empty state” for when the user has not created a signature yet. This small, memorable design increased confidence for users as they upgraded accounts.</p>
              </TextContainer>
            </Box>
            <Box w={[1, 1 / 3]} px={2} my={3}>
              <TextContainer left>
                <h3>Account</h3>
                <p>The account page was designed to give the user easy access into updating their settings and also updating their credit card information if they are a paying member.</p>
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
