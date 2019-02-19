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
            Compare My Offers
          </Heading1>
          <br />
          <Paragraph large>
            A simple online tool to help home buyers understand and compare various mortgage rates.
          </Paragraph>
        </Box>
      </Container>
    </div>
    <Box mt={10} mb={10}>
      <Container>
        <Row>
          <Col sm={4}>
            <Label>Client</Label>
            <Paragraph>Blink Lending</Paragraph>
            <br />
            <Label>Period</Label>
            <Paragraph>Summer 2018</Paragraph>
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
            <br />
            <Label>Site</Label>
            <Paragraph>
              <StyledLink href="https://comparemyoffers.com" target="_blank">View</StyledLink>
            </Paragraph>
          </Col>
          <Col sm={8}>
            <Box mb={1}>
              <Heading2>Introduction</Heading2>
            </Box>
            <Paragraph noMaxWidth>
              The Compare My Offers tool stemmed from an issue found with the usage of the mortgage
              process for Blink Mortgage: the need for a simple way to showcase various rates to a
              potential home buyer. We wanted to create a simple way to give potential customers
              insight on the various rates they could receive when financing a new or existing
              mortgage.
            </Paragraph>
            <Box mt={10} mb={5}>
              <ImageWithBackground
                imageUrl="/static/cmo/one.png"
                description="A customer's report"
              />
            </Box>
            <Box mb={1}>
              <Heading2>A Personalized Report</Heading2>
            </Box>
            <Paragraph noMaxWidth>
              At the core of Compare My Offers is the personalized report we generate for each
              customer. Considering that this is their first impression of the product, ensuring
              that the report is created with clarity and easy of understanding was one of the main
              things focused on when both designing and implementing it.
            </Paragraph>
            <Box mt={10} mb={5}>
              <ImageWithBackground
                imageUrl="/static/cmo/two.png"
                description="The interface for creating a new report"
              />
            </Box>
            <Box mb={1}>
              <Heading2>Report Creation</Heading2>
            </Box>
            <Paragraph noMaxWidth>
              On the flip side of the application is the report creation process for brokers.
              Mortgages are inherently difficult, but when creating this interface we focused on
              requiring only the most necessary information, and leaving the rest for the actual
              mortgage application. This resulted in a report creation process that takes less than
              ten minutes for a broker.
            </Paragraph>
            <Box mt={10} mb={5}>
              <ImageWithBackground
                imageUrl="/static/cmo/three.png"
                description="Editing a product"
              />
            </Box>
            <Box mb={1}>
              <Heading2>Managing Products</Heading2>
            </Box>
            <Paragraph noMaxWidth>
              In addition to creating reports, brokers manage the various products that lenders
              offer. This can be a complicated process, as there are often many products and each
              product requires a lot of information and detail. When creating this interface, we
              focused on keeping it simple allowing a broker to focus on one product at a time,
              while still having the ability to reference others.
            </Paragraph>
            <Box mt={10}>
              <Row>
                <Col sm={6}>
                  <Box mb={2}>
                    <Box mb={1}>
                      <Heading2>Team Management</Heading2>
                    </Box>
                    <Paragraph noMaxWidth>
                      Getting a mortgage is not a one person show, and we quickly found that there
                      were multiple brokers working together on a team in order to qualify someone
                      for a new mortgage. We worked through this issue by allowing brokers to invite
                      their coworkers onto the platform.
                    </Paragraph>
                  </Box>
                </Col>
                <Col sm={6}>
                  <Box mb={2}>
                    <Box mb={1}>
                      <Heading2>Simplified Setup</Heading2>
                    </Box>
                    <Paragraph noMaxWidth>
                      For an industry where current tools for managing information do not currently
                      exist, onboarding can sometimes be a challenge. To mitigate this issue, we
                      built a simple home page that gives brokers the opportunity to have a report
                      generated for them by default.
                    </Paragraph>
                  </Box>
                </Col>
              </Row>
            </Box>
            <Footer nextProjectName="DUWorks" nextProjectLink="/work/duworks" />
          </Col>
        </Row>
      </Container>
    </Box>
    <Container>
      <Bottom />
    </Container>
  </div>
);
