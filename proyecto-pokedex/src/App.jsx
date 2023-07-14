import SearchBar from "./components/SearchBar";
import "./App.css";
import Filter from "./components/Filter";
import PokemonCard from "./components/Card";
import iconSearch from "./assets/icons/search.svg";
import { useState } from 'react'
import BigCard from './components/big-card/index.jsx'

function App() {
  const [id, setId] = useState(1)
  return (
    <>
      <SearchBar />
      <Filter />
      <PokemonCard order="001" name="pokemon" img={iconSearch} />
      <BigCard id={id}/>
    </>
  );
}

export default App;
