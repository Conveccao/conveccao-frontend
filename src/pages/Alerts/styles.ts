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
  width: 60%;
  height: 80px;
  
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const TitleCard = styled.h2`
  margin: 10px 0px;
`;


export const InfoAlerts = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: center;
  background: ${THEME.colors.red_google};
  padding: 15px;
  border-radius: 5px;
  border: 3px solid ${THEME.colors.red_google};
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
  color: #ffffff;
`;

export const TypeAlertText = styled.p`
  margin-top: 2.5px;
  color: #ffffff;
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
  color: #ffffff;
`;

export const HourAlertText = styled.p`
  margin-top: 2.5px;
  color: #ffffff;
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
    color: #ffffff;
`;

export const DateAlertText = styled.p`
  margin-top: 2.5px;
  color: #ffffff;
`;















