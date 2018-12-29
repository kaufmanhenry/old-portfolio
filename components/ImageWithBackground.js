import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from './Variables';

const StyledImageWithBackground = styled.div`
  background-color: #f8f9fa;
  padding: 40px;
  img {
    border-radius: 8px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, .05);
    width: 100%;
  }
  p {
    color: ${colors.gray};
    font-size: 16px;
    margin-top: 16px;
    text-align: center;
  }
`;

const ImageWithBackground = ({ imageUrl, description }) => (
  <StyledImageWithBackground>
    <img src={imageUrl} alt="img with background" />
    <p>{description}</p>
  </StyledImageWithBackground>
);

ImageWithBackground.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ImageWithBackground;
