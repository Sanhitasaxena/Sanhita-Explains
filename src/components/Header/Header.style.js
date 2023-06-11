import styled from "styled-components";
import { Link } from 'react-router-dom'


export const NavContainer = styled.div`
  background-color: pink;
  height: ${(props) => props.isToggleOpen ? "auto": "70px"};
  display: flex;
`;

export const NavMenu = styled.ul`
  list-style: none;
  margin: 0px;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  overflow-x: hidden;

  @media screen and (max-width: 430px){
    visibility: hidden;
  }

`;
export const NavItem = styled.li`
  color: black;
  list-style: none;
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  text-align: center;
`;

export const ToggleButtonDiv = styled.div`
    display: flex;
    align-items: center;
    padding-right: 10px;

`

export const ToggleOpen = styled.ul`
  list-style: none;
  line-height: 10px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 430px){
    visibility: hidden;
  }
`
