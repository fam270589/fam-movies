import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout/Layout";
import { IMovieData } from "../models/Types";
import styles from "../styles/MovieDetails.module.css";
import Image from "next/image";
import Link from "next/link";

type Props = {
	children?: React.ReactNode;
	// props....
};

// example: http://www.omdbapi.com/?i=tt3896198&apikey=efdc90b6

//todo:-----MovieDetails component-----://
const MovieDetails = (props: Props) => {
	const [movieData, setMovieData] = useState<IMovieData>();

	const { query } = useRouter();

	useEffect(() => {
		const fetchMovieData = async () => {
			try {
				const response = await fetch(
					`http://www.omdbapi.com/?i=${query.id}&apikey=efdc90b6`
				);
				const data = await response.json();
				setMovieData(data);
			} catch (error) {
				console.log("error: ", error);
			}
		};

		fetchMovieData();

		return () => {};
	}, [query.id]);

	let poster = "/poster.jpg";
	if (movieData?.Poster) {
		poster = movieData.Poster;
	}

	return (
		<Layout>
			<div className={styles.container}>
				<Link href={"/"}>&larr; Back to home</Link>
				{!movieData && (
					<div>
						<h1>Loading...</h1>
					</div>
				)}
				{movieData && (
					<div className={styles.data}>
						<Image
							priority
							className={styles.poster}
							src={poster === "N/A" ? "/poster.jpg" : poster}
							alt={movieData.Title}
							width={160}
							height={240}
						/>
						<div className={styles.details}>
							<div className={styles.titleWrapper}>
								<h1 className={styles.title}>{movieData.Title}</h1>
								<p>{movieData.Runtime}</p>
							</div>
							<div className={styles.detailsWrapper}>
								<div>
									<p className={styles.year}>{movieData.Year}</p>
								</div>
								<div>
									<p className={styles.plot}>{movieData.Plot}</p>
								</div>
								<div>
									<p className={styles.genre}>
										<span className={styles.bold}>Genre: </span>
										{movieData.Genre}
									</p>
								</div>
								<div>
									<p className={styles.actors}>
										<span className={styles.bold}>Actors: </span>
										{movieData.Actors}
									</p>
								</div>
								<div>
									<p className={styles.director}>
										<span className={styles.bold}>Director: </span>
										{movieData.Director}
									</p>
								</div>
								<div>
									<p className={styles.country}>
										<span className={styles.bold}>Country: </span>
										{movieData.Country}
									</p>
								</div>
								<div>
									<p className={styles.language}>
										<span className={styles.bold}>Language: </span>
										{movieData.Language}
									</p>
								</div>
								<div>
									<p className={styles.rating}>{movieData.imdbRating}</p>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</Layout>
	);
};

export default MovieDetails;
