import React from "react";
import styled from "styled-components";
import este from "../images/Pokonac_raka.jpg";
import netflix from "../images/netflix.jpg";
import kandydaci from "../images/kandydaci.jpg";
import kaktus from "../images/kaktus.jpg";
import allegro from "../images/allegro.jpg";
import kubica from "../images/kubica.jpg";
import {
  HighlighedHeading,
  HighlightedHeading,
} from "../components/HighlightedHeading/HighlightedHeading";
import { Link } from "gatsby";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  ${({ theme }) => theme.mq.desktop} {
    max-width: 1400px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    margin: 130px auto;
  }
`;

export const Image = styled.img`
  width: 400px;
  height: 380px;
  ${({ theme }) => theme.mq.desktop} {
    aspect-ratio: 1/2
    border-radius: 1000px;
    border: 20px solid white;
  }
`;

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin-bottom: 60px;

  h3 {
    margin: 0;
    color: rgba(119, 17, 133, 1);
  }

  p {
    margin: 0;
    font-weight: 600;
    font-family: ${({ theme }) => theme.font.family.roboto};
    color: ${({ theme }) => theme.color.gray};
  }

  span {
    background-color: rgb(241, 73, 73, 0.1);
    padding: 10px 15px;
    border-radius: 100px;
    font-weight: 700;
    font-family: ${({ theme }) => theme.font.family.roboto};
    color: ${({ theme }) => theme.color.gray};
  }
`;

export const Blur = styled.div`
  content: "";
  position: absolute;
  border-radius: 706px;
  background: rgba(84, 111, 255);
  filter: blur(400px);
  width: 40%;
  height: 130px;
  top: 100px;
  left: 0px;
  z-index: -1;
`;
export const BlurSecond = styled.div`
  content: "";
  position: absolute;
  border-radius: 706px;
  background: rgb(200, 84, 255);
  filter: blur(400px);
  width: 40%;
  height: 230px;
  top: 0;
  right: 0;
  z-index: -1;
`;

export const HeadingWrapper = styled.div`
  margin-top: 150px;
  text-align: center;
`;

const Realizacje = () => {
  return (
    <div>
      <HeadingWrapper>
        <HighlightedHeading width="60">Realizacje</HighlightedHeading>
      </HeadingWrapper>
      <Wrapper Layout>
        <Blur>he</Blur>

        <Content Layout>
          <Link href="https://www.youtube.com/watch?v=WJZ5D7SV_FA&ab_channel=MissPKproject">
            <Image src={este} />
          </Link>
          <h3>Estee Lauder</h3>

          <p>"Czas pokonać raka piersi"</p>
          <span>Post Produkcja</span>
        </Content>

        <Content Layout>
          <BlurSecond>He</BlurSecond>
          <Link href="https://www.youtube.com/watch?v=WJZ5D7SV_FA&ab_channel=MissPKproject">
            <Image src={netflix} />
          </Link>
          <h3>Netflix</h3>
          <p>"Park Jurajski"</p>
          <span>Dźwięk na planie</span>
        </Content>
        <Content>
          <Link href="https://www.youtube.com/watch?v=WJZ5D7SV_FA&ab_channel=MissPKproject">
            <Image src={kandydaci} />
          </Link>
          <h3>OLX</h3>
          <p>"Kandydaci nie do wzięcia"</p>
          <span>Post Produkcja</span>
        </Content>
        <Content>
          <Link href="https://www.youtube.com/watch?v=WJZ5D7SV_FA&ab_channel=MissPKproject">
            <Image src={kaktus} />
          </Link>
          <h3>Nestle</h3>
          <p>Lody Kaktus</p>
          <span>Dźwięk na planie</span>
        </Content>
        <Content>
          <Link href="https://www.youtube.com/watch?v=WJZ5D7SV_FA&ab_channel=MissPKproject">
            <Image src={allegro} />
          </Link>

          <h3>Allegro</h3>
          <p>"Reklama świąteczna"</p>
          <span>Dźwięk na planie</span>
        </Content>
        <Content>
          <Link href="https://www.youtube.com/watch?v=WJZ5D7SV_FA&ab_channel=MissPKproject">
            <Image src={kubica} />
          </Link>
          <h3>WP</h3>
          <p>Wywiad, Robert Kubica, Daniel Obajtek</p>
          <span>Dźwięk na planie</span>
        </Content>
      </Wrapper>
    </div>
  );
};

export default Realizacje;
