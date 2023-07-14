import SearchBar from "./components/SearchBar";
import "./App.css";
import Filter from "./components/Filter";
import PokemonCard from "./components/Card";
import iconSearch from "./assets/icons/search.svg";

function App() {
  return (
    <>
      <SearchBar />
      <Filter />
      <PokemonCard order="001" name="pokemon" img={iconSearch} />
    </>
  );
}

export default App;
