import css from "./SearchBox.module.css";

const SearchBox = ({ serachValue, onSearch }) => {
	return (
		<input
			className={css.searchInput}
			type="text"
			value={serachValue}
			onChange={(evt) => onSearch(evt.target.value)}
			placeholder="Find contacts by name"
		/>
	);
};

export default SearchBox;