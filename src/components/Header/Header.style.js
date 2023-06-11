import styled from "styled-components";
import { Link } from 'react-router-dom'

export const NavContainer = styled.div`
  background-color: pink;
  height: 60px;
`;

export const NavMenu = styled.ul`
  list-style: none;
  margin: 0px;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const NavItem = styled.li`
  color: black;
  list-style: none;
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  text-align: center;
`;
