import styled from 'styled-components';
import { colors } from './Variables';

export const Heading1 = styled.h1`
  color: ${colors.black};
  font-size: 48px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 57.6px;
  max-width: 800px;
`;

export const Heading2 = styled.h2`
  color: ${colors.black};
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -.5px;
  line-height: 28.8px;
`;

export const Paragraph = styled.p`
  color: ${colors.darkGray};
  font-size: ${({ large }) => large ? '24px' : '16px'};
  line-height: ${({ large }) => large ? '36px' : '24px'};
  max-width: ${({ noMaxWidth }) => noMaxWidth ? 'auto' : '30em'};
`;

export const Label = styled.p`
  color: ${colors.gray};
  font-size: 16px;
  line-height: 24px;
`;

export const StyledLink = styled.a`
  color: ${colors.blue};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    opacity: .7;
  }
`;
