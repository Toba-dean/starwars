import { useRouter } from "next/router";

import styled from "styled-components";
import { CharacterCard } from "../../components";

const SingleCharacter = ({ character }) => {
  return (
    <CharacterContainer>
      <StarFieldLeft />
      <CharacterCard character={character} />
      <StarFieldRight />
    </CharacterContainer>
  )
}

export default SingleCharacter

const CharacterContainer = styled.div`
  padding: 40px;
  margin-top: 200px;
  
`;

const StarField = styled.div`
  position: fixed;
  width: 100px;
  top: 0;
  height: 1700px;
  background-repeat: repeat-y;
`;

const StarFieldLeft = styled(StarField)`
  left: 0;
  background-position: left center;
  background-size: 100% auto;
  background-image: url("https://static-mh.content.disney.io/starwars/assets/background/bg_starsL-fd4661a3ccea.jpg");
`;

const StarFieldRight = styled(StarField)`
  right: 0;
  background-position: right center;
  background-size: auto 100%;
  background-image: url("https://static-mh.content.disney.io/starwars/assets/background/bg_starsR-655c85e404d4.jpg");
`;

export async function getStaticProps({ params }) {
  const res = await fetch(`https://akabab.github.io/starwars-api/api/id/${params.id}`);
  const character = await res.json();

  return {
    props: {
      character
    }
  }
}

export async function getStaticPaths() {
  const res = await fetch("https://akabab.github.io/starwars-api/api/all.json");
  const characters = await res.json();

  const paths = characters.map(character => `/id/${character.id}.json`)

  return {
    paths,
    fallback: false
  }
}