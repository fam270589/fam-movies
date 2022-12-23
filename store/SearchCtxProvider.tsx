import { useState } from "react";
import SearchKeyContext, { ISearchKey } from "./search-ctx";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----SearchCtxProvider component-----://
const SearchCtxProvider = (props: Props) => {
	const [key, setKey] = useState("");

	const setSearchKey = (input: string) => {
		setKey(input);
	};

	const contextValue: ISearchKey = {
		searchKey : key,
		setSearchKey,
	};

	return (
		<SearchKeyContext.Provider value={contextValue}>
			{props.children}
		</SearchKeyContext.Provider>
	);
};

export default SearchCtxProvider;
