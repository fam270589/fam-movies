import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "./Navbar.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----Navbar component-----://
const Navbar = (props: Props) => {
	const [isSearch, setIsSearch] = useState(false);

	return (
		<>
			<nav className={styles.container}>
				<h1 className={styles.title}>fam-Movies</h1>
        <p className={styles.tagline}>- Complete movie info database -</p>
				<BsSearch
					className={styles.searchIcon}
					onClick={() => {
						setIsSearch((prevState) => !prevState);
					}}
				/>
			</nav>
			<div className={isSearch ? styles.searchBar : styles.searchBarHidden}>
				<input
					type="text"
					className={styles.input}
					placeholder="Search for a movie..."
				/>
				<button className={styles.button}>Search</button>
			</div>
		</>
	);
};

export default Navbar;
