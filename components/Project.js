import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Flex, Box } from 'grid-styled';

import { colors } from './Variables';

const StyledProject = styled.div`
  img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(0, 0, 0, .1);
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
    <Box>
      <img src={photo} alt={name} />
    </Box>
    <Box mt={3}>
      <h3>{name}</h3>
      <p>{description}</p>
      <br />
      <Link href={link}>
        <a>View the Case Study</a>
      </Link>
    </Box>
  </StyledProject>
);

export default Project;
