import React from "react";
import { theme } from "../assets/theme";
import { styled } from "styled-components";
import { CornerEffect } from "../components/CornerEffectProvider/CornerEffect";
import one_photo from "../images/kotwaimages/kotwa_7.jpg";
import second_photo from "../images/kotwaimages/kotwa_1.jpg";
import third_photo from "../images/kotwaimages/kotwa_2.jpg";
import fourth_photo from "../images/kotwaimages/kotwa_3.jpg";
import fivth_photo from "../images/kotwaimages/kotwa_4.jpg";
import sixth_photo from "../images/kotwaimages/kotwa_5.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { HighlightedHeading } from "../components/HighlightedHeading/HighlightedHeading";

export const ImagesOfertaWrapper = styled.div`
margin:40px 0 20px 0;
display:flex;
flex-direction:column;
gap:20px;
max-height:1060px;
position:relative;

&:before {
  position: absolute;
  content: "";
  left:50%;

  background-color: hsl(0, 0%, 81%);
  width: 10%;
  height: 1px;
}

${({ theme }) => theme.mq.desktop} {
  max-height: 1040px;
  max-width: 1160px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1f 1fr;
  margin-top: 60px;
  grid-gap: 20px;
  position:relative;
  
  
  img:nth-child(1) {
    grid-column-start: 1;
    grid-row:start:1;
    grid-row-end: 2;
  }
  img:nth-child(2) {
    grid-column-start: 1;
    grid-row-start: 2;
    grid-row-end: 5;
  }
  img:nth-child(3) {
    grid-column-start: 2;
    grid-row-start:1;
    grid-row-end:span 2;
  }
  img:nth-child(4) {
    grid-column-start: 2;

    grid-row-start:3;
    grid-row-end:span 3;
  }
  img:nth-child(5) {
    grid-column-start: 3;
    grid-row-start:1;
    grid-row-end:span 2;
    
  }
  img:nth-child(6) {
    grid-column-start: 3;
    grid-row-start:2;
    grid-row-end:span 5;
  }
}
`;
export const ShowCaseCorner = styled(CornerEffect)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: ${({ isHidden }) => (isHidden ? "none" : "flex")};
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
  }
`;
export const ImagesOfertaSmall = styled.img`
  height: 200px;
  width: 400px;
  object-fit: cover;

  ${({ theme }) => theme.mq.desktop} {
    width: 360px;
    height: ${({ isBig }) => (isBig ? "640px" : "360px")};
    object-fit: cover;
  }
`;
export const Wrapper = styled(motion.div)`
  width: 100%;
  display: grid;
  justify-content: center;
  margin-top: 140px;
  margin-bottom: 200px;

  h2 {
    text-align: center;
    font-weight: 200;
    font-size: 27.92px;
    position: relative;
  }
  ${({ theme }) => theme.mq.desktop} {
    font-size: 2rem;
    h2 {
      font-size: 41.89px;
      &:before {
        position: absolute;
        content: "";
        inset: 55px 500px;

        background-color: hsl(0, 0%, 81%);
        width: 10%;
        height: 1px;
      }
    }
  }
`;

const Galeria = () => {
  const second = true;
  return (
    <Wrapper
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      {/* <h2 width="10">Zdjecia z planów zdjęciowych</h2> */}

      {/*  <HighlightedHeading width="20px" isRight>
        Zdjecia z planów zdjęciowych
      </HighlightedHeading> */}

      <ImagesOfertaWrapper>
        <ImagesOfertaSmall src={one_photo} />
        <ImagesOfertaSmall isBig src={second_photo} />
        <ImagesOfertaSmall isBig src={third_photo} />
        <ImagesOfertaSmall src={fourth_photo} />
        <ImagesOfertaSmall src={fivth_photo} />
        <ImagesOfertaSmall isBig src={sixth_photo} />
        <ShowCaseCorner
          position="topLeft"
          size="100px"
          distance="30px"
          color="beige"
        />
        <ShowCaseCorner
          isHidden
          position="bottomRight"
          size="100px"
          distance="30px"
          color="beige"
        />
      </ImagesOfertaWrapper>
      {/*  <ImagesOfertaWrapper isSecond={second}>
        <ImagesOfertaSmall isDisplayed src={one_photo} />
        <ImagesOfertaSmall isBig src={second_photo} />
        <ImagesOfertaSmall isBig src={third_photo} />
        <ImagesOfertaSmall src={fourth_photo} />
        <ImagesOfertaSmall src={fivth_photo} />
        <ImagesOfertaSmall isBig src={sixth_photo} />

        <ShowCaseCorner
          isHidden
          position="bottomRight"
          size="100px"
          distance="30px"
          color="beige"
        />
      </ImagesOfertaWrapper> */}
    </Wrapper>
  );
};

export default Galeria;
