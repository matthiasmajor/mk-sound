import React from "react";
import { Link } from "gatsby";
import { StyledIcon } from "../StyledIcon/StyledIcon";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: hsl(0, 0%, 99%);
`;

export const StyledFooter = styled.footer`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 1fr;
  padding: 50px 20px;

  h4 {
    font-family: ${({ theme }) => theme.font.family.Roboto};
    font-weight: 600;
    grid-row: 1 / 2;

    align-self: center;
  }

  div:first-of-type {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    grid-column: 1 / 3;

    a {
      color: black;
      text-decoration: none;
      margin: 10px 0;
    }
  }
  div:last-of-type {
    grid-row: 1 / 2;
    margin-left: auto;

    a {
      margin-right: 20px;
      width: 35px;
      height: 35px;
    }
  }
  ${({ theme }) => theme.mq.desktop} {
    margin: 40px auto 0 auto;
    padding: 50px 0 50px 0;
    width: 1160px;
    div:first-of-type {
      width: 60%;
      grid-template-columns: repeat(3, 1fr);
    }
    div:last-of-type {
      margin-top: 56px;
    }
  }
`;

export const Footer = () => {
  return (
    <Wrapper>
      <StyledFooter>
        <h4>MK SOUND</h4>
        <div>
          <Link to="/Portfolio">Portfolio</Link>
          <Link to="/Galeria">Galeria</Link>
          <Link to="/Aktualnosci">Aktualności</Link>
          <Link to="/Realizacje">Realizacje</Link>

          <Link to="/Kontakt">Kontakt</Link>
        </div>
        <div>
          <StyledIcon
            as="a"
            href="https://www.facebook.com/modernstudiopl"
            target="_blank"
            isDark
          >
            <img src={facebook} alt="facebookLogo" />
          </StyledIcon>
          <StyledIcon
            as="a"
            href="https://www.instagram.com/modernstudiopl/"
            target="_blank"
            isDark
          >
            <img src={instagram} alt="instagramLogo" />
          </StyledIcon>
        </div>
      </StyledFooter>
    </Wrapper>
  );
};
