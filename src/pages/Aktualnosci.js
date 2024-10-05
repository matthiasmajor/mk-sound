import React, { useState } from "react";
import { graphql } from "gatsby";
import styled, { ThemeContext } from "styled-components";
import { HighlightedHeading } from "../components/HighlightedHeading/HighlightedHeading";
import { Link } from "gatsby";
import dots from "../images/Dots.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image from "../images/aktualnosci_background.jpg";

export const Wrapper = styled.div``;

export const Content = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
  a {
    text-decoration: none;
    color: black;

    margin: 40px auto;
  }
  span {
    font-weight: bold;
  }
  p {
    font-weight: 600;
    color: hsl(280, 21%, 17%);
    font-size: 0.9rem;
  }
  h4 {
    color: #321540;
    font-size: 1.5rem;
    margin: 0;
    font-weight: bold;
  }
  img:nth-of-type(2) {
    position: absolute;
    z-index: -1;
    inset: 50% 300px 70% 7000px;
  }
`;

export const MissingContent = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  aspect-ratio: 3/2;
  width: 70%;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 40px;
  position: relative;
  object-fit: contain;
  ${({ theme }) => theme.mq.desktop} {
    width: 45%;
    border: 10px solid white;
  }
`;
export const Blur = styled.div`
  content: "";
  position: absolute;
  border-radius: 706px;
  background: rgba(84, 111, 255);
  filter: blur(400px);
  width: 20%;
  height: 530px;
  top: 1000px;
  left: 0px;
  z-index: -1;
`;
export const SecondBlur = styled.div`
  content: "";
  position: absolute;
  border-radius: 706px;
  background: #c7386882;
  filter: blur(400px);
  width: 20%;
  height: 630px;
  top: 500px;
  right: 0px;
  z-index: -1;
`;
export const TitleWrapper = styled.div`
  text-align: center;
  margin-top: 150px;
`;
export const WrapperContent = styled.div`
  text-align: center;

  ${({ theme }) => theme.mq.desktop} {
    margin-top: 50px;
  }
`;

const Aktualnosci = ({
  data: {
    dzwiek: { nodes: dzwiek = [] },
  },
}) => {
  const [list, useList] = useState(dzwiek);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <HighlightedHeading>Aktualności</HighlightedHeading>
      </TitleWrapper>

      <WrapperContent image={image}>
        <Blur />
        <SecondBlur />
        {list ? (
          <Carousel infinite={true} responsive={responsive}>
            {list.map((item) => (
              <Content>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <span>{item.date}</span>
                <Image src={item.image.url} />
                <img src={dots} alt="dots" />
                <a style={{ fontWeight: "bold" }} href={item.link}>
                  Zobacz Materiał
                </a>
              </Content>
            ))}
          </Carousel>
        ) : (
          <MissingContent />
        )}
      </WrapperContent>
    </Wrapper>
  );
};

export const query = graphql`
  query Dzwiek {
    dzwiek: allContentfulDzwiekNaPlanie {
      nodes {
        title
        description
        date
        link
        image {
          url
        }
      }
    }
  }
`;

export default Aktualnosci;
