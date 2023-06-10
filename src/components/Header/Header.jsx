import React from 'react'
import { NavContainer, NavItem, NavLink, NavMenu } from './Header.style'

const Header = () => {
  return (
    <>
    <NavContainer>
      <NavMenu>
        <NavItem>
          <NavLink>HOME</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>ABOUT</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>CONTENT</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>EXPERIENCE</NavLink>
        </NavItem>
      </NavMenu>
    </NavContainer>
    </>
  )
}

export default Header