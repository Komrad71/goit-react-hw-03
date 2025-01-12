import { FaPhoneAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import css from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={css.contact}>
      <div className={css.contactContainer}>
        <div className={css.contactWrapper}>
          <FaPhoneAlt color="#007bhf" />
          <p className={css.contactText}>{contact.name}</p>
        </div>
        <div className={css.contactWrapper}>
          <FaUserAlt color="#007bhf" />
          <p className={css.contactText}> {contact.number}</p>
        </div>
      </div>
      <button className={css.contactBtn} type="button" onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
};

export default Contact;