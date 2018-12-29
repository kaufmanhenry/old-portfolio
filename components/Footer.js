import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';

import { colors } from './Variables';

const StyledFooter = styled.div`
  align-items: center;
  color: ${colors.gray};
  display: flex;
  justify-content: center;
  margin-top: 40px;
  padding: 40px 0;
  a {
    color: ${colors.blue};
    font-size: 24px;
    text-decoration: none;
    &:hover {
      opacity: .7;
    }
  }
`;

const Grow = styled.div`
  flex-grow: 1;
`;

const Footer = ({ nextProjectName, nextProjectLink }) => (
  <StyledFooter>
    Next Project
    <Grow />
    <Link href={nextProjectLink}>
      <a>{nextProjectName}</a>
    </Link>
  </StyledFooter>
);

Footer.propTypes = {
  nextProjectName: PropTypes.string.isRequired,
  nextProjectLink: PropTypes.string.isRequired
};

export default Footer;
