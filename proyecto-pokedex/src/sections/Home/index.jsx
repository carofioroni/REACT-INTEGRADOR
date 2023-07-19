import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import Filter, {sortByName} from "../../components/Filter";
import PokemonCard from "../../components/Card";
import pokeball from "../../assets/icons/pokeball.svg";
import "./styles.css";

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [tablePoke, setTablePoke] = useState([]);
  const [form, setForm] = useState({ namePokemon: "" });
  const [typeFilter, setTypeFilter] = useState("n");
  const [sortedPokemons, setSortedPokemons] = useState([])

  const handleChange = (e) => {
    setForm((lastForm) => ({ ...lastForm, namePokemon: e.target.value }));
    searchPokemon(e.target.value);
  };

  const searchPokemon = (namePokemon) => {
    const result = pokemons.filter((element) => {
      if (element.name.includes(namePokemon)) {
        return element;
      }
    });
    setSortedPokemons(result);
  };

  const resetSearchBar = () => {
    setForm({ namePokemon: "" });
    searchPokemon('');
  };

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
  
setSortedPokemons (typeFilter === "n"? [...pokemons] : [...sortedPokemons].sort(sortByName))
}, [typeFilter])


  return (
    <div className="home-container">
      <div>
        <div className="header">
          <img src={pokeball} alt="Pokeball" />
          <h1>Pokédex</h1>
        </div>
        <div className="search-and-filter">
          <SearchBar
            value={form.namePokemon}
            onChange={handleChange}
            onClose={resetSearchBar}
          />
          <Filter typeFilter={typeFilter} setTypeFilter={setTypeFilter} />
        </div>
      </div>
      <div className="cards-container">
        {sortedPokemons.map((pokemon) => {
          const url = pokemon.url.split("/");
          const id = url[6];
          return (
            <PokemonCard
              key={pokemon.name}
              order={id}
              nextPokemon="pikachu"
              name={pokemon.name}
              img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
