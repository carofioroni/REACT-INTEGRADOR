import { useNavigate } from "react-router-dom";
import "./styles.css";
function PokemonCard({ order, name, img, nextPokemon }) {
 const navigate = useNavigate()
  const goToDetails = ()=> {
  navigate(`/pokemon/${name}`, {state:{nextPokemon}})
 }
  return (
    <div onClick={goToDetails} className="smallCard">
      <p className="orderPoke">#{order}</p>
      <img className="imagePoke" src={img} alt="pokemon" />
      <h2 className="namePoke">{name}</h2>
    </div>
  );
}

export default PokemonCard;
