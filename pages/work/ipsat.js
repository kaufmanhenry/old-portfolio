import React from 'react';
import { Row, Col } from 'react-grid-system';

import {
  Navbar,
  Container,
  Box,
  Heading1,
  Heading2,
  Paragraph,
  HeadContent,
  Label,
  ImageWithBackground,
  Footer,
  Bottom,
  StyledLink
} from '../../components';

export default () => (
  <div>
    <HeadContent />
    <Navbar />
    <div style={{ backgroundColor: '#ebedf0' }}>
      <Container>
        <Box pt={10} pb={10}>
          <Heading1>
            nexleader IPSAT
          </Heading1>
          <br />
          <Paragraph large>
            A user management tool that helps people understand and utilize their passions.
          </Paragraph>
        </Box>
      </Container>
    </div>
    <Box mt={10} mb={10}>
      <Container>
        <Row>
          <Col sm={4}>
            <Label>Client</Label>
            <Paragraph>nexleader</Paragraph>
            <br />
            <Label>Period</Label>
            <Paragraph>2016-Present</Paragraph>
            <br />
            <Label>Skills</Label>
            <Paragraph>
              UI/UX Design
              <br />
              Full Stack Development
            </Paragraph>
            <br />
            <Label>Worked With</Label>
            <Paragraph>
              <StyledLink href="http://jakebillings.com" target="_blank">Jake Billings</StyledLink>
            </Paragraph>
          </Col>
          <Col sm={8}>
            <Box mb={1}>
              <Heading2>Introduction</Heading2>
            </Box>
            <Paragraph noMaxWidth>
              nexleader IPSAT is an online platform for religious, church-related groups to foster
              both leadership and spritual development in a community way. The platform helps mentor
              people through sessions and coaching among the community.
            </Paragraph>
            <Box mt={10} mb={5}>
              <ImageWithBackground
                imageUrl="/static/ipsat/one.png"
                description="The assessment"
              />
            </Box>
            <Box mb={1}>
              <Heading2>nexleader IPSAT Assessment</Heading2>
            </Box>
            <Paragraph noMaxWidth>
              The main nexleader IPSAT assessment is at the core of the web application. While
              designing, I focused on simplicity, as I didn’t want the user to get distracted, but
              instead be able to just focus on the application one step at a time.
            </Paragraph>
            <Box mt={10} mb={5}>
              <ImageWithBackground
                imageUrl="/static/ipsat/two.png"
                description="Managing users"
              />
            </Box>
            <Box mb={1}>
              <Heading2>User Management</Heading2>
            </Box>
            <Paragraph noMaxWidth>
              A large part of ensuring the application flows smoothly, is managing users both
              through groups and inviting new users to onboard. With so many users to manage, it was
              important to make sure that the design was clear and concise.
            </Paragraph>
            <Box mt={10} mb={5}>
              <ImageWithBackground
                imageUrl="/static/ipsat/three.png"
                description="Onboarding"
              />
            </Box>
            <Box mb={1}>
              <Heading2>Onboarding Experience</Heading2>
            </Box>
            <Paragraph noMaxWidth>
              An important part of the IPSAT experience, is the onboarding included when a user
              signs up for the app. This was not an original part, but one that I found was equally
              as important as any other to ensure clarity while signing up.
            </Paragraph>
            <Box mt={10}>
              <Row>
                <Col sm={6}>
                  <Box mb={2}>
                    <Box mb={1}>
                      <Heading2>Session Scheduling Interface</Heading2>
                    </Box>
                    <Paragraph noMaxWidth>
                      Scheduling sessions for users was a critical component to leadership growth
                      for participants. When designing the session scheduling component, I focused
                      on communicating dates and times across time zones effectively.
                    </Paragraph>
                  </Box>
                </Col>
                <Col sm={6}>
                  <Box mb={2}>
                    <Box mb={1}>
                      <Heading2>IPSAT Report</Heading2>
                    </Box>
                    <Paragraph noMaxWidth>
                      Coupled with the IPSAT assessment is the report, where participants can
                      reflect on data from their assessment. The report was designed in a way that
                      not only shows all the data necessary, but also in an inviting manner.
                    </Paragraph>
                  </Box>
                </Col>
              </Row>
            </Box>
            <Footer nextProjectName="Compare My Offers" nextProjectLink="/work/compare-my-offers" />
          </Col>
        </Row>
      </Container>
    </Box>
    <Container>
      <Bottom />
    </Container>
  </div>
);
