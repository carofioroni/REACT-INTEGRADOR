import letter from "../../assets/icons/text_format.svg";
import hashtag from "../../assets/icons/tag.svg";
import "./styles.css";

export const sortByName = (a, b) => {
  const nameA = a.name;
  const nameB = b.name;

  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  } else {
    return 0;
  }
};


function Filter({ typeFilter, setTypeFilter }) {
const onClickHandler = ()=> {
  setTypeFilter(typeFilter === "a" ? "n": "a")
}
  return (
    <a className="containerFilter" onClick={onClickHandler}>
      {typeFilter === "a"? (
        <img src={letter} alt="alfabeto icon" />
      ) : (
        <img src={hashtag} alt="numeral icon" />
      )}
    </a>
  );
}

export default Filter;
