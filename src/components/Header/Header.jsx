import React from 'react'
import { NavContainer, NavItem, NavLink, NavMenu } from './Header.style'


const Header = () => {
  return (
    <>
    <NavContainer>
      <NavMenu>
        <NavItem>
          <NavLink to="/">HOME</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>ABOUT</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/content">CONTENT</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="experience">EXPERIENCE</NavLink>
        </NavItem>
      </NavMenu>
    </NavContainer>
    </>
  )
}

export default Header