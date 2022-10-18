import styled from "styled-components";
import THEME from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  width: 20rem;
  height: 20rem;

  padding: 24px;
  margin-inline: 15px;

  background: #f0f0f0;

  border-radius: 4px;

  box-shadow: ${THEME.boxShadow.shadowDefault};
`;

export const Header = styled.div``;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 0.5rem;
`;

export const SubtitleContainer = styled.div`
  width: 100%;
  text-align: left;

  margin-bottom: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
`;

export const Subtitle = styled.h2`
  font-size: 1rem;
  color: ${THEME.colors.black};
  font-weight: 300;
`;

export const ButtonContainer = styled.div`
  width: 100%;
`;

export const ButtonGoogle = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 2.5rem;

  padding: 8px 16px;
  margin-bottom: 1rem;

  background: #ffffff;
  border: none;
  border-radius: 2px;

  color: #757575;
  font-weight: 500;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.084), 0px 1px 1px rgba(0, 0, 0, 0.168);

  cursor: pointer;

  transition: 0.3s;

  :hover {
    background: #ffffff;
    height: 3rem;
    color: #757575;
  }
`;

export const ButtonFacebook = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 2.5rem;

  padding: 16px 24px;
  margin-bottom: 1rem;

  background: ${THEME.colors.blue_facebook};
  border: none;
  border-radius: 2px;

  color: #ffffff;
  font-weight: 500;

  cursor: pointer;

  transition: 0.3s;

  :hover {
    border: 1px solid ${THEME.colors.blue_facebook};
    background: #f8f8ff;
    color: ${THEME.colors.blue_facebook};
    height: 3rem;
  }
`;
