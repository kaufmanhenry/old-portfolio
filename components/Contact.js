import React from 'react';
import styled from 'styled-components';
import { colors } from './Variables';

const ContactStyled = styled.a`
  align-items: center;
  animation-name: spin;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background-color: ${colors.blue};
  border-radius: 40px;
  color: ${colors.white};
  display: flex;
  font-weight: bold;
  height: 80px;
  justify-content: center;
  position: fixed;
  right: 80px;
  text-decoration: none;
  top: 80px;
  width: 80px;
  z-index: 99999;
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(359deg); }
  }
`;

const Contact = () => (
  <ContactStyled href="mailto:henry@kaufman.io">contact</ContactStyled>
);

export default Contact;
