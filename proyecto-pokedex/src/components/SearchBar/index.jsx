import iconSearch from "../../assets/icons/search.svg";
import "./styles.css";

function SearchBar({ onChange, value }) {
  return (
    <div className="search-bar">
      <img className="" src={iconSearch} alt="lupa buscadora" />
      <input
        className=""
        onChange={onChange}
        placeholder="Search"
        value={value}
      />
    </div>
  );
}

export default SearchBar;
