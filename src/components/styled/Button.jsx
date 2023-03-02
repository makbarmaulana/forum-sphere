import styled from 'styled-components';

import React from 'react';

export function Button(props) {
  const { type, children } = props;
  return (
    <ButtonItem type={type || 'button'} {...props}>
      {children}
    </ButtonItem>
  );
}

const ButtonItem = styled.button`
  width: max-content;
  padding: 6px 14px;
  border-radius: 4px;
  border-color: transparent;
  font-size: 16px;
  font-weight: 500;
  background-color: #00aeef;
  color: #fff;
  cursor: pointer;
  margin: ${({ margin }) => margin};

  :hover {
    background-color: #0595c9;
  }

  :disabled {
    background-color: #c4c4c4;
  }
`;
