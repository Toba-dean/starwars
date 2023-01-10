import Head from "next/head";
import styled from "styled-components";

const CharacterCard = ({ character }) => {

  const updateLocation = (val, idx, self) => {
    return self.indexOf(val) === idx
  }

  const locations = [
    character?.bornLocation, character?.diedLocation, character?.homeWorld
  ]

  return (
    <>
      <Head>
        <title>{character?.name} | StarWars.com</title>
      </Head>

      <CardContainer>
        <img src={character?.image} alt={character?.name} />

        <CharacterInfo>
          <h1>{character?.name}</h1>
          <h4>{character?.affiliations?.length > 0 && "AFFILIATIONS"}</h4>

          {
            character?.affiliations.map((affiliation, idx) => (
              <p key={idx}>{affiliation}</p>
            ))
          }

          <h4>
            {character?.apprentices?.length > 0 && "APPRENTICES"}
          </h4>

          {
            character?.apprentices?.map((apprentice, idx) => (
              <p key={idx}>{apprentice}</p>
            ))
          }

          <h4>
            {
              (character?.bornLocation > 0 && "LOCATIONS") ||
              (character?.diedLocation && "LOCATIONS") ||
              (character?.homeWorld && "LOCATIONS")
            }
          </h4>

          {
            locations.filter(updateLocation).map((location, idx) => (
              <p key={idx}>{location !== '' && location}</p>
            ))
          }

          <h4>GENDER</h4>
          <span>{character?.gender}</span>

          <h4>DIMENSIONS</h4>
          <span>Height: {character?.height}m</span>

          <h4>SPECIES</h4>
          <span>{character?.species}</span>

          <h4>WIKI</h4>
          <a href={character?.wiki} target="_blank" rel="noreferrer">
            Read more about {character?.name}
          </a>
        </CharacterInfo>
      </CardContainer>
    </>
  )
}

export default CharacterCard

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 6px;

  img {
    width: 50vw;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    object-fit: contain;
    border-right: 2px solid #9e4f60;
    background-color: #151515;
  }
`;

const CharacterInfo = styled.div`
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  width: 30vw;
  padding: 20px;
  background-image: url("https://static-mh.content.disney.io/starwars/assets/shared/ng_hash@2x-bd5b31294ea9.png");
  background-size: 7px;
  background-repeat: repeat-x;
  background-position: top left;
  background-color: #282727;

  h1 {
    width: 100%;
    margin: 0 auto;
    color: #ddd;
    font-size: 30px;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  h4{
    color: #ddd;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  p, a {
    color: #9e4f60;
    text-transform: capitalize;
    text-decoration: none;
    transition: color 125ms;

    :hover {
      color: rgb(183, 184, 121);
      cursor: pointer;
    }
  }

  span {
    color: #aaa;
    text-transform: capitalize;
  }
`;