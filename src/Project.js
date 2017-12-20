import React from 'react';
import styled from 'styled-components';

import { colors } from './Variables';

const StyledProject = styled.div`
  img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 1px 15px rgba(0, 0, 0, .1);
  }
  h3 {
    color: ${colors.black};
    font-weight: 500;
    margin-bottom: 8px;
    a {
      color: ${colors.black};
      text-decoration: none;
      transition: color .15s ease-in;
      &:hover {
        color: ${colors.blue};
      }
    }
  }
  p {
    color: ${colors.darkGray};
    line-height: 1.5;
    margin: 0;
  }
`;

const Project = ({ name, photo, link, description }) => (
  <StyledProject>
    <img src={photo} />
    <h3>
      <a href={link} target="_blank">{name}</a>
    </h3>
    <p>{description}</p>
  </StyledProject>
);

export default Project;
