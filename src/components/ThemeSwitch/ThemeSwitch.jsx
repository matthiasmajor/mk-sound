import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import styled from "styled-components";
import { useThemeContext } from "../../context/ThemeContext";
import { useState } from "react";
import throttle from "lodash.throttle";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 10px;
  right: 20px;
  z-index: 1;
  padding: 15px 15px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: ${({ visible }) => (visible ? "flex" : "none")};

  &:hover {
    opacity: 0.8;
  }
`;

export const ThemeSwitch = () => {
  const { color, themeToggle } = useThemeContext();

  const [visible, setVisible] = useState(false);

  const listenScrollY = () => {
    const buttonToSee = window.scrollY;

    if (buttonToSee > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
    console.log(visible);
  };

  const throttledFetchData = throttle(listenScrollY, 500);

  window.addEventListener("scroll", throttledFetchData);

  return (
    <Wrapper as="a" href="#main" visible={visible}>
      <AiOutlineArrowUp style={{ color: "black" }} />
    </Wrapper>
  );
};
