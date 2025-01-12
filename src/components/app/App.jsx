import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import css from "./App.module.css";
import ContactForm from "../contactForm/ContactForm";
import SearchBox from "../searchBox/SearchBox";
import ContactList from "../contactList/ContactList";
import initialContacts from "../contact/Contact.json";

const App = () => {
	const [searchValue, setSearchValue] = useState("");
	const [contacts, setContacts] = useState(() => {
		const lsContacts = window.localStorage.getItem("contacts");

		if (lsContacts) {
			return JSON.parse(lsContacts);
		}

		return initialContacts;
	});

	useEffect(() => {
		window.localStorage.setItem("contacts", JSON.stringify(contacts));
	}, [contacts]);

	const searchContacts = contacts.filter((item) =>
		item.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
	);

	const handleAddContact = (contact) => {
		contact.id = nanoid();
		setContacts((prev) => {
			return [...prev, contact];
		});
	};

	const handleSearchContact = (value) => {
		setSearchValue(value);
	};

	const handleDeleteContact = (contactId) => {
		setContacts((prev) => {
			return prev.filter((contact) => contact.id !== contactId);
		});
	};

	return (
		<section className={css.container}>
			<h1 className={css.title}>Phonebook</h1>
			<ContactForm onAddContact={handleAddContact} />
			<SearchBox value={searchValue} onSearch={handleSearchContact} />
			<ContactList
				contacts={searchContacts}
				onDeleteContact={handleDeleteContact}
			/>
		</section>
	);
};

export default App;