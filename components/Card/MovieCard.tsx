import Image from "next/image";
import styles from "./MovieCard.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
	id: string;
	poster: string;
	title: string;
	year: string;
};

//todo:-----MovieCard component-----://
const MovieCard = (props: Props) => {
	return (
		<div className={styles.container}>
			<Image
				priority
				className={styles.poster}
				src={props.poster}
				width={160}
				height={240}
				alt="poster"
			/>
			<div className={styles.data}>
				<p className={styles.title}>{props.title}</p>
				<p className={styles.year}>{props.year}</p>
			</div>
		</div>
	);
};

export default MovieCard;
