import iconSearch from "../../assets/icons/search.svg";
import iconClose from "../../assets/icons/close.svg";
import "./styles.css";

function SearchBar({ onChange, value, onClose }) {
  return (
    <div className="search-bar">
      <img className="" src={iconSearch} alt="lupa buscadora" />
      <input
        className=""
        onChange={onChange}
        placeholder="Search"
        value={value}
      />
      {value && <img className="" src={iconClose} alt="lupa buscadora" onClick={onClose} />}
    </div>
  );
}

export default SearchBar;
