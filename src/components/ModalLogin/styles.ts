import styled from "styled-components";
import THEME from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 4rem;
  width: 27.5rem;
  height: 31rem;

  background: ${THEME.colors.white_100};
  border-radius: 8px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.2);
`;

export const Header = styled.header`
  margin-bottom: 49px;
`;

export const Title = styled.h1`
  font-size: ${THEME.fontSizes.title};
  font-weight: ${THEME.fontWeights.bold};
  color: ${THEME.colors.black};

  margin-bottom: 8px;
`;

export const Subtitle = styled.span`
  font-weight: ${THEME.fontWeights.regular};
  color: ${THEME.colors.gray};
`;

export const MainContent = styled.main``;

export const Footer = styled.footer``;

export const DividerContainer = styled.div``;

export const Divider = styled.hr`
  margin: 52px 0px 26px 0px;
  width: 24rem;
  height: 0.125rem;

  background: ${THEME.colors.gray};

  border-radius: 2px;
  border: 1px solid ${THEME.colors.gray};
`;
