import { useState } from "react";
import styled from "styled-components";
import Head from "next/head";

import { Character } from "../components";

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

        {
          value < characters.length && (
            <Button onClick={handleShowMore}>SHOW MORE</Button>
          )
        }

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

const CharacterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  margin-top: 200px;
  padding: 30px;
  background-color: #151515;
`;

const StarField = styled.div`
  position: fixed;
  width: 200px;
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

const Button = styled.button`
  color: #aaa;
  background-color: transparent;
  border: none;
  font-family: inherit;
  margin: 20px auto 40px;
  font-size: 18.4px;
  display: block;
  transition: all .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  :hover {
    cursor: pointer;
    color: #fff;

    ::after {
      border-bottom-color: #fff;
      width: 100%;
    }
  }

  ::after {
    content: " ";
    display: block;
    width: 40%;
    margin: 0 auto;
    opacity: .9;
    border-bottom: 1px solid transparent;
    transition: border-color 200ms, width 250ms;
  }
`;