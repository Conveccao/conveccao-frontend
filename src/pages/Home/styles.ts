import { MapContainer } from 'react-leaflet';
import styled from 'styled-components';

export const StyledMapContainer = styled.div`
  margin: 6rem 1.5rem 0 17rem;
  padding: 0 0 2.375rem 0;
  border-bottom: 2px solid ${props => props.theme.colors.gray};

  @media (max-width: 768px) {
    margin: 6rem 1.5rem 0 1.5rem;
  }
`;

export const StyledMap = styled(MapContainer)`
    width: 100%;
    height: 300px;
    border: 1px solid ${props => props.theme.colors.green_100};

    z-index: 5;

    border-radius: 0.5rem;
`;

export const Container = styled.div`
  margin: 0 1.5rem 1rem 17rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  
  @media (max-width: 768px) {
    margin: 0 1.5rem 1rem 1.5rem;
  }
`;

export const TitleStation = styled.h1`
    margin: 2rem 1.5rem 0 17rem;
`;

export const TitleStations = styled.h1`
    margin: 2rem 1.5rem 0 0rem;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
`;

export const Stations = styled.div`
  margin: 0 1.5rem 1rem 17rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
`;



