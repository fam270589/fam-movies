import { createContext } from "react";

export interface ISearchKey {
	searchKey: string;
	setSearchKey: (input: string) => void;
}

const SearchKeyContext = createContext<ISearchKey | null>({
	searchKey: "",
	setSearchKey: (input: string) => {},
});

export default SearchKeyContext;
