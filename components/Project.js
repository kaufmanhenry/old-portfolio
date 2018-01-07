import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Box } from 'grid-styled';

import { colors } from './Variables';

const StyledProject = styled.div`
  background-color: #fafafa;
  padding: 80px 24px;
  position: relative;
  transition: box-shadow .3s ease;
  
  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, .05);
  }
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
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
  <Link href={link}>
    <a style={{textDecoration: 'none'}}>
      <StyledProject>
        <Box>
          <img src={photo} alt={name} />
        </Box>
        <Box mt={3}>
          <h3>{name}</h3>
          <p>{description}</p>
        </Box>
      </StyledProject>
    </a>
  </Link>
);

export default Project;
