import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { colors } from './Variables';

const Intro = styled.div`
  border-top: solid 1px ${colors.snow};
`;

const Header = styled.h4`
  font-size: 12px;
  color: ${colors.darkGray};
  margin-bottom: 8px;
  font-weight: 700;
`;

const Text = styled.p`
  font-size: 16px;
  color: ${colors.black};
  line-height: 1.5;
  margin: 0;
`;

const Introduction = ({ desc, skills }) => (
  <Intro>
    <Flex wrap mx={-2} pt={3}>
      <Box w={[1, 1 / 2]} px={2} pt={3}>
        <Header>INTRODUCTION</Header>
        <Text>{desc}</Text>
      </Box>
      <Box w={[1, 1 / 2]} px={2} pt={3}>
        <Header>SKILLS</Header>
        {skills.map((s, index) => <Text key={index}>{s}</Text>)}
      </Box>
    </Flex>
  </Intro>
);

export default Introduction;
