import styled from "styled-components";
import { keyframes } from "styled-components";
import { motion } from "framer-motion";

const Animation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledButton = styled(motion.button)`
  background: ${({ isWhite }) =>
    isWhite ? "#ECECEC" : "rgba(127, 100, 140, 0.936) 0%"};
  font-size: 0.75rem;
  border-radius: 50px;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  padding: 10px 44px;
  font-weight: 500;
  text-transform: uppercase;
  white-space: nowrap;

  color: ${({ isWhite }) => (isWhite ? "black" : "white")};
  text-decoration: none;
  cursor: pointer;

  animation: ${({ isAnimation }) =>
    isAnimation ? `${Animation} 4s ease forwards` : "none"};
  &:hover {
    opacity: 0.9;
  }
  ${({ theme }) => theme.mq.desktop} {
    font-size: 1rem;
  }
`;
