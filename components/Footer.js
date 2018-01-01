import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { colors } from './Variables';

const StyledFooter = styled.div`
  padding-top: 40px;
  margin-top: 40px;
  border-top: solid 1px ${colors.snow};
  color: ${colors.darkGray};
  line-height: 1.5;
  a {
    color: ${colors.darkGray};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .grow {
    flex-grow: 1;
  }
  b {
    font-weight: 500;
    color: ${colors.black};
  }
`;

export default function () {
  return (
    <StyledFooter>
      <Flex wrap>
        <Box>
          <b>Henry Kaufman</b>
          <br /><a href="mailto:henry@kaufman.io">henry@kaufman.io</a>
          <br /><a href="https://twitter.com/kaufmanhenry">@kaufmanhenry</a>
        </Box>
        <div className="grow" />
        <Box>&copy; 2018</Box>
      </Flex>
    </StyledFooter>
  );
}
