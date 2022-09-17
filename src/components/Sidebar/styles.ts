import styled from "styled-components";
import { Link } from "react-router-dom";
import THEME from "../../styles/theme";

// Container for the sidebar
export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 18rem;
  height: 100vh;
  padding: 1rem;

  background: ${THEME.colors.white_100};
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  transition: 0.2s ease-in-out;
  
  @media (max-width: 768px) {
    left: -100%;
  }
`;

//Sidebar content
export const Header = styled.header``;

export const Logo = styled.img`
  width: 4.0625rem;
  height: 4.0625rem;
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 1.5rem;
  padding: 0rem 0rem 0.75rem 0rem;
  border-bottom: 2px solid ${THEME.colors.gray};

  text-align: right;
`;

export const Title = styled.h1`
  margin-left: 1.5rem;
  color: ${THEME.colors.green_100};
  font-weight: ${THEME.fontWeights.bold};
  font-size: ${THEME.fontSizes.title};
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NavbarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 250px;
  height: 50px;
  margin-bottom: 1.5rem;
  font-weight: ${THEME.fontWeights.regular};
  font-size: ${THEME.fontSizes.subtitle};
  color: ${THEME.colors.black};
  text-decoration: none;

  transition: color 0.2s;

  :hover {
    color: ${THEME.colors.green_100};
    border-bottom: 2px solid ${THEME.colors.green_100};
  }
`;

//Footer for the sidebar
export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NavbarLinkButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 250px;
  height: 50px;
  margin-bottom: 1.5rem;

  background: ${THEME.colors.blue_100};
  border-radius: 8px;

  font-weight: ${THEME.fontWeights.regular};
  font-size: ${THEME.fontSizes.subtitle};
  color: ${THEME.colors.white_100};

  text-decoration: none;

  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.2);
  transition: background 0.2s;

  :hover {
    background:  ${THEME.colors.blue_50};
  }
`;
