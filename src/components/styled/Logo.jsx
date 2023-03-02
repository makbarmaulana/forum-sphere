import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/vite.svg';

export function Logo(props) {
  return (
    <Figure {...props}>
      <img src={logo} alt="logo" />
    </Figure>
  );
}

const Figure = styled.figure`
  display: flex;
  place-content: center;
  border: 1px solid black;
  width: ${({ width }) => width || '120px'};
  aspect-ratio: 1/1;
  border-radius: 50%;
  margin: ${({ margin }) => margin || 'auto'};

  img {
    width: 70%;
    height: auto;
    object-fit: contain;
  }
`;
