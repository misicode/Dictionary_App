import { useState } from "react";

import "./SearchBar.css";

type SearchBarProps = {
  onNewWord: (c: string) => void;
};

const SearchBar = ({ onNewWord }: SearchBarProps) => {
  const [value, setValue] = useState<string>("");

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!value || value.trim().length <= 1) return;

    setValue("");
    onNewWord(value.trim());
  };

  return (
    <form className="search-bar" onSubmit={ onSubmit }>
      <button type="submit" aria-label="search-button">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="18" height="18" viewBox="0 0 24 24" strokeWidth="4" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
      </button>
      <input type="search" value={ value } onChange={ onChange } autoFocus={ true } aria-label="search_word" />
    </form>
  );
};

export default SearchBar;
