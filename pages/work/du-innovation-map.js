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
            DU Innovation Map
          </Heading1>
          <br />
          <Paragraph large>
            A map showcasing the innovative and entrepreneurial resources at the University of
            Denver.
          </Paragraph>
        </Box>
      </Container>
    </div>
    <Box mt={10} mb={10}>
      <Container>
        <Row>
          <Col sm={4}>
            <Label>Client</Label>
            <Paragraph>University of Denver</Paragraph>
            <br />
            <Label>Period</Label>
            <Paragraph>2018</Paragraph>
            <br />
            <Label>Skills</Label>
            <Paragraph>
              UI/UX Design
              <br />
              Frontend Development
            </Paragraph>
            <br />
            <Label>Site</Label>
            <Paragraph>
              <StyledLink href="https://duinnovationmap.org" target="_blank">View</StyledLink>
            </Paragraph>
          </Col>
          <Col sm={8}>
            <Box mb={1}>
              <Heading2>Introduction</Heading2>
            </Box>
            <Paragraph noMaxWidth>
              When initially approached about this project, the University of Denver was really
              interested in building a map that could showcase the innovation resources on campus,
              especially pertaining to the entrepreneurial spirit that was on campus. After
              researching similar websites at other schools, I was able to get a stronger
              understanding of the concept DU was interested in.
            </Paragraph>
            <Box mt={10} mb={5}>
              <ImageWithBackground
                imageUrl="/static/du-innovation-map/one.png"
                description="Category selection/all entities"
              />
            </Box>
            <Box mb={1}>
              <Heading2>Viewing the Entire Map</Heading2>
            </Box>
            <Paragraph noMaxWidth>
              When looking at lists with entities that have location-specific information, the data
              is often presented in a manner that incorporates a list, but also has a large map
              focus. For the DU Innovation Map, I wanted to do something similar where a category
              select gave users various options initially, but also a large map focus filled the
              viewport emphasizing both ways of interacting with the data set.
            </Paragraph>
            <Box mt={10} mb={5}>
              <ImageWithBackground
                imageUrl="/static/du-innovation-map/two.png"
                description="Viewing an individual entity"
              />
            </Box>
            <Box mb={1}>
              <Heading2>Individual Entities</Heading2>
            </Box>
            <Paragraph noMaxWidth>
              Once a single entity has been selected, I wanted to move the focus of the user to that
              organization or entity rather than the entire map. Instead of showing all entities on
              the map, the map only shows the entities that fall within the same category. This
              design choice allows for a balance that still highlights the content and information
              of the single entity, but also still renders the map useful.
            </Paragraph>
            <Box mt={10}>
              <Row>
                <Col sm={6}>
                  <Box mb={2}>
                    <Box mb={1}>
                      <Heading2>Categories</Heading2>
                    </Box>
                    <Paragraph noMaxWidth>
                      When initially developing the website, categories were nonexistent. After
                      an increase in the number of entities, we quickly realized that the experience
                      of the user would be greatly enhanced by assigning categories to all entities
                      and then highlighting those categories on the map in different colors.
                    </Paragraph>
                  </Box>
                </Col>
                <Col sm={6}>
                  <Box mb={2}>
                    <Box mb={1}>
                      <Heading2>Brand Consistency</Heading2>
                    </Box>
                    <Paragraph noMaxWidth>
                      A large part of the project was keeping the identity of the website consistent
                      with the Project X-ITE brand and the DU identity. While this proved to be
                      somewhat of a challenge when working to create a new product, it ultimately
                      allowed for a quality design to be made that fits with the current standard.
                    </Paragraph>
                  </Box>
                </Col>
              </Row>
            </Box>
            <Footer nextProjectName="Blink Mortgage" nextProjectLink="/work/blink" />
          </Col>
        </Row>
      </Container>
    </Box>
    <Container>
      <Bottom />
    </Container>
  </div>
);
