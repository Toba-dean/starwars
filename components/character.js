import Link from 'next/link';
import styled from 'styled-components'

const character = ({ character }) => {
  return (
    <CharacterContainer>
      <Link href={`/id/${character.id}.json`}>
        <img src={character.image} alt={character.name} />
      </Link>

      <Link href={`/id/${character.id}.json`}>
        <h1>{character.name}</h1>
      </Link>
      <Decal />
    </CharacterContainer>
  )
}

const CharacterContainer = styled.div`
  width: 266px;
  background-color: #282727;
  border-radius: 6px;
  position: relative;
  transition: all .3s ease;
  overflow: hidden;
  z-index: 1;

  :hover {
    transform: scale(1.05);
  }

  > a > img {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width: 266px;
    height: 300px;
    border-bottom: 2px solid #9e4f60;
  }

  > a > h1 {
    padding: 8px;
    display: inline-block;
    color: #ddd;
    font-size: 17px;
    text-transform: uppercase;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    background-image: url("https://static-mh.content.disney.io/starwars/assets/shared/bg_hash_top@2x-1d6544f5cc3a.png");
    transition: color 125ms;

    :hover {
      color: #9e4f60;
    }
  }
`;

const Decal = styled.div`
  width: 47px;
  height: 47px;
  opacity: .06;
  position: absolute;
  bottom: -32px;
  right: 10px;
  background-size: 300% 200%;
  transform: scaleY(-1);
  background-position: -100% 0;
  background-image: url("https://static-mh.content.disney.io/starwars/assets/shared/decal@2x-937ac7c57dff.png");
`;

export default character
