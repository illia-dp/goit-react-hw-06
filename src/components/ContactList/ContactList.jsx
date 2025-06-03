import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contactList, deleteContact }) => {
  return (
    <div className={s.contactList}>
      {contactList.map(({ id, name, number }) => (
        <div key={id}>
          <Contact
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        </div>
      ))}
    </div>
  );
};
export default ContactList;
