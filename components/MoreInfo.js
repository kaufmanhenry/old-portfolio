import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from './Variables';
import { StyledLink } from '.';

const StyledMoreInfo = styled.div`
  background-color: ${colors.snow};
  padding: 40px;
  text-align: center;
  h3 {
    color: ${colors.black};
    font-size: 24px;
    letter-spacing: -.5px;
    margin-bottom: 8px;
  }
  p {
    color: ${colors.darkGray};
    font-size: 16px;
    line-height: 24px;
  }
`;

const MoreInfo = ({ title, description }) => (
  <StyledMoreInfo>
    <h3>{title}</h3>
    <p>
      {description}
      <br />
      <StyledLink href="mailto:henry@kaufman.io">Email me!</StyledLink>
    </p>
  </StyledMoreInfo>
);

MoreInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default MoreInfo;
