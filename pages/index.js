import React from 'react';
import { Row, Col } from 'react-grid-system';
import Link from 'next/link';

import {
  Navbar, Container, Box, Heading1, Heading2, Paragraph, HeadContent, StyledLink, MoreInfo, Bottom
} from '../components';

export default () => (
  <div>
    <HeadContent />
    <Navbar />
    <Container>
      <Box mt={10} mb={10}>
        <Heading1>
          Designer and developer based out of Boston focused on building intuitive, simple products.
        </Heading1>
        <br />
        <br />
        <Paragraph large>
          Currently looking for summer 2019 internship opportunities in Boston focused on the
          intersection of design and development.
        </Paragraph>
      </Box>
      <Row>
        <Col sm={6}>
          <Box mb={6}>
            <Box mb={2}>
              <img src="/static/home/cmo.svg" style={{ width: '100%' }} alt="cmo img" />
            </Box>
            <Heading2>Compare My Offers</Heading2>
            <Box mt={1} mb={2}>
              <Paragraph>
                A simple online tool to help home buyers understand and compare various mortgage
                rates.
              </Paragraph>
            </Box>
            <Link href="/work/compare-my-offers">
              <StyledLink>View the case study</StyledLink>
            </Link>
          </Box>
        </Col>
        <Col sm={6}>
          <Box mb={6}>
            <Box mb={2}>
              <img src="/static/home/duworks.svg" style={{ width: '100%' }} alt="duworks" />
            </Box>
            <Heading2>DUWorks</Heading2>
            <Box mt={1} mb={2}>
              <Paragraph>
                An online platform connecting University of Denver students with local companies for
                freelancing opportunities.
              </Paragraph>
            </Box>
            <Link href="/work/duworks">
              <StyledLink>View the case study</StyledLink>
            </Link>
          </Box>
        </Col>
        <Col sm={6}>
          <Box mb={6}>
            <Box mb={2}>
              <img src="/static/home/du-innovation-map.svg" style={{ width: '100%' }} alt="nexleader ipsat img" />
            </Box>
            <Heading2>DU Innovation Map</Heading2>
            <Box mt={1} mb={2}>
              <Paragraph>
                A map showcasing the innovative and entrepreneurial resources at the University of
                Denver.
              </Paragraph>
            </Box>
            <Link href="/work/du-innovation-map">
              <StyledLink>View the case study</StyledLink>
            </Link>
          </Box>
        </Col>
        <Col sm={6}>
          <Box mb={6}>
            <Box mb={2}>
              <img src="/static/home/blink.svg" style={{ width: '100%' }} alt="blink img" />
            </Box>
            <Heading2>Blink Mortgage</Heading2>
            <Box mt={1} mb={2}>
              <Paragraph>
                A 21st century Canadian mortgage company dedicated to providing fast, simple
                mortgages.
              </Paragraph>
            </Box>
            <Link href="/work/blink">
              <StyledLink>View the case study</StyledLink>
            </Link>
          </Box>
        </Col>
        <Col sm={6}>
          <Box mb={6}>
            <Box mb={2}>
              <img src="/static/home/ipsat.svg" style={{ width: '100%' }} alt="nexleader ipsat img" />
            </Box>
            <Heading2>nexleader IPSAT</Heading2>
            <Box mt={1} mb={2}>
              <Paragraph>
                A user management tool that helps people understand and utilize their passions.
              </Paragraph>
            </Box>
            <Link href="/work/ipsat">
              <StyledLink>View the case study</StyledLink>
            </Link>
          </Box>
        </Col>
        <Col sm={6}>
          <MoreInfo
            title="👋&nbsp;&nbsp;Are you in Boston?"
            description="Let's find a time to meet!"
          />
        </Col>
      </Row>
      <Bottom />
    </Container>
  </div>
);
