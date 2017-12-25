import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { colors } from '../Variables';

const StyledFooter = styled.div`
  padding-top: 40px;
  margin-top: 40px;
  border-top: solid 1px ${colors.snow};
  color: ${colors.darkGray};
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
`;

export default function() {
  return (
    <StyledFooter>
      <Flex wrap>
        <Box>Henry Kaufman • <a href="mailto:henry@kaufman.io">henry@kaufman.io</a></Box>
        <div className="grow" />
        <Box>2018</Box>
      </Flex>
    </StyledFooter>
  )
}
