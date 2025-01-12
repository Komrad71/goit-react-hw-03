import Contact from "../contact/Contact";
import css from './ContactList.module.css'
const ContactList = ({ contacts, onDeleteContact }) => {
	return (
		<ul className={css.contactList}>
			{contacts.map((item) => {
				return (
					<li key={item.id}>
						<Contact
							contact={item.name}
							number={item.number}
							id={item.id}
							onDeleteContact={onDeleteContact}
						/>
					</li>
				);
			})}
		</ul>
	);
};

export default ContactList;


