import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import { colors } from '../Variables';

const StyledProject = styled.div`
  img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(0, 0, 0, .05);
  }
  h3 {
    color: ${colors.black};
    font-weight: 500;
    margin-bottom: 8px;
  }
  p {
    color: ${colors.darkGray};
    line-height: 1.5;
    margin: 0;
  }
  a {
    color: ${colors.blue};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Project = ({ name, photo, link, description, reverse }) => (
  <StyledProject>
    <Flex align="center" mx={-2} wrap direction={reverse ? 'row-reverse' : 'row'}>
      <Box w={[1, 2/3]} px={2}>
        <img src={photo} />
      </Box>
      <Box w={[1, 1/3]} px={2}>
        <h3>{name}</h3>
        <p>{description}</p>
        <br />
        <a href={link}>View the Case Study</a>
      </Box>
    </Flex>
  </StyledProject>
);

export default Project;
