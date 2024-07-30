// src/components/FlightStatus.js

import React from 'react';
import styled from 'styled-components';

const FlightCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  max-width: 600px;
  width: 100%;
`;

const FlightHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const FlightName = styled.h2`
  font-size: 1.5em;
  margin: 0;
`;

const FlightStatusBadge = styled.span`
  background: ${props => (props.status === 'On Time' ? '#4caf50' : props.status === 'Delayed' ? '#f44336' : '#ff9800')};
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9em;
`;

const FlightDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FlightDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FlightStatus = ({ flight }) => {
  return (
    <FlightCard>
      <FlightHeader>
        <FlightName>{flight.name}</FlightName>
        <FlightStatusBadge status={flight.status}>{flight.status}</FlightStatusBadge>
      </FlightHeader>
      <FlightDetails>
        <FlightDetail>
          <span>Departure:</span>
          <span>{flight.departure}</span>
        </FlightDetail>
        <FlightDetail>
          <span>Arrival:</span>
          <span>{flight.arrival}</span>
        </FlightDetail>
        <FlightDetail>
          <span>Gate:</span>
          <span>{flight.gate}</span>
        </FlightDetail>
        <FlightDetail>
          <span>Terminal:</span>
          <span>{flight.terminal}</span>
        </FlightDetail>
      </FlightDetails>
    </FlightCard>
  );
};

export default FlightStatus;
