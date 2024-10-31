import styled from "styled-components";
import { StyledIcon } from "../StyledIcon/StyledIcon";
import { keyframes } from "styled-components";

const animation = keyframes`
from {
  padding:0;
}
to {
  height:30px;
}
`;

export const Wrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  align-items: center;
  /* justify-content: space-evenly; */
  padding: 50px;
  overflow-y: hidden;

  ${({ theme }) => theme.mq.desktop} {
    position: static;
    display: flex;
    gap: 60px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: unset;
    background-color: transparent;
    padding: 0;
  }
`;
export const OuterWrapper = styled.div`
  p {
    z-index: 1000;
    padding: 5px;

    margin-left: 40px;
    a {
      z-index: 1000;
      text-decoration: none;
      font-family: ${({ theme }) => theme.font.family.cormorant};
      font-size: 1.3rem;
      color: black;
    }
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin: 0;
  top: 0%;
  position: fixed;
  z-index: 10000;
  background-color: white;
  overflow-y: hidden;

  ${({ theme }) => theme.mq.desktop} {
    margin: 0;
    padding: 0px;
    position: fixed;
    background: white;
    box-shadow: ${({ isScrolled }) =>
      isScrolled ? "5px 6px 7px rgba(0, 0, 0, 0.062)" : "none"};
    height: 80px;
    display: flex;
    align-items: center;
  }
`;
export const StyledBurger = styled.button`
  position: relative;
  top: 3%;
  right: 2rem;
  justify-content: space-around;
  width: 5px;
  height: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    display: flex;
    margin-bottom: 3px;
    width: 25px;
    height: 5px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    background-color: black;
  }

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;

export const StyledSocialIcon = styled(StyledIcon)`
  z-index: 1001;
  display: inline-block;
  width: 50px;
  height: 50px;
  padding: 0;
  margin: 0 20px;
  color: black;
  font-size: 1.5rem;
  img {
    width: 100%;
  }
  ${({ theme }) => theme.mq.desktop} {
    width: 25px;
    height: 25px;
    margin: 0 15px;
    padding: 0;
  }
`;

export const StyledNavigation = styled.nav`
   

  ul {
    list-style: none;
    text-align: center;
    padding: 20px;
    
    
    
    
  }
  li {
    &:hover {
      opacity:0.8;
    }
    
    
    a {
      display: inline-block;
      padding: 25px 0;
      text-decoration: none;
      color:black;
      &:hover {
        opacity:0.7;
      }
      
      
    }
  }
  ${({ theme }) => theme.mq.desktop} {

    margin-left:auto;
    
    ul {
      display:flex;
      gap:20px;
      
      
    }
    li {
      font-family:${({ theme }) => theme.font.family.cormorant};
      
      
      
      a {
        padding: 0 10px;
        text-decoration: none;
        color:black;
        font-family:${({ theme }) => theme.font.family.cormorant};
        font-size:1.3rem;
        
        

      }
    }
  }
}
${({ theme }) => theme.mq.desktop} {
  
  margin-left: auto;
  
  
  ul {
    
    margin:0;
    font-family:${({ theme }) => theme.font.family.cormorant};
    
    
    li {
     
    
      font-family:${({ theme }) => theme.font.family.cormorant};
    }
  }
}
`;
