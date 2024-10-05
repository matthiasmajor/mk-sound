import * as React from "react";
import { useState } from "react";
import { useRef } from "react";
import { Link } from "gatsby";
import { styled } from "styled-components";
import image from "../images/White Blur.jpg";
import { Letters } from "../data/data";
import { Button } from "../components/Buttons/Button";
import marcin from "../images/marcin przy konsolecie.jpg";
import zalando from "../images/zalando.svg";
import nike from "../images/nike.svg";
import skoda from "../images/skoda.svg";
import vogue from "../images/VOGUE_LOGO.svg";
import saint from "../images/Yves_Saint_Laurent_Logo.svg";
import orlen from "../images/orlen-1.svg";
import polsat from "../images/Logo_Polsat.svg";
import cinek from "../images/cinek.jpg";
import pasja from "../images/pasja.jpg";
import netflix from "../images/Netflix_2015_logo.svg";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { HighlightedHeading } from "../components/HighlightedHeading/HighlightedHeading";
import { useLottie } from "lottie-react";
import { DragControls, motion, useScroll, useTransform } from "framer-motion";
import anim from "../assets/animation.json";
import "react-multi-carousel/lib/styles.css";
import { CornerEffect } from "../components/CornerEffectProvider/CornerEffect";
import { useThemeContext } from "../context/ThemeContext";
import { RiSoundModuleFill } from "react-icons/ri";
import { PiMicrophoneStageBold } from "react-icons/pi";
import { RiComputerLine } from "react-icons/ri";
import soundDevice from "../images/SoundDevices-LogoBlack.svg";
import dpa from "../images/dpa-microphones-vector-logo.svg";
import shure from "../images/shure-logo-svg-vector.svg";
import ursa from "images/URSA-STRAPS-White.png";
import ambient from "../images/ambient.jpeg";
import nuendo from "../images/nuendo-seeklogo.svg";
import izotope from "../images/izotope-vector-logo.svg";
import waves from "../images/waves-logo-black.png";
import fab from "../images/fabfilter-vector-logo.svg";
import ssl from "../images/solid-state-logic-seeklogo.com.svg";
import plan from "../images/kotwa_na_planie.jpg";
import sonible from "../images/sonible.png";
import guitar from "../assets/playing_guitar.json";
import Lottie from "lottie-react";
import { ThemeSwitch } from "../components/ThemeSwitch/ThemeSwitch";
import PostProduction from "./PostProduction";

export const ContentWrapper = styled.div`
  width: 100%;
  margin-top: 100px;

  ${({ theme }) => theme.mq.desktop} {
    overflow-x: hidden;
    margin: 80px auto 0 auto;
  }
`;
export const HeroSection = styled(motion.section)`
  background-image: url("${({ image }) => image}");

  height: 100vh;
  width: 100%;
  background-size: cover;
  padding: 30px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin: 0;
    max-width: 400px;
  }

  div:nth-child(2) {
  }
  ${({ theme }) => theme.mq.tablet} {
    h1 {
      max-width: 550px;
      font-size: 4rem;
    }
  }
  ${({ theme }) => theme.mq.bigDesktop} {
    h1 {
      font-size: 5rem;
      max-width: 642px;
      padding: 0;
      margin: 0;
      line-height: 1;
    }
  }
  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: 50% 50%;
  }

  div:first-child {
    ${({ theme }) => theme.mq.desktop} {
      grid-column: 2/2;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;

    ${({ theme }) => theme.mq.desktop} {
      p {
        margin: 0;
      }

      h1 {
        font-size: 5rem;
      }
    }

    p {
      color: hsl(0, 0%, 80%);
      font-size: ${({ theme }) => theme.font.size.submobile};
      font-weight: 700;
      padding: 0;
      margin: 0;
    }
  }
  div:last-child {
    display: flex;
    color: white;
    gap: 15px;

    margin-top: 15px;
  }
`;

