import styled from "styled-components";

const NavBarLink = ({ title }) => {
  return (
    <NavLink>
      <h1>{title}</h1>
    </NavLink>
  )
}

export default NavBarLink

const NavLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #333;
  height: 100%;
  text-decoration: none;
  padding: 0 25px;
  transition: color 100ms;
  color: #999;
  cursor: pointer;

  :hover {
    color: #fff;
  }

  :last-of-type {
    border-right: 1px solid #333;
  }

  h1 {
    font-size: 14px;
    letter-spacing: 1px;
  }
`;