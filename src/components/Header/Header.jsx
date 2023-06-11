import React, {useState, useEffect} from "react";
import {
  NavContainer,
  NavItem,
  NavLink,
  NavMenu,
  ToggleButtonDiv,
  ToggleOpen,
} from "./Header.style";
import { Sling as Hamburger} from 'hamburger-react'


const Header = () => {

  const [isToggleOpen, setIsToggleOpen] = useState(false)
   
  useEffect(()=>{
      console.log(isToggleOpen? {isToggleOpen} : {isToggleOpen})
  }, [isToggleOpen])


  return (
    <>
      <NavContainer isToggleOpen= {isToggleOpen}>
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
        <ToggleButtonDiv onClick={()=>{
          setIsToggleOpen(curr => !curr)
        }}>
           <Hamburger size={28} duration={0.8}
          />
        </ToggleButtonDiv>

      
      
      </NavContainer>
      {isToggleOpen && (
               <ToggleOpen>
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
               </ToggleOpen>
        )}
    </>
  );
};

export default Header;