export const Oferta = styled.section`
  padding: 30px;
  position: relative;
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    justify-content: center;
  }
`;

export const ImageWrapperAbsolute = styled.div``;

export const OfertImage = styled.img`
  height: 400px;
  width: 100%;
  display: none;
  ${({ theme }) => theme.mq.desktop} {
    height: auto;
    width: 80%;
    margin: 100px auto 100px auto;
    display: block;
  }
`;
export const OfertaDescription = styled(CornerEffect)`
  background: linear-gradient(
    180deg,
    rgba(127, 100, 140, 0.936) 0%,
    #410d5a 100%
  );
  color: white;
  padding: 40px;
  /* border: 8px solid #7f648c; */

  h2 {
    font-size: 41.89px;
  }
  p {
    font-size: 16px;
    text-align: justify;
  }

  ${({ theme }) => theme.mq.desktop} {
    position: absolute;
    top: 100px;
    right: 10%;
    width: 40%;
    padding: 40px;
    min-width: 600px;
  }
`;

export const Technology = styled.section`
  padding: 30px;
  width: 100%;
  
  
    ${({ theme }) => theme.mq.desktop} {
      margin-top:60px;
      padding:0;
      position:relative;
      div:nth-child(1) {
        font-size: 2.5rem;
        text-align: center;
      }
      /* &:before {
        content: "";
        position: absolute;
        width: 200px;
        height: 99px;
        background-color: #453659;
        filter: blur(150px);
        bottom: 0;
        right: -250px;
        z-index: -3;
      }
      &:after {
        content: "";
        position: absolute;
        width: 200px;
        height: 99px;
        background-color: #453659;
        filter: blur(150px);
        top: 0;
        left: 0;
        z-index: -3;
      } */
`;
export const TechnologyTitle = styled.div`
  text-align: center;
  p {
    color: ${({ theme }) => theme.color.gray};
    font-size: 0.875rem;
    text-align: center;
  }
  ${({ theme }) => theme.mq.desktop} {
    p {
      width: 480px;
      font-size: 0.875rem;
      margin: 0 auto;
    }
  }
`;

export const Features = styled(motion.div)`
  margin-top: 40px;

  li {
    list-style: none;
  }

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    margin: auto;
    padding: 0 120px;
    margin-top: 80px;
  }
`;

export const Realizacje = styled.section`
  padding: 20px;
  margin-top: 140px;
  h2 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 200;
    font-family: ${({ theme }) => theme.font.family.cormorant};
    margin-bottom: 60px;
  }
  ${({ theme }) => theme.mq.desktop} {
    padding: 0;
    h2 {
      font-size: 25.89px;
      font-weight: 400;
    }
  }
`;
export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-top: 60px;
  align-items: center;

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0px;
    margin-top: 60px;
    border-top: 2px solid hsl(0, 0%, 80%);
    border-bottom: 2px solid hsl(0, 0%, 80%);
    padding: 30px 20px 30px 20px;
  }
  img {
    height: 35px;
    width: 40%;
    fill: black;
    aspect-ratio: 3/2;
  }
