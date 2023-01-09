import styled from "styled-components";

import NavBarLink from "./navbarlink";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarLinks>
        <NavBarLink title="NEWS + BLOG" />
        <NavBarLink title="VIDEO" />
        <NavBarLink title="FILMS" />
        <NavBarLink title="SERIES" />
        <NavBarLink title="INTERACTIVE" />
        <NavBarLink title="COMMUNITY" />
        <NavBarLink title="DATABANK" />
      </NavBarLinks>
    </NavBarContainer>
  )
}

export default NavBar

const NavBarContainer = styled.div`
  border-top: 1px solid #343434;
  background-color: black;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 47px;
  position: fixed;
  top: 145px;
  right: 0;
  left: 0;
  z-index: 10;
`;

const NavBarLinks = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
