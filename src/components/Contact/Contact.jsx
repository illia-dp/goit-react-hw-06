import { IoPersonSharp, IoCall } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { delteContactAction } from "../../redux/contactsSlice";
import s from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.card}>
      <div>
        <p className={s.name}>
          <IoPersonSharp />
          {name}
        </p>
        <p className={s.number}>
          <IoCall />
          {number}
        </p>
      </div>
      <button
        className={s.button}
        onClick={() => dispatch(delteContactAction(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
