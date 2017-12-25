import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from './Variables';

const StyledApp = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 80px 0;
  width: 90%;

  h1 {
    color: ${colors.black};
    margin: 0;
    padding: 0;
    font-size: 40px;
    font-weight: 400;
    line-height: 1.5;
    max-width: 640px;
    margin-bottom: 8px;
    span {
      color: ${colors.blue};
    }
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
  width: 90%;
`;

export const SubText = styled.p`
  color: ${colors.darkGray};
  font-size: 20px;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  max-width: 640px;
`;

export const NiceLink = styled(Link)`
  color: ${colors.blue};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default StyledApp;
