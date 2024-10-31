import React from "react";
import styled, { ThemeContext } from "styled-components";
import { ContactForm } from "../components/ContactForm/ContactForm";
import mobile from "../assets/icons/mobile.svg";
import { HighlightedHeading } from "../components/HighlightedHeading/HighlightedHeading";
import { useLottie } from "lottie-react";
import kontakt from "../assets/kontakt.json";
import { motion, useScroll, useTransform } from "framer-motion";
import { theme } from "../assets/theme";
import { BsTelephone } from "react-icons/bs";

export const ContentWrapper = styled(motion.div)`
  margin-top: 60px;
  padding: 20px;
  ${({ theme }) => theme.mq.desktop} {
    width: 1160px;
    margin: 100px auto 20px auto;
    max-width: 1920px;
  }
`;
export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: space-between;
    align-items: center;
    grid-gap: 50px;
  }
`;
export const Left = styled.div`
  grid-column: 1/2;
  justify-content: left;

  div:nth-child(first) {
    margin-left: 28px;
  }
`;
export const Right = styled.div`
  grid-column: 2/2;
  display: none;
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
  }
`;
export const Image = styled.img`
  display: none;
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    height: 700px;
    width: 110%;
    object-fit:cover;
    margin-top:80px;
`;
export const ContactFormWrapper = styled.div`
  margin-top: 40px;
  margin-left: -20px;

  ${({ theme }) => theme.mq.desktop} {
    margin-left: -230px;
  }
`;

const Kontakt = () => {
  const options = {
    animationData: kontakt,
  };

  const { View } = useLottie(options);
  return (
    <ContentWrapper
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Container>
        <Left>
          <HighlightedHeading width="70" isLeft>
            Kontakt
          </HighlightedHeading>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              marginLeft: "0px",
              gap: "10px",
            }}
          >
            <BsTelephone style={{ fontSize: "1.2rem" }} />

            <p style={{ fontWeight: "bold" }}>501 169 710</p>
          </div>
          <ContactFormWrapper>
            <ContactForm style={{ transform: "translateX(400px)" }} />
          </ContactFormWrapper>
        </Left>
        <Right>
          <motion.div>{View}</motion.div>
        </Right>
      </Container>
    </ContentWrapper>
  );
};
export default Kontakt;
