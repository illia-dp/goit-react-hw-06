import { IoPersonSharp, IoCall } from "react-icons/io5";
import s from "./Contact.module.css";

const Contact = ({ id, name, number, deleteContact }) => {
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
      <button className={s.button} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
