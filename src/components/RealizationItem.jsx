import React from "react";
import styled from "styled-components";

function RealizationItem({ logo, company, product, status, date }) {
  return (
    <ItemWrapper>
      <CompanyInfo>
        {/* <LogoWrapper>
          <Logo loading="lazy" src={logo} />
        </LogoWrapper> */}
        <CompanyName>{company}</CompanyName>
        <Separator />
        <ProductName>{product}</ProductName>
      </CompanyInfo>
      <StatusInfo>
        <Status>{status}</Status>
        <DateWrapper>
          <Separator />
          <Date>{date}</Date>
        </DateWrapper>
      </StatusInfo>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.article`
  z-index: 10;
  display: flex;
  /* margin-top: 40px; */
  /* background-color: rgb(139, 48, 181, 0.2); */
  width: 100%;
  padding: 5px 0;
  justify-content: space-between;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LogoWrapper = styled.div`
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 0;
`;

const Logo = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 32px;
`;

const CompanyName = styled.span`
  color: #2d2d2d;
  font-size: 25.89px;
  font-weight: 600;
  letter-spacing: 1px;
  @media (max-width: 991px) {
    font-size: 16px;
  }
`;

const Separator = styled.div`
  align-self: stretch;
  width: 1px;
  height: 38px;
  background-color: #d5cfcf;
`;

const ProductName = styled.span`
  color: #515151;
  align-self: stretch;
  flex-grow: 1;
  margin: auto 0;
  font: 400 18.89px Montserrat, sans-serif;
  @media (max-width: 991px) {
    font-size: 16px;
  }
`;

const StatusInfo = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 991px) {
    font-size: 16px;
  }
`;

const Status = styled.span`
  font-weight: 400;
  color: #4e3e65;
  font-size: 17.89px;
  margin: auto 0;
  @media (max-width: 991px) {
    font-size: 16px;
  }
`;

const DateWrapper = styled.div`
  display: flex;
  gap: 11px;
  color: #2d2d2d;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
    font-size: 16px;
  }
`;

const Date = styled.span`
  flex-grow: 1;
  margin: auto 0;
  font-size: 18.89px;
  font-weight: 500;
`;

export default RealizationItem;