`;

export const VisualSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  h2 {
    display: none;
    text-align: center;
    padding: 0 5px 0 5px;
    font-size: 2.5rem;
    font-family: ${({ theme }) => theme.font.family.cormorant};
  }
  span {
    color: purple;
  }
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: row;
    align-items: center;

    background: linear-gradient(
      180deg,
      #f7f5fa 0%,
      rgba(146, 145, 148, 0.91) 100%
    );
    width: 100%;
    height: 700px;

    h2 {
      display: block;
      text-align: center;
    }

    div:nth-child(1) {
      width: 40%;
      height: 100%;
      img {
        height: 100%;
      }
    }
    div:nth-child(2) {
      width: 60%;
      font-size: 41.89px;
      padding: 0;
      text-transform: uppercase;
      font-family: ${({ theme }) => theme.font.family.cormorant};
    }
  }
`;
export const PostProdukcja = styled.div`
  padding: 20px;
  text-align: center;
  width: 100%;
  margin-bottom: 100px;

  h1 {
    font-size: 2rem;
  }
  ${({ theme }) => theme.mq.desktop} {
    div {
      border: none;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;

    padding: 0;
    position: relative;
  }
`;
export const Left = styled(CornerEffect)`
  border: 1px solid hsl(0, 0%, 80%);
  margin-bottom: 20px;
  padding: 20px;
  position: relative;
  ${({ theme }) => theme.mq.desktop} {
    padding: 50px;
    max-width: 740px;
    h1 {
      font-weight: 200;
    }
    p {
    }
  }
`;
export const Right = styled(motion.div)`
  padding: 20px;
  display: flex;
  gap: 60px;
  flex-direction: column;
  div:nth-child(1) {
    p:nth-child(2) {
      color: #fc7ba7;
    }
  }
  div:nth-child(2) {
    p:nth-child(2) {
      color: #fc7ba7;
    }
  }
  ${({ theme }) => theme.mq.desktop} {
    padding: 50px;

    h2 {
      max-width: 560px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 60px;
  justify-content: Center;
`;
export const Title = styled.div`
  p {
    text-align: center;
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.font.family.cormorant};
    margin-bottom: 60px;
    margin-top: 120px;
  }
`;
export const Section = styled(motion.section)`
  position: relative;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mq.desktop} {
    &:before {
      content: "";
      position: absolute;
      width: 200px;
      height: 99px;
      background-color: #453659;
      filter: blur(150px);
      top: 200px;
      left: 0;
      z-index: -1;
    }
  }
`;
export const Container = styled.div`
  padding: 20px 30px;
  margin-bottom: 120px;
  div:nth-child(1) {
    display: flex;
    justify-content: center;
    flex-direction: column;

    h2 {
      font-weight: 600;
      font-size: 1.9rem;
      text-align: center;
    }
    img {
      display: none;
    }
    span {
      display: none;
    }
  }
  div:nth-child(2) {
    p {
      border-bottom: 1px solid #d0c3c3;
      padding: 30px 0 30px 0;
      text-align: justify;

      color: ${({ theme }) => theme.color.gray};
    }
  }
  span {
    font-size: 1rem;
    font-family: ${({ theme }) => theme.font.family.cormorant};
  }
  ${({ theme }) => theme.mq.desktop} {
    padding: 0px;
    width: 1200px;
    display: flex;
    justify-content: space-evenly;
    margin: 100px auto;
    margin-bottom: 220px;
    gap: 100px;
    div:nth-child(1) {
      display: flex;
      flex-direction: column;
      img {
        display: block;
      }
      h2 {
        font-weight: 700;
        font-size: 2.8rem;

        margin-top: 10px;
      }
      div {
        display: flex;
        p {
          text-align: justify;
        }
      }
    }
    div:nth-child(2) {
      p {
        width: 555px;
        border: none;
        padding: 0;
        text-align: left;
        text-align: justify;
        color: ${({ theme }) => theme.color.gray};
        font-size: 1.2rem;
      }
    }
  }
`;
export const ImageWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 650px;
    object-fit: cover;
  }
`;
export const Aktualnosci = styled.div`
  h2 {
    text-align: center;
  }
`;
export const AktualnosciItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  align-items: Center;
  margin: 0 auto;
  padding: 60px 0 60px 0;

  ${({ theme }) => theme.mq.desktop} {
    width: 1000px;
    padding: 120px 0 120px 0;
  }
`;
export const HighlightedTitle = styled.div``;

