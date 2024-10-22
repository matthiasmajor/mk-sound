import React from "react";
import styled from "styled-components";
import PostProductionImage from "../images/PostProduction.jpg";

const Main = styled.main`
  position: relative;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(rgba(36, 35, 36, 0.7), rgba(58, 9, 89, 0.4)),
    url("${({ Image }) => Image}");
  background-position: 50% 50%;
  background-size: cover;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.6px;
  justify-content: center;
  align-items: center;
  background-attachment: fixed;
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 85%;
  ${({ theme }) => theme.mq.desktop} {
    height: 100%;
  }
`;

const Content = styled.section`
  display: flex;

  flex-direction: column;
  overflow: hidden;
  position: relative;
  min-height: 1121px;
  align-items: center;
  justify-content: start;
  padding: 40px 160px;
  @media (max-width: 991px) {
    padding: 40px 60px;
  }
  ${({ theme }) => theme.mq.desktop} {
    padding: 40px 320px 0 320px;
    position: sticky;
    top: 0;
  }
`;

const TitleSection = styled.h1`
  color: #bb9f9d;
  text-align: center;
  letter-spacing: -0.64px;
  font: 24px Inter, sans-serif;
  margin: 184px 0 30px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
  ${({ theme }) => theme.mq.desktop} {
    font: 41.89px Inter, sans-serif;
  }
`;

const Description = styled.p`
  color: rgba(253, 251, 251, 0.82);
  text-align: center;
  font: 16px Inter, sans-serif;
  line-height: 25px;

  ${({ theme }) => theme.mq.desktop} {
    font: 25.89px Inter, sans-serif;
    line-height: 35px;
  }
`;

const Divider = styled.hr`
  border-color: rgba(255, 255, 255, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  margin-top: 45px;
  height: 1px;
  width: 100%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Subtitle = styled.h2`
  color: #fdfdfd;
  text-align: center;
  letter-spacing: -0.72px;
  margin-top: 68px;
  font: 24px/104% Inter, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }

  ${({ theme }) => theme.mq.desktop} {
    font: 41.89px Inter, sans-serif;
  }
`;

const FeaturesList = styled.ul`
  color: #f8f8f8;
  font: 16px Inter, sans-serif;
  line-height: 30px;

  padding: 0;

  ${({ theme }) => theme.mq.desktop} {
    font: 24px Inter, sans-serif;
  }
`;

const Feature = styled.li`
  margin-top: 10px;
`;

const BottomDivider = styled.hr`
  border-color: rgba(255, 255, 255, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  margin-top: 88px;
  height: 1px;
  width: 100%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const PostProduction = () => {
  return (
    <Main Image={PostProductionImage}>
      {/* <BackgroundImage
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/52ff21bf4780f7ced30a5e3137d2d755e119ed14141dfca16b3a549cd608d7eb?apiKey=9a959c2b02084d0987c58fae314fc2f0&"
        alt="Background"
      /> */}
      <Content>
        <Subtitle>Post Produkcja</Subtitle>
        <Description>
          Szukasz niezawodnego partnera do Post Produkcji swojego filmu? Oferuję
          kompleksowe usługi postprodukcyjne, które wyniosą Twoje projekty na
          nowy poziom. Niezależnie od tego, czy pracujesz nad filmem fabularnym,
          dokumentalnym, reklamą czy teledyskiem – jestem tutaj, aby pomóc.
        </Description>
        <Divider />
        <Subtitle> Dlaczego warto wybrać moje usługi?</Subtitle>
        <FeaturesList>
          <Feature>
            Profesjonalizm: Do każdego projektu podchodzę z pełnym
            zaangażowaniem, dbając o najwyższą jakość wykonania.
          </Feature>
          <Feature>
            Terminowość: Pracuję szybko i efektywnie, zawsze dotrzymując
            ustalonych terminów.
          </Feature>
          <Feature>
            Indywidualne podejście: Każdy projekt jest dla mnie wyjątkowy –
            słucham Twoich potrzeb i dostosowuję się do Twoich wymagań.
          </Feature>
          <Feature>
            Kreatywność: Dzięki mojemu doświadczeniu i umiejętnościom, mogę
            zaoferować innowacyjne rozwiązania, które wyróżnią Twój projekt.
          </Feature>
        </FeaturesList>
        {/* <BottomDivider /> */}
      </Content>
    </Main>
  );
};

export default PostProduction;
