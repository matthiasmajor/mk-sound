import React from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";

export const Element = styled.div`
  width: 100%;

  padding-bottom: 26px;
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: Center;
  margin: 20px 0 20px 0;

  box-shadow: 0px 3px 7px 3px #d4d4d4;
  padding: 40px 30px;
  transition: 0.5s;
  &:hover {
    transform: translateY(-10px);
  }
  min-width: 300px;
  img {
    width: 100%;
    max-height: 650px;
    object-fit: cover;
  }
  p {
    margin: 26px 0 0 0;
    font-size: 0.875rem;
    color: hsl(0, 0%, 40%);
  }
  div:nth-child(1) {
    display: flex;
    column-gap: 10px;
  }
  div:nth-child(2) {
    display: flex;
    aspect-ratio: 1 / 1;
    width: 40px;
  }
  h3 {
    margin: 37px 0 0 0;
    font-size: 1rem;
    font-weight: 600;
  }
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: column;
    max-width: 361px;

    align-items: center;

    h3 {
      font-weight: 500;
      font-family: ${({ theme }) => theme.font.family.cormorant};
      font-size: 1.7rem;

      text-align: center;
    }
    p {
      padding: 0;
      font-size: 0.875rem;

      text-align: left;
    }
    img {
      max-height: 314px;
    }
  }
`;

export const Item = ({ id, name, desc, url, icon, logo, soundDevice }) => (
  <Element key={id}>
    <div>
      {icon}
      {logo}
    </div>
    <h3>{name}</h3>

    <div>{soundDevice}</div>
  </Element>
);
