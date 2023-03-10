import Link from "next/link";
import styled from "styled-components";

import SocialLink from "./sociallink";

const SocialLinks = () => {
  return (
    <LinkContainer>
      <SocialLink image="https://static-mh.content.disney.io/starwars/assets/shared/icon_facebook-aec3b685b1a1.svg" />
      <SocialLink image="https://static-mh.content.disney.io/starwars/assets/shared/icon_instagram-be8807d03d5f.svg" />
      <SocialLink image="https://static-mh.content.disney.io/starwars/assets/shared/icon_tumblr-9dbf2f5872a3.svg" />
      <SocialLink image="https://static-mh.content.disney.io/starwars/assets/shared/icon_twitter-bde9a7f5abaa.svg" />
      <SocialLink image="https://static-mh.content.disney.io/starwars/assets/shared/icon_youtube-ed78c6ee1c7d.svg" />

      <KidsContainer>
        <Link href="/">
          <span />
        </Link>
      </KidsContainer>
    </LinkContainer>
  )
}

export default SocialLinks

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const KidsContainer = styled.div`
  position: relative;
  margin-left: 10px;

  ::before {
    content: "";
    position: absolute;
    top: -7px;
    width: 1px;
    height: 20px;
    background-color: #343434;
    right: 55px;
    border-top: 1px solid #343434;
  }

  a {
    width: 43px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #7a7a7a;
    border-radius: 16px;
    transition: background-color 350ms;

    span {
      width: 31px;
      height: 9px;
      background-repeat: no-repeat;
      background-image: url("https://static-mh.content.disney.io/starwars/assets/shared/icon_kids-dc39fc54f6c2.svg");
    }

    :hover {
      background-color: #ccc;
    }
  }
`;