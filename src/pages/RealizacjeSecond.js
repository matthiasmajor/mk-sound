import React from "react";
import styled from "styled-components";
import RealizationItem from "../components/RealizationItem";
import { HighlightedHeading } from "../components/HighlightedHeading/HighlightedHeading";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { data } from "../data/datatable";
import Table from "../components/ReactTable";
import { Center } from "../styles/table";

const realizationsData = [
  {
    logo: React.createElement(IoIosCheckmarkCircleOutline),
    company: "Nestle",
    product: "Lody Kaktus",
    status: "Dźwięk na planie",
    date: "27-07.2023",
  },
  {
    logo: React.createElement(IoIosCheckmarkCircleOutline),
    company: "Nestle",
    product: "Lody Kaktus",
    status: "Post Produkcja",
    date: "27-07.2023",
  },
  {
    logo: React.createElement(IoIosCheckmarkCircleOutline),
    company: "Nestle",
    product: "Lody Kaktus",
    status: "Post Produkcja",
    date: "27-07.2023",
  },
];

const RealizacjeSecond = () => {
  return (
    <div className="App">
      <h1>Tables</h1>
      <Center V H>
        <Table data={data} />
      </Center>
    </div>
  );
};

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 0;
  margin-top: 150px;
  background: linear-gradient(90deg, #f4f2f7, #eae6ef, #ffffff);
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Container = styled.div`
  /*  background: linear-gradient(20deg, #f3f3f3, #dfd9e8, #fa75bc, #cfddd3); */
  border-radius: 10px;
  display: flex;
  /* margin-top: 223px; */
  width: 70%;
  padding: 10px 40px;
  /*  max-width: 1008px; */
  flex-direction: column;

  @media (max-width: 991px) {
    margin-top: 40px;
    width: 75%;
  }
  ${({ theme }) => theme.mq.desktop} {
    width: 55%;
  }
`;

const SectionTitle = styled.h2`
  color: #060606;
  align-self: center;
  font: 400 26px Montserrat, sans-serif;
`;

const Divider = styled.hr`
  height: 2px;
  border: none;
  background-color: #d5cfcf;
  margin: 0px 0;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const TitleWrapper = styled.div`
  margin: 0 auto;
`;

export default RealizacjeSecond;
