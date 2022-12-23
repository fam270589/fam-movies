import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useContext } from "react";
import SearchKeyContext from "../../store/search-ctx";
import styles from "./Navbar.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----Navbar component-----://
const Navbar = (props: Props) => {
	const [isSearch, setIsSearch] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");

	const searchCtx = useContext(SearchKeyContext);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") handleSearch();
	};

	const handleSearch = () => {
		searchCtx?.setSearchKey(searchQuery);
	};

	return (
		<div className={styles.container}>
			<nav className={styles.nav}>
				<h1 className={styles.title}>fam-Movies</h1>
				<p className={styles.tagline}>- Complete movie info database -</p>
				<BsSearch
					className={styles.searchIcon}
					onClick={() => {
						setIsSearch((prevState) => !prevState);
					}}
				/>
				<div className={styles.searchBarDesktop}>
					<input
						type="text"
						className={styles.input}
						placeholder="Search for a movie..."
						onChange={handleChange}
						onKeyDown={handleKeyDown}
					/>
					<button className={styles.button} onClick={handleSearch}>
						Search
					</button>
				</div>
			</nav>
			<div className={isSearch ? styles.searchBar : styles.searchBarHidden}>
				<input
					type="text"
					className={styles.input}
					placeholder="Search for a movie..."
					onChange={handleChange}
					onKeyDown={handleKeyDown}
				/>
				<button className={styles.button} onClick={handleSearch}>
					Search
				</button>
			</div>
		</div>
	);
};

export default Navbar;
