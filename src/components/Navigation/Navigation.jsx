import * as React from "react";
import { Link } from "gatsby";
import { useState } from "react";
import {
  OuterWrapper,
  StyledBurger,
  StyledNavigation,
  Wrapper,
  StyledSocialIcon,
} from "./Navigation.styles";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/Instagram.svg";
import { useThemeContext } from "../../context/ThemeContext";
import { useEffect } from "react";
import { keyframes } from "styled-components";
import cinek_logo from "../../assets/logo_cinek_transparent.png";
import styled from "styled-components";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const { color } = useThemeContext();

  /*  const stickHeader = () => {
    const scroll = window.scrollY;

    if (scroll > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", stickHeader); */

  const ToogleNavigation = () => {
    setIsOpen(!isOpen);
  };

  const Logo = styled.img`
    width: 100px;
    height: 100px;
    position: absolute;
    top: -10%;
    left: 9%;
    ${({ theme }) => theme.mq.desktop} {
      top: -15%;
    }
  `;

  return (
    <OuterWrapper color={color} isScrolled={isScrolled}>
      <p>
        {" "}
        <Link to="/" onClick={ToogleNavigation}>
          <Logo src={cinek_logo} alt="logo" />
        </Link>
      </p>
      <StyledBurger onClick={ToogleNavigation}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <Wrapper isOpen={isOpen}>
        <StyledNavigation>
          <ul>
            <li>
              <Link onClick={ToogleNavigation} to="/Aktualnosci">
                Aktualności
              </Link>
            </li>
            <li>
              <Link onClick={ToogleNavigation} to="/Galeria">
                Galeria
              </Link>
            </li>
            <li>
              <Link onClick={ToogleNavigation} to="/RealizacjeThird">
                Realizacje
              </Link>
            </li>
            <li>
              <Link onClick={ToogleNavigation} to="/Portfolio">
                Portfolio
              </Link>
            </li>

            <li>
              <Link onClick={ToogleNavigation} to="/Kontakt">
                Kontakt
              </Link>
            </li>
          </ul>
        </StyledNavigation>
        <div style={{}}>
          <StyledSocialIcon
            as="a"
            href="https://www.facebook.com/profile.php?id=100057583803806"
          >
            <img src={facebook} alt="facebook" />
          </StyledSocialIcon>
          <StyledSocialIcon>
            <img src={instagram} alt="instagram" />
          </StyledSocialIcon>
        </div>
      </Wrapper>
    </OuterWrapper>
  );
};
