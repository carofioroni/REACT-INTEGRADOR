import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import Filter from "../../components/Filter";
import PokemonCard from "../../components/Card";
import pokeball from "../../assets/icons/pokeball.svg";
import "./styles.css";

function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const httpRequest = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=20"
      );
      const respuesta = await httpRequest.json();
      setPokemons(respuesta.results);
    };

    getPokemons();
  }, []);
  return (
    <div className="home-container">
      <div>
        <div className="header">
          <img src={pokeball} alt="Pokeball" />
          <h1>Pokédex</h1>
        </div>
        <div className="search-and-filter">
          <SearchBar />
          <Filter />
        </div>
      </div>
      <div className="cards-container">
        {pokemons.map((pokemon, i) => (
          <PokemonCard
            key={pokemon.name}
            order={i + 1}
            name={pokemon.name}
            img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
              i + 1
            }.png`}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
