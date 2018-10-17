import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Box } from 'grid-styled';

import { colors } from './Variables';

const StyledProject = styled.div`
  h3 {
    color: ${colors.black};
    font-size: 20px;
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

const StyledProjectImage = styled.div`
  background-color: ${colors.snow};
  padding: 40px;
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
  }
`;

const Project = ({ name, photo, link, description, reverse }) => (
  <Link href={link}>
    <a style={{textDecoration: 'none'}}>
      <StyledProject>
        <Box mb={3}>
          <h3>{name}</h3>
          <p>{description}</p>
        </Box>
        <StyledProjectImage>
          <img src={photo} alt={name} />
        </StyledProjectImage>
      </StyledProject>
    </a>
  </Link>
);

export default Project;
