import Image from "next/image";
import styles from "./Layout.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----Layout component-----://
const Layout = (props: Props) => {
	return (
		<div className={styles.container}>
			<Image
				src={"/bg.jpg"}
				width={6000}
				height={4000}
				alt="background"
				className={styles.background}
			/>
      {props.children}
		</div>
	);
};

export default Layout;
