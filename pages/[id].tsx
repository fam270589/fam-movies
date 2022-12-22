import { useRouter } from "next/router";
import Layout from "../components/Layout/Layout";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----MovieDetails component-----://
const MovieDetails = (props: Props) => {
	const { query } = useRouter();

	return <Layout>Page {query.id}</Layout>;
};

export default MovieDetails;
