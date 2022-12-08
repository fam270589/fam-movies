import Image from "next/image";
import styles from "./MovieCard.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
	poster: string;
	title: string;
};

//todo:-----MovieCard component-----://
const MovieCard = (props: Props) => {
	return (
		<div className={styles.container}>
			<Image src={props.poster} width={200} height={300} alt="poster" />
			<div className={styles.data}>
				<h1 className={styles.title}>{props.title}</h1>
        <p>Year</p>
        <p>Runtime</p>
        <p>Genre</p>
        <p>Plot</p>
        <p>Metascore</p>
        <p>IMDB Rating</p>
			</div>
		</div>
	);
};

export default MovieCard;
