import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from './Variables';

let lastId = 0;

const genUniqueId = (prefix = 'id') => {
  lastId++;
  return `${prefix}${lastId}`;
};

const StyledImageWithBackground = styled.div`
  background-color: #f8f9fa;
  padding: 40px;
  img {
    border-radius: 8px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, .05);
    width: 100%;
    transition: transform 0.25s ease;
    cursor: zoom-in;
  }
  p {
    color: ${colors.gray};
    font-size: 16px;
    margin-top: 16px;
    text-align: center;
  }
  input[type=checkbox] {
    display: none;
  }
  input[type=checkbox]:checked ~ label > img {
    transform: scale(2);
    cursor: zoom-out;
  }
`;

class ImageWithBackground extends Component {
  static propTypes = {
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }

  componentWillMount = () => {
    this.uniqueId = genUniqueId();
  }

  render = () => {
    const { imageUrl, description } = this.props;
    console.log(this.uniqueId);
    return (
      <StyledImageWithBackground>
        <input type="checkbox" id={this.uniqueId} />
        <label htmlFor={this.uniqueId}>
          <img src={imageUrl} alt="img with background" />
        </label>
        <p>{description}</p>
      </StyledImageWithBackground>
    );
  }
}

export default ImageWithBackground;
