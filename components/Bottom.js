import React from 'react';
import styled from 'styled-components';
import { colors } from './Variables';
import { StyledLink } from './Text';

const StyledBottom = styled.div`
  border-top: solid 1px ${colors.snow};
  color: ${colors.darkGray};
  display: flex;
  margin-top: 40px;
  padding: 40px 0;
  .grow {
    flex-grow: 1;
  }
`;

export default () => (
  <StyledBottom>
    &copy;&nbsp;&nbsp;Henry Kaufman
    <div className="grow" />
    <StyledLink href="https://twitter.com/kaufmanhenry" target="_blank">Twitter</StyledLink>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <StyledLink href="https://github.com/hcjk" target="_blank">GitHub</StyledLink>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <StyledLink href="https://www.linkedin.com/in/kaufmanhenry/" target="_blank">LinkedIn</StyledLink>
  </StyledBottom>
);
