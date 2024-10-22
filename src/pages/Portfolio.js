import React from "react";
import { ThemeContext, styled } from "styled-components";
import hello from "../assets/hello.json";
import { useLottie } from "lottie-react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../data/data";
import { useThemeContext } from "../context/ThemeContext";
import { theme } from "../assets/theme";

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 20px;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  ${({ theme }) => theme.mq.desktop} {
    padding: 0;
    margin-top: 120px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }
`;
export const Blur = styled.div`
  content: "";
  position: absolute;
  border-radius: 706px;
  background: rgba(84, 111, 255);
  filter: blur(600px);
  width: 30%;
  height: 230px;
  top: 300px;
  left: 0px;
  z-index: -1;
`;
export const Left = styled.div`
  display: flex;
  margin-top: 160px;
  flex-direction: column;
  margin-bottom: 70px;
  position: relative;

  span {
    color: #9238a1;
    font-weight: bold;
  }
  p {
    width: 100%;
    text-align: center;
    font-weight: bold;
    color: #5d5d5d;
    font-size: 25px;
    padding: 0;
    padding: 0;
    margin: 0;
  }
  h2 {
    text-align: center;
  }
  ${({ theme }) => theme.mq.desktop} {
    width: 640px;
    p {
      padding: 0;
      margin: 0;
      font-size: 35px;
    }
  }
`;
export const Right = styled.div`
  p {
    color: hsl(0, 0%, 32%);
  }
  h3 {
    color: hsl(0, 0%, 25%);
  }
  li {
    font-weight: 550;
  }
  ${({ theme }) => theme.mq.desktop} {
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  content: "";
  inset: 100px 10% 10px 400px;
  width: 300px;
  height: auto;
  z-index: -2;
  display: none;
  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;

const Portfolio = () => {
  const options = {
    animationData: hello,
  };
  const { theme } = useThemeContext();

  const { View } = useLottie(options);
  return (
    <Wrapper
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Left>
        <p>
          Nazywam sie <span>Marcin Kotwa.</span>
        </p>
        <p>
          Praca z dzwiękiem to moja pasja i sposób na życie. Pozwól by moje
          doświadczenie pomogło zrealizować nasze wspólne cele.{" "}
        </p>
        <ImageWrapper>{View}</ImageWrapper>
      </Left>
      <Right>
        <VerticalTimeline>
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "5px 5px 5px 5px solid black",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                  fontSize: "1.5rem",
                }}
              >
                <h3 style={{ fontSize: "1.5rem" }}>{item.title}</h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                  }}
                >
                  {item.realizacje}
                </p>
                <p>{item.caption}</p>
                <ul
                  style={{
                    fontSize: "0.9rem",
                    color: "rgba(36, 36, 36, 1)",
                    display: "flex",
                    listStyle: "none",
                    padding: "0",
                    margin: "0",
                    marginTop: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  {item.shows.map((element) => (
                    <li
                      style={{
                        backgroundColor: "#a67777",
                        marginRight: "5px",
                        marginBottom: "5px",
                        padding: "7px",
                        borderRadius: "100px",
                        color: "white",
                        boxShadow: "0px 0px 0px 0px #a67777",
                        fontSize: "14px",
                      }}
                    >
                      {element.show}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </Right>
    </Wrapper>
  );
};

export default Portfolio;
