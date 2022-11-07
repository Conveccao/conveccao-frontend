import styled from "styled-components";
import THEME from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
`;

export const Card = styled.div`
  width: 55%;
  height: 120px;
  background: ${THEME.colors.green_100};;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const TitleCard = styled.h1`
  margin: 10px 0px;
`;


export const InfoAlerts = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60%;
  justify-content: center;
  
`;

export const TypeAlert = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const TypeAlertTitle = styled.h3`

`;

export const TypeAlertText = styled.p`
  margin-top: 2.5px;
`;

export const HourAlert = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 30%;
  gap: 10px;
`;

export const HourAlertTitle = styled.h3`

`;

export const HourAlertText = styled.p`
  margin-top: 2.5px;
`;

export const DateAlert = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;  
  width: 30%;
  gap: 10px;
  
`;

export const DateAlertTitle = styled.h3`

`;

export const DateAlertText = styled.p`
  margin-top: 2.5px;
`;

export const DescriptionAlerts = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
`;

export const DescriptionAlertsTitle = styled.h3`
  
`;

export const DescriptionAlertsText = styled.p`
  margin-top: 2.5px;
`;














