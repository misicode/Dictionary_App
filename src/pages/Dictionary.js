import axios from "axios";
import React, { useState } from "react";

import Photos from "../components/Photos/Photos";
import Results from "../parts/Results/Results";
import SearchBar from "../components/SearchBar/SearchBar";

import './Dictionary.css';

function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [dictionaryData, setDictionaryData] = useState(null);
  const [photosData, setPhotosData] = useState(null);

  function handleDictionaryResponse(response) {
    console.log(response)
    setDictionaryData(response.data[0]);
    searchPhotos();
  }

  function handlePhotosResponse(response) {
    console.log(response)
    setPhotosData(response.data.photos);
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

  function searchPhotos() {
    let apiUrl = `https://api.pexels.com/v1/search?query=${ keyword }&per_page=9`;

    axios.get(apiUrl, { headers: {
        Authorization: `Bearer ${ process.env.REACT_APP_API_KEY }`
      }})
      .then(handlePhotosResponse)
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
      <svg width="100%" height="100%" viewBox="0 50 1440 300" xmlns="http://www.w3.org/2000/svg" className="svg-wave transition duration-300 ease-in-out delay-150">
        <path d="M 0,350 C 0,350 0,200 0,200 C 249.5,172 499,144 739,144 C 979,144 1209.5,172 1440,200 C 1440,200 1440,350 1440,350 Z" stroke="none" strokeWidth="0" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path>
      </svg>
      <div className="content">
        <Results results={ dictionaryData } />
      </div>
      <Photos photos={ photosData } />
    </>
  );
}

export default Dictionary;