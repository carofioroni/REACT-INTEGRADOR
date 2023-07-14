import letter from "../../assets/icons/text_format.svg";
import hashtag from "../../assets/icons/tag.svg";
import "./styles.css";

function Filter({ onClick, typeFilter }) {
  return (
    <a className="containerFilter" onClick={onClick}>
      {typeFilter ? (
        <img src={letter} alt="alfabeto icon" />
      ) : (
        <img src={hashtag} alt="numeral icon" />
      )}
    </a>
  );
}

export default Filter;