export const Element = styled.div`
  width: 80%;
  padding-bottom: 26px;
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: Center;
  justify-content: center;
  margin: 20px auto 20px auto;
  box-shadow: 0px 3px 7px 3px #d4d4d4;
  padding: 40px 30px;
  transition: 0.5s;
  min-width: 300px;

  &:hover {
    transform: translateY(-10px);
  }

  div:nth-child(1) {
  }
  div:nth-of-type(2) {
  }

  img {
    aspect-ratio: 3/2;
    width: 30%;
    margin-right: 8px;
    object-fit: contain;
  }

  h3 {
    margin: 37px 0 20px 0;
    font-size: 17.25px;
    font-weight: 600;
    text-align: center;
    font-weight: 700;
    min-height: 60px;
  }
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    align-items: center;

    h3 {
      font-weight: 500;
      font-family: ${({ theme }) => theme.font.family.cormorant};
      font-size: 25.89px;
      text-align: center;
      min-height: 100px;
      font-weight: 600;
    }
  }
`;

export const LottieWrapper = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;

const IndexPage = () => {
  const { theme, themeToggle } = useThemeContext();
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
      scale: 0,
    },
    animate: (index) => ({
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
      },
    }),
  };

  const options = {
    animationData: anim,
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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

  const { View } = useLottie(options);

  return (
    <ContentWrapper id="main">
      <ThemeSwitch />
      <HeroSection
        image={image}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div>
          <p>MK SOUND - POST PRODUKCJA | DŹWIĘK NA PLANIE</p>
          <h1>
            Jakość audio którą, pokochasz.
            {/* {Letters.map((letter, index) => (
              <motion.h1
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
                key={index}
              >
                {letter}
              </motion.h1>
            ))} */}
          </h1>
          <div>
            <Button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              as={Link}
              to="/Kontakt"
            >
              SKONTAKTUJ SIĘ
            </Button>
            <Button isWhite as={Link} to="/Portfolio">
              O MNIE
            </Button>
          </div>
        </div>
      </HeroSection>
      <Oferta>
        <OfertaDescription
          position="bottomRight"
          size="110px"
          distance="40px"
          isMobile
        >
          <h2>Czym wyróżnia się moja oferta, spośrod innych na rynku?</h2>
          <p>
            Na rynku audio działam juz przeszło 20 lat, zajmuje się dźwiękiem na
            planie, post produkcją reklam i programów telewizyjnych. Moja
            działalność koncentruje się na kompleksowej obsłudze dźwiękowej
            produkcji filmowych i telewizyjnych. Specjalizuję się w
            postprodukcji dźwięku, gdzie dbam o najwyższą jakość ścieżek
            dźwiękowych, zajmując się m.in. miksowaniem, masteringiem oraz
            synchronizacją dźwięku z obrazem. Ponadto, oferuję profesjonalną
            realizację dźwięku na planie, zapewniając idealne nagranie dialogów
            i efektów dźwiękowych bezpośrednio podczas kręcenia scen. Moje
            doświadczenie i zaangażowanie gwarantują doskonałe rezultaty, które
            spełniają najwyższe standardy branżowe.
          </p>
          <p></p>
        </OfertaDescription>
        <LottieWrapper>
          <Lottie animationData={guitar} loop={true} />
        </LottieWrapper>
        <OfertImage src={plan} />
      </Oferta>
      <PostProduction />
      <Technology>
        <TechnologyTitle>
          <HighlightedHeading width="25" isLeft>
            Technologia która inspiruje
          </HighlightedHeading>
          <p></p>
        </TechnologyTitle>
        <Features>
          <Element>
            {/* <div>
              <RiSoundModuleFill /> <PiMicrophoneStageBold />{" "}
            </div> */}
            <h3>Profesjonalny sprzęt nagraniowy renomowanych marek</h3>
            <div>
              <img src={soundDevice} alt="logo" />
              <img src={dpa} alt="logo" />
              <img src={shure} alt="logo" />
              <img src={ambient} alt="logo" />
              <img src={ursa} alt="logo" />
            </div>
          </Element>
          <Element>
            {/*  <div>
              <RiComputerLine />
            </div> */}
            <h3>Profesjonalne oprogramowanie do edycji plików audio</h3>
            <div>
              <img src={nuendo} alt="logo" />
              <img src={waves} alt="logo" />
              <img src={izotope} alt="logo" />
              <img src={fab} alt="logo" />
              <img src={ssl} alt="logo" />
              <img src={sonible} alt="logo" />
            </div>
          </Element>
        </Features>
      </Technology>
      <TitleWrapper>
        <HighlightedHeading isRight width="20">
          Realizujesz reklamę lub wywiad i oczekujesz najwyższej jakości audio?
          Jestem tu dla <strong style={{ color: 116714 }}>Ciebie.</strong>
        </HighlightedHeading>
      </TitleWrapper>
      <VisualSection>
        <div>
          <img src={pasja} alt="cinek" />
        </div>
        <div>
          <h2 isMobile isCormorant>
            DŹWIĘK TO MOJA PASJA.
          </h2>
        </div>
      </VisualSection>

      <Section
        initial={{ opacity: "0", y: 100 }}
        animate={{ opacity: "1", y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {/*  <Container>
          <div>
            <HighlightedHeading width="43" color="beige">
              Post Produkcja Dźwięku
            </HighlightedHeading>
            <div>
              <span>
                <strong>
                  {" "}
                  Przeczytaj dlaczego również warto skorzystać z moich usług
                  post produkcji
                </strong>
              </span>
            </div>
          </div>
          <div>
            <p>
              <strong style={{ color: 116714 }}>Usługi post produkcyjne</strong>{" "}
              również są mozliwe do zrealizowania. Doświadczenie i
              oprogramowanie, którego używam pozwala mi na wykonanie swojej
              pracy w najlepszy możliwy sposób.
            </p>
            <p>
              Zajmuje się post produkcją programów telewizyjnych, reklam,
              zwiastunów, oraz filmów. Nie szukaj u innych, tu dostaniesz
              wszystko czego potrzebujesz.
            </p>
          </div>
        </Container> */}
        <TitleWrapper>
          <HighlightedHeading isLeft width="28">
            Szum, trzaski, przester? Zle nagrany materiał audio nie jest
            przeszkodą by uzyskać profesjonalną jakość dzwięku.
          </HighlightedHeading>
        </TitleWrapper>
        <ImageWrapper>
          <img src={marcin} />
        </ImageWrapper>
      </Section>
      <Realizacje>
        <h2>Zaufali mi</h2>
        <LogoSection>
          <img src={zalando} />
          <img src={nike} />
          <img src={saint} />
          <img src={orlen} />
          <img src={polsat} />
          <img src={vogue} />
          <img src={skoda} />
          <img src={netflix} />
        </LogoSection>
      </Realizacje>
      {/* <Title>
        <p>Opinie klientów</p>
      </Title> */}

      {/*  <PostProdukcja>
        <Left>
          <motion.div
            initial={{ opacity: "0", scale: "0" }}
            animate={{ opacity: "1", scale: "1" }}
            transition={{ delay: "1s", duration: "3s" }}
          >
            {View}
          </motion.div>
        </Left>
        <Right
          ref={ref}
          style={{
            scale: scaleProgess,
            opacity: opacityProgess,
          }}
        >
          <div>
            <h2>
              “Zadanie nie było łatwe, jednak zostało wykonane powyżej
              oczekiwań, dziękuje za współpracę.”
            </h2>
            <div>
              <p>Kuba Latkowski</p>
              <p>Przedsiębiorca</p>
            </div>
          </div>
          <div>
            <h2>
              “Profesjonalizm, praca z Panem Marcinem to czysta przyjemność.”
            </h2>
            <div>
              <p>Marek Syronim</p>
              <p>Reżyser</p>
            </div>
          </div>
        </Right>
      </PostProdukcja> */}

      <Wrapper>
        <HighlightedHeading width="40" color="beige">
          Napisz do mnie!
        </HighlightedHeading>
      </Wrapper>
      <ContactForm />
    </ContentWrapper>
  );
};

export default IndexPage;
