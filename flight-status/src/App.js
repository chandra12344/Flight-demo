// src/App.js

import React, { useEffect } from 'react';
import FlightStatus from './FlightStatus';
import { flights } from './flights';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const AppTitle = styled.h1`
  margin-bottom: 20px;
`;

const App = () => { 

  useEffect(()=> {
    fetch('http://localhost:5050/flight/')
      .then(response => response)
      .then(data => console.log("data", data)) 
      .catch(err => console.error(err)); 
  
  }, [])
  
  return (
    <AppContainer>
      <AppTitle>Flight Status</AppTitle>
      {flights.map((flight, index) => (
        <FlightStatus key={index} flight={flight} />
      ))}
    </AppContainer>
  );
};

export default App;
