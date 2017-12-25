import React from 'react';
import { Flex, Box } from 'grid-styled';

import StyledApp, { SubText, Container } from '../components/StyledApp';
import Navigation from '../components/Navigation';
import PanelContainer, { TextContainer } from '../components/PanelContainer';
import Introduction from '../components/Introduction';
import Footer from '../components/Footer';

export default function () {
  return (
    <div>
      <StyledApp>
        <Navigation />
        <Box py={4}>
          <h1>Blink Mortgage</h1>
          <SubText>Blink Mortgage is a 21st century Canadian mortgage company dedicated to providing fast, simple mortgages.</SubText>
        </Box>
        <Introduction
          desc="Blink Mortgage is an emerging mortgage company based out of Calgary Canada focused on providing its users with a better way to get a mortgage in Canada. I worked on the design for both the borrower and broker sides of the application."
          skills={["Full Stack Development", "UI/UX Design"]}
        />
      </StyledApp>
      <Box>
        <PanelContainer
          direction="full"
          image="../images/blink-main.svg"
          header="A redesigned application experience"
          text="When most people think of mortgage applications, they typically think of boring, clunky, slow apps. I worked with Blink to ensure the opposite of that and provide its users with a simple design that communicates clear intentions."
        />
        <PanelContainer
          direction="left"
          image="../images/blink-broker.png"
          header="Broker Interface"
          text="When building an interface for the broker to use, we wanted to ensure that clarity to make a correct borrower deal decision drove the process. To do this, we kept the design simple and used varying typographic styles to define elements."
        />
        <Container>
          <Flex wrap mx={-2} my={3}>
            <Box w={[1, 1/3]} px={2} my={3}>
              <TextContainer left>
                <h3>Lending Interface</h3>
                <p>Along with borrowers, documents, and approvals is the lending interface that gives brokers the opportunity to design bids and lenders and then use those bids to create customer reports.</p>
              </TextContainer>
            </Box>
            <Box w={[1, 1/3]} px={2} my={3}>
              <TextContainer left>
                <h3>Customer Report</h3>
                <p>Customer reports is an important part of the interface that was designed. They were often the first part of Blink Mortgage they saw and we wanted to make sure we made a good impression initially.</p>
              </TextContainer>
            </Box>
            <Box w={[1, 1/3]} px={2} my={3}>
              <TextContainer left>
                <h3>Simple Sign Up</h3>
                <p>Many online mortgage solutions have cumbersome designs, especially when it comes to the intial sign up. They often require many different fields just to sign up. We require just a name, email, and password.</p>
              </TextContainer>
            </Box>
          </Flex>
        </Container>
        <PanelContainer
          direction="right"
          image="../images/blink-approval.png"
          header="Borrower Approval"
          text="The admin interface used in the Blink portal was a critical element to the design, that we worked countless iterations on. We wanted to provide brokers with a simple experience for approving new applicants without hassle."
        />
      </Box>
      <StyledApp>
        <Footer />
      </StyledApp>
    </div>
  );
}