import SearchBar from "./components/SearchBar";
import "./App.css";
import Filter from "./components/Filter";
import PokemonCard from "./components/Card";
import iconSearch from "./assets/icons/search.svg";
import { useState, useEffect } from 'react'
import BigCard from './components/big-card/index.jsx'

function App() {
  const [id, setId] = useState(1)
  const [pokemons, setPokemons]= useState([])
  useEffect(() => { 
    const getPokemons = async () => {
      const httpRequest = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"); 
      const respuesta = await httpRequest.json();
      setPokemons(respuesta.results);
    };

    getPokemons();

  }, []);
  console.log(pokemons)
  return (
    <>
      <SearchBar />
      <Filter />
      {pokemons.map(pokemon => <PokemonCard order={pokemons[pokemon + 1]} name={pokemon.name} img={iconSearch} /> ) }
      
      <BigCard id={id} setId= {setId} pokemons = {pokemons}/>
    </>
  );
}

export default App;
