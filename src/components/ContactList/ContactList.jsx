import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter.text);
  const filteredContactList = contacts.filter((contact) =>
    filter === ""
      ? contacts
      : contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={s.contactList}>
      {filteredContactList.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </div>
  );
};
export default ContactList;
