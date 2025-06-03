import s from "./SearchBox.module.css";

const SearchBox = ({ handleChangeFilter }) => {
  return (
    <div className={s.filter}>
      <span>Find contacts by name</span>
      <input
        className={s.input}
        onChange={(e) => handleChangeFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
