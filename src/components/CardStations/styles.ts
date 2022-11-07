import styled from 'styled-components';

export const StationCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 5%;
  flex-wrap: wrap;
  margin-bottom: 10rem;
`;

export const CardStation = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const StationCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-block: 1rem;
`;

export const StationCardTitle = styled.h1`
font-size: 1.5rem;
font-weight: 400;
color: ${props => props.theme.colors.black};
`;

export const StationCardBody = styled.div`
display: flex;
align-items: center;
justify-content: center;

width: 410px;
    height: 270px;
border: 2px solid ${props => props.theme.colors.green_100};
border-radius: 0.5rem;

overflow: hidden;
`;

export const StationCardInfoContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 95%;
`;

export const StationCardInfo = styled.span`
font-size: 1rem;
font-weight: 400;
color: ${props => props.theme.colors.black};
`;

export const StationCardInfoValue = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: ${props => props.theme.colors.green_100};
`;

export const StationCardImage = styled.img`
    width: 410px;
    height: 270px;
`;
