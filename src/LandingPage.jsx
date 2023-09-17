import React from 'react';
import styled from 'styled-components';
import GoogleMap from './GoogleMap';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const LandingPage = () => {
  return (
    <Container>
      <Title>Google Maps Landing Page</Title>
      <GoogleMap />
    </Container>
  );
};

export default LandingPage;
