import styled from "styled-components";

const SocialLink = ({ image }) => {
  return (
    <Link href="/" image={image}>
      <span />
    </Link>
  )
}

export default SocialLink

const Link = styled.a`
  transition: background-color 350ms;

  :hover > span {
    background-color: #ccc;
  }

  span {
    display: block;
    background-color: #999;
    height: 21px;
    width: 21px;
    mask: ${({ image }) => image && "url(" + image + ") no-repeat 50% 50%"};
    transition: background-color 350ms;
  }
`;