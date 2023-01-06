import { useState } from "react";
import styled from "styled-components";
import Head from "next/head";


export default function Characters({ characters }) {

  const [value, setValue] = useState(12);
  const handleShowMore = () => {
    setValue(value + 12);
  }

  return (
    <>
      <Head>
        <title>Star Wars Characters | starwars.com</title>
      </Head>
      <HomeScreenContainer>
        <StarFieldLeft />

        <CharacterContainer>
          {
            characters.filter(character => character.id !== 28 && character.id !== 77)
              .map((character, idx) => (
                idx < value && <Character key={character.id} character={character} />
              ))
          }
        </CharacterContainer>

        <StarFieldRight />
      </HomeScreenContainer>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://akabab.github.io/starwars-api/api/all.json");
  const characters = await res.json();

  return {
    props: {
      characters
    }
  }
}

const HomeScreenContainer = styled.div``;
const StarFieldLeft = styled.div``;
const StarFieldRight = styled.div``;
const CharacterContainer = styled.div``;