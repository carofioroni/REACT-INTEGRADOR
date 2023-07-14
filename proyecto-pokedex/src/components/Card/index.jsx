import "./styles.css";
function PokemonCard({ order, name, img, openModal }) {
  return (
    <div onClick={openModal} className="card">
      <p className="order">#{order}</p>
      <img className="image" src={img} alt="pokemon" />
      <h2 className="name">{name}</h2>
    </div>
  );
}

export default PokemonCard;
