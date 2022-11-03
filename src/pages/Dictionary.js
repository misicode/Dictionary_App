import axios from "axios";
import React, { useState } from "react";

import Results from "../components/Results/Results";
import SearchBar from "../components/SearchBar/SearchBar";

import './Dictionary.css';

function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [dictionaryData, setDictionaryData] = useState(null);

  function handleDictionaryResponse(response) {
    console.log(response)
    setDictionaryData(response.data[0]);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchKeyword();
    event.target.reset();
  }

  function searchKeyword() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${ keyword }`;

    axios.get(apiUrl)
      .then(handleDictionaryResponse)
      .catch(err => console.error(err));
  }

  return (
    <>
      <div className="card">
        <img src="title.png" alt="title_logo" className="img-title" />
        <div className="content">
          <p>Enter the word you want to search for:</p>
          <SearchBar onChange={ handleKeyword } onSubmit={ handleSubmit } />
          <p>For example: cat, coding, pizza, love...</p>
        </div>
      </div>
      <svg width="100%" height="100%" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" className="svg-wave transition duration-300 ease-in-out delay-150">
        <path d="M 0,400 C 0,400 0,200 0,200 C 249.5,172 499,144 739,144 C 979,144 1209.5,172 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path>
      </svg>
      <div className="content">
        <Results results={ dictionaryData } />
      </div>
    </>
  );
}

export default Dictionary;