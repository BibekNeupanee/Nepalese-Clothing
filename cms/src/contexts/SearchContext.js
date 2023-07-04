import React, { useContext, useState } from "react";

const SearchContext = React.createContext();
const SearchContextUpdate = React.createContext();

export function useSearchText() {
  return useContext(SearchContext);
}

export function useSearchTextUpdate() {
  return useContext(SearchContextUpdate);
}

function SearchProvider({ children }) {
  const [searchText, setSearchText] = useState("");

  function changeSearchString(newText) {
    setSearchText(newText);
  }

  return (
    <SearchContext.Provider value={searchText}>
      <SearchContextUpdate.Provider value={changeSearchString}>
        {children}
      </SearchContextUpdate.Provider>
    </SearchContext.Provider>
  );
}

export default SearchProvider;
