import styled from 'styled-components';

const SCALING_FACTOR = 8;

const Box = styled.div`
  margin-top: ${({ mt }) => mt * SCALING_FACTOR}px;
  margin-right: ${({ mr }) => mr * SCALING_FACTOR}px;
  margin-bottom: ${({ mb }) => mb * SCALING_FACTOR}px;
  margin-left: ${({ ml }) => ml * SCALING_FACTOR}px;

  padding-top: ${({ pt }) => pt * SCALING_FACTOR}px;
  padding-right: ${({ pr }) => pr * SCALING_FACTOR}px;
  padding-bottom: ${({ pb }) => pb * SCALING_FACTOR}px;
  padding-left: ${({ pl }) => pl * SCALING_FACTOR}px;

  /* margin: ${({ mv, mh }) => `${(mv * SCALING_FACTOR) || '0'}px ${(mh * SCALING_FACTOR) || '0'}`}px;
  padding: ${({ pv, ph }) => `${(pv * SCALING_FACTOR) || '0'}px ${(ph * SCALING_FACTOR) || '0'}`}px; */
`;

export default Box;
