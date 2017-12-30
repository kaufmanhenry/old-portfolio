import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { colors } from './Variables';
import { Container } from './StyledApp';

const StyledFull = styled.div``;

const StyledLeft = styled.div`
  background-color: ${colors.snow};
`;

export const TextContainer = styled.div`
  text-align: ${props => props.left ? 'left' : 'center'};
  width: 100%;
  margin: 0 auto;
  max-width: 960px;
  h3 {
    color: ${colors.black};
    font-size: 24px;
    margin-bottom: 8px;
  }
  p {
    margin: 0 auto;
    color: ${colors.darkGray};
    line-height: 1.5;
    max-width: 640px;
  }
`;

const ImageContainer = styled.div`
  background-color: ${colors.snow};
  padding: 60px 0;
  text-align: center;
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,.05);
  }
`;

const InlineImage = styled.div`
  width: 100%;
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,.05);
  }
`;

const PanelContainer = ({ image, header, text, direction }) => (
  <div>
    {direction === 'full' &&
    <StyledFull>
      <ImageContainer>
        <Container>
          <img src={image} alt={text} />
        </Container>
      </ImageContainer>
      <Container>
        <Box my={4}>
          <TextContainer>
            <h3>{header}</h3>
            <p>{text}</p>
          </TextContainer>
        </Box>
      </Container>
    </StyledFull>}
    {direction === 'left' &&
    <StyledLeft>
      <Container>
        <Flex align="center" direction="row-reverse" wrap mx={-2} py={4}>
          <Box w={[1, 2 / 3]} px={2}>
            <InlineImage>
              <img src={image} alt={text} />
            </InlineImage>
          </Box>
          <Box w={[1, 1 / 3]} px={2} pt={2}>
            <TextContainer left>
              <h3>{header}</h3>
              <p>{text}</p>
            </TextContainer>
          </Box>
        </Flex>
      </Container>
    </StyledLeft>}
    {direction === 'right' &&
    <StyledLeft>
      <Container>
        <Flex align="center" wrap mx={-2} py={4}>
          <Box w={[1, 2 / 3]} px={2}>
            <InlineImage>
              <img src={image} alt={text} />
            </InlineImage>
          </Box>
          <Box w={[1, 1 / 3]} px={2} pt={2}>
            <TextContainer left>
              <h3>{header}</h3>
              <p>{text}</p>
            </TextContainer>
          </Box>
        </Flex>
      </Container>
    </StyledLeft>}
  </div>
);

export default PanelContainer;
