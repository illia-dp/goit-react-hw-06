import { useDispatch } from "react-redux";
import { setFilterAction } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.filter}>
      <span>Find contacts by name</span>
      <input
        className={s.input}
        onChange={(e) => dispatch(setFilterAction(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
