import React from 'react';
import styled from 'styled-components';
import AddThread from '../components/AddThread';
import Navigation from '../components/styled/Navigation';

function Addpage() {
  return (
    <Container>
      <Navigation />
      <Main>
        <Section>
          <h3>Create New Thread</h3>
          <AddThread />
        </Section>
      </Main>
    </Container>
  );
}

export default Addpage;

const Container = styled.div`
  overflow: hidden;
  height: 100vh;
`;

const Main = styled.main`
  height: 100%;
`;

const Section = styled.section`
  width: 500px;
  margin: 3rem auto;
  height: 100%;

  h3 {
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 1rem;
  }
`;
