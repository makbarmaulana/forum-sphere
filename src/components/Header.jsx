import React from 'react';
import styled from 'styled-components';
import Navigation from './styled/Navigation';

function Header() {
  return (
    <Container>
      <Navigation />
    </Container>
  );
}

export default Header;

const Container = styled.header``;
