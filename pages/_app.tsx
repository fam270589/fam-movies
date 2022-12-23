import "../styles/globals.css";
import type { AppProps } from "next/app";
import SearchCtxProvider from "../store/SearchCtxProvider";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SearchCtxProvider>
			<Component {...pageProps} />
		</SearchCtxProvider>
	);
}
