import "./styles.css";
function PokemonCard({ order, name, img, openModal }) {
  return (
    <div onClick={openModal} className="smallCard">
      <p className="orderPoke">#{order}</p>
      <img className="imagePoke" src={img} alt="pokemon" />
      <h2 className="namePoke">{name}</h2>
    </div>
  );
}

export default PokemonCard;
