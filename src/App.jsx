import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import { contact } from "./assets/Contact";
import { useEffect, useState } from "react";

function App() {
  const [contactList, setContactList] = useState(
    () => JSON.parse(localStorage.getItem("contacts")) || contact
  );

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contactList));
  }, [contactList]);

  const handleChangeFilter = (name) => {
    setFilter(name);
  };

  const filteredContactList = contactList.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (formData) => {
    setContactList([...contactList, formData]);
  };

  const deleteContact = (id) => {
    setContactList(contactList.filter((contact) => contact.id !== id));
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox handleChangeFilter={handleChangeFilter} />
      <ContactList
        contactList={filteredContactList}
        deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
