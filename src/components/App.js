import { useState, useEffect, useRef } from 'react';
import shortid from 'shortid';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
      parsedContacts
        ? setContacts(parsedContacts)
        : setContacts(initialContacts);

      isFirstRender.current = false;
      return;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    setContacts([contact, ...contacts]);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div>
      <h2>Form Conract</h2>
      <ContactForm onSubmit={addContact} contacts={contacts} />
      <h2>Contacts List</h2>
      <Filter value={filter} onChange={e => setFilter(e.currentTarget.value)} />
      <ContactList contacts={visibleContacts} onRemove={deleteContact} />
    </div>
  );
}
