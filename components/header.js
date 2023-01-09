import Link from "next/link";
import styled from "styled-components";

import SocialLinks from "./socialLinks";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <SocialLinks />
      </HeaderLeft>

      <Link href='/'>
        <img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" alt="logo" />
      </Link>

      <HeaderRight>
        <HeaderSearch>
          <input type="text" placeholder="search star wars" />

          <img src="https://static-mh.content.disney.io/starwars/assets/navigation/icon_search-957a123fdb62.svg" alt="icon-search" />
        </HeaderSearch>

        <HeaderActions>
          <button>LOG IN</button>
          <span>//</span>
          <button>SIGN UP</button>
        </HeaderActions>
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  padding: 20px;
  background-image: url("https://static-mh.content.disney.io/starwars/assets/navigation/navigation_stars@2x-815223a7aade.jpg");
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;


  > a > img {
    object-fit: contain;
    height: 110px;
  }
`;

const HeaderLeft = styled.div``;

const HeaderRight = styled.div``;

const HeaderSearch = styled.div`
  width: 248px;
  border-radius: 4px;
  background-color: #343434;
  box-shadow: none;
  position: relative;
  border: none;
  opacity: .7;
  height: 40px;
  transition: opacity 350ms;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  :focus-within {
    opacity: 1;
  }

  > input {
    background: transparent;
    border: none;
    outline: none;
    font-weight: 400;
    font-size: 15px;
    color: #fff;

    ::placeholder {
      opacity: 1;
      color: gray;
    }
  }

  > img {
    object-fit: contain;
    height: 20px;
  }
`;

const HeaderActions = styled.div`
  width: 100%;
  color: #999;
  margin-top: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  button {
    background: transparent;
    font-weight: 600;
    border: none;
    color: #999;
    font-size: 14px;
    letter-spacing: 2px;
    cursor: pointer;
    transition: color 250ms;
    
    :hover {
      color: #ccc;
    }
  }
  
  span {
    margin: 0 5px;
    color: #343434;
    font-size: 1.125em;
    font-weight: 500;
  }
`;