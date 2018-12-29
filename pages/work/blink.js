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
            Blink Mortgage
          </Heading1>
          <br />
          <Paragraph large>
            A 21st century Canadian mortgage company dedicated to providing fast, simple mortgages.
          </Paragraph>
        </Box>
      </Container>
    </div>
    <Box mt={10} mb={10}>
      <Container>
        <Row>
          <Col sm={4}>
            <Label>Period</Label>
            <Paragraph>2016-2017</Paragraph>
            <br />
            <Label>Skills</Label>
            <Paragraph>
              UI/UX Design
              <br />
              Full Stack Development
            </Paragraph>
          </Col>
          <Col sm={8}>
            <Box mb={1}>
              <Heading2>Introduction</Heading2>
            </Box>
            <Paragraph noMaxWidth>
              Blink Mortgage is an emerging mortgage company based out of Calgary Canada focused on
              providing its users with a better way to get a mortgage in Canada. I worked on the
              design and development for both the borrower and broker sides of the application.
            </Paragraph>
            <Box mt={10} mb={5}>
              <ImageWithBackground
                imageUrl="/static/blink/one.svg"
                description="The borrower application experience"
              />
            </Box>
            <Box mb={1}>
              <Heading2>A Redesigned Mortgage Experience</Heading2>
            </Box>
            <Paragraph noMaxWidth>
              When most people think of mortgage applications, they typically think of boring,
              clunky, slow apps. I worked with Blink to ensure the opposite of that and provide its
              users with a simple design that communicates clear intentions.
            </Paragraph>
            <Box mt={10} mb={5}>
              <ImageWithBackground
                imageUrl="/static/blink/two.png"
                description="A broker viewing their borrowers"
              />
            </Box>
            <Box mb={1}>
              <Heading2>Broker Interface</Heading2>
            </Box>
            <Paragraph noMaxWidth>
              When building an interface for the broker to use, we wanted to ensure that clarity to
              make a correct borrower deal decision drove the process. To do this, we kept the
              design simple and used varying typographic styles to define elements.
            </Paragraph>
            <Box mt={10} mb={5}>
              <ImageWithBackground
                imageUrl="/static/blink/three.png"
                description="Approving a borrower"
              />
            </Box>
            <Box mb={1}>
              <Heading2>Borrower Approval</Heading2>
            </Box>
            <Paragraph noMaxWidth>
              The admin interface used in the Blink portal was a critical element to the design,
              that we worked countless iterations on. We wanted to provide brokers with a simple
              experience for approving new applicants without hassle.
            </Paragraph>
            <Box mt={10}>
              <Row>
                <Col sm={6}>
                  <Box mb={2}>
                    <Box mb={1}>
                      <Heading2>Lending Interface</Heading2>
                    </Box>
                    <Paragraph noMaxWidth>
                      The admin interface used in the Blink portal was a critical element to the
                      design, that we worked countless iterations on. We wanted to provide brokers
                      with a simple experience for approving new applicants without hassle.
                    </Paragraph>
                  </Box>
                </Col>
                <Col sm={6}>
                  <Box mb={2}>
                    <Box mb={1}>
                      <Heading2>Customer Report</Heading2>
                    </Box>
                    <Paragraph noMaxWidth>
                      Customer reports is an important part of the interface that was designed. They
                      were often the first part of Blink Mortgage they saw and we wanted to make
                      sure we made a good impression initially.
                    </Paragraph>
                  </Box>
                </Col>
              </Row>
            </Box>
            <Footer nextProjectName="nexleader IPSAT" nextProjectLink="/work/ipsat" />
          </Col>
        </Row>
      </Container>
    </Box>
    <Container>
      <Bottom />
    </Container>
  </div>
);
