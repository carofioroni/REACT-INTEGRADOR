import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import Filter, {sortByName} from "../../components/Filter";
import PokemonCard from "../../components/Card";
import pokeball from "../../assets/icons/pokeball.svg";
import "./styles.css";

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [typeFilter, setTypeFilter] = useState("n");
  const [sortedPokemons, setSortedPokemons] = useState([])


  useEffect(() => {
    const getPokemons = async () => {
      const httpRequest = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=20"
      );
      const respuesta = await httpRequest.json();
      setPokemons(respuesta.results);
      setSortedPokemons([...respuesta.results])
    };

    getPokemons();
  }, []);

useEffect (()=> {
  
setSortedPokemons (typeFilter === "n"? [...pokemons] : sortedPokemons.sort(sortByName))
}, [typeFilter])

// console.log(sortedPokemons)
  return (
    <div className="home-container">
      <div>
        <div className="header">
          <img src={pokeball} alt="Pokeball" />
          <h1>Pokédex</h1>
        </div>
        <div className="search-and-filter">
          <SearchBar />
          <Filter typeFilter={typeFilter} setTypeFilter={setTypeFilter}/>
        </div>
      </div>
      <div className="cards-container">
        
        {sortedPokemons.map((pokemon, i) => {
          console.log(pokemon)
          console.log(i)
          return <PokemonCard
            key={pokemon.name}
            order={i + 1}
            nextPokemon = 'pikachu'
            name={pokemon.name}
            img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
              i + 1
            }.png`}
          />
          })}
      </div>
    </div>
  );
}

export default Home;
