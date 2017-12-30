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
          <h1>nexleader IPSAT</h1>
          <SubText>nexleader IPSAT is a user management tool that helps people understand and utilize their passions.</SubText>
        </Box>
        <Introduction
          desc="nexleader IPSAT is an online platform for religious, church-related groups to foster both leadership and spritual development in a community way. The platform helps mentor people through sessions and coaching among the community."
          skills={['Full Stack Development', 'UI/UX Design']}
        />
      </StyledApp>
      <Box>
        <PanelContainer
          direction="full"
          image="/static/images/nexleader-assessment.png"
          header="nexleader IPSAT Assessment"
          text="The main nexleader IPSAT assessment is at the core of the web application. While designing, I focused on simplicity, as I didn’t want the user to get distracted, but instead be able to just focus on the application one step at a time."
        />
        <PanelContainer
          direction="left"
          image="/static/images/nexleader-groups.png"
          header="User Management"
          text="A large part of ensuring the application flows smoothly, is managing users both through groups and inviting new users to onboard. With so many users to manage, it was important to make sure that the design was clear and concise."
        />
        <Container>
          <Flex wrap mx={-2} my={3}>
            <Box w={[1, 1 / 3]} px={2} my={3}>
              <TextContainer left>
                <h3>Session Scheduling</h3>
                <p>Scheduling sessions for users was a critical component to leadership growth for participants. When designing the session scheduling component, I focused on communicating dates and times across time zones effectively.</p>
              </TextContainer>
            </Box>
            <Box w={[1, 1 / 3]} px={2} my={3}>
              <TextContainer left>
                <h3>IPSAT Report</h3>
                <p>Coupled with the IPSAT assessment is the report, where participants can reflect on data from their assessment. The report was designed in a way that not only shows all the data necessary, but also in an inviting manner.</p>
              </TextContainer>
            </Box>
            <Box w={[1, 1 / 3]} px={2} my={3}>
              <TextContainer left>
                <h3>Team Report</h3>
                <p>The team IPSAT report is designed to help teams understand where they are at with their leadership. This involved a lot of data handling, so the design for this page was very delicate and had to be done thoughtfully.</p>
              </TextContainer>
            </Box>
          </Flex>
        </Container>
        <PanelContainer
          direction="right"
          image="/static/images/nexleader-onboarding.png"
          header="Onboarding Experience"
          text="An important part of the IPSAT experience, is the onboarding included when a user signs up for the app. This was not an original part, but one that I found was equally as important as any other to ensure clarity while signing up."
        />
      </Box>
      <StyledApp>
        <Footer />
      </StyledApp>
    </div>
  );
}
