import Contact from "../contact/Contact";
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.contactList}>
    {contacts.map(contact => (
      <li key={contact.id} className={css.contactListItem}>
        <Contact contact={contact} onDelete={onDeleteContact} />
      </li>
    ))}
  </ul>
);

export default ContactList;
