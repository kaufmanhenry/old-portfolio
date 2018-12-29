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
  StyledLink,
  Label,
  ImageWithBackground,
  Footer,
  Bottom
} from '../../components';

export default () => (
  <div>
    <HeadContent />
    <Navbar />
    <div style={{ backgroundColor: '#ebedf0' }}>
      <Container>
        <Box pt={10} pb={10}>
          <Heading1>
            DUWorks
          </Heading1>
          <br />
          <Paragraph large>
            An online platform connecting DU students with local companies for freelancing
            opportunities.
          </Paragraph>
        </Box>
      </Container>
    </div>
    <Box mt={10} mb={10}>
      <Container>
        <Row>
          <Col sm={4}>
            <Label>Period</Label>
            <Paragraph>2018</Paragraph>
            <br />
            <Label>Skills</Label>
            <Paragraph>
              UI/UX Design
              <br />
              Full Stack Development
            </Paragraph>
            <br />
            <Label>Site</Label>
            <Paragraph>
              <StyledLink href="https://duworks.com" target="_blank">View</StyledLink>
            </Paragraph>
          </Col>
          <Col sm={8}>
            <Box mb={1}>
              <Heading2>Introduction</Heading2>
            </Box>
            <Paragraph noMaxWidth>
              DUWorks is a student freelancer platform designed to connect University of Denver
              students with local Denver companies. Many of the students on the DUWorks platform
              have never freelanced before and this created a need for a DU-specific platform for
              these students to get a foot in the door and hone their skills.
            </Paragraph>
            <Box mt={10} mb={5}>
              <ImageWithBackground
                imageUrl="/static/duworks/one.png"
                description="Landing"
              />
            </Box>
            <Box mb={1}>
              <Heading2>Viewing All Students</Heading2>
            </Box>
            <Paragraph noMaxWidth>
              When landing on the home page for DUWorks, you are immediately presented with a
              classic listing-esque type page where all student freelancers are listed along with a
              small blurb about each one and the functionality to filter based on their skillsets.
            </Paragraph>
            <Box mt={10} mb={5}>
              <ImageWithBackground
                imageUrl="/static/duworks/two.png"
                description="Viewing a student's profile"
              />
            </Box>
            <Box mb={1}>
              <Heading2>Student Profiles</Heading2>
            </Box>
            <Paragraph noMaxWidth>
              Each student has a unique set of skills and availability that they can dedicate to
              a project, so ensuring that this data is presented clearly to a potential company or
              client was critical. On the design aspect for the modal, we worked to ensure that all
              information was presented in a clear manner and the information was divided properly.
            </Paragraph>
            <Box mt={10} mb={5}>
              <ImageWithBackground
                imageUrl="/static/duworks/three.png"
                description="Editing a student's profile"
              />
            </Box>
            <Box mb={1}>
              <Heading2>Profile Configuration</Heading2>
            </Box>
            <Paragraph noMaxWidth>
              A student can upgrade their static account to be able to edit their personal profiles.
              Currently, each profile is pretty simple and consists of basic information about each
              student and their skills. This page is currently being worked on in order to add
              additional information that students are able to provide.
            </Paragraph>
            <Box mt={10}>
              <Row>
                <Col sm={6}>
                  <Box mb={2}>
                    <Box mb={1}>
                      <Heading2>Sign Up</Heading2>
                    </Box>
                    <Paragraph noMaxWidth>
                      Each student has the opportuntity to take control of their information and
                      change it from the initial data they submitted through the form. In order to
                      ensure only students were signing up for the platform, I carefully
                      authenticated each student during the sign up process.
                    </Paragraph>
                  </Box>
                </Col>
                <Col sm={6}>
                  <Box mb={2}>
                    <Box mb={1}>
                      <Heading2>Inquiries</Heading2>
                    </Box>
                    <Paragraph noMaxWidth>
                      Inquiries are a current feature that is in the works. This would allow for
                      companies and potential clients to directly reach out to each student if they
                      found that their skillset fit the needs of their freelance project.
                    </Paragraph>
                  </Box>
                </Col>
              </Row>
            </Box>
            <Footer nextProjectName="DU Innovation Map" nextProjectLink="/work/du-innovation-map" />
          </Col>
        </Row>
      </Container>
    </Box>
    <Container>
      <Bottom />
    </Container>
  </div>
);
