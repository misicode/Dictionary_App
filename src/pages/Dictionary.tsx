import { lazy, useState } from 'react';

import {
  PhotosSection,
  ResultsSection,
  SearchBar,
} from "../components";
import { useDictionaryData } from '../hooks/useDictionaryData';
import { usePhotosData } from '../hooks/usePhotosData';

import "./Dictionary.css";

const Alert = lazy(() => import("../components").then(({ Alert }) => ({ default: Alert })));

const Dictionary = () => {
  const [word, setWord] = useState<string>("");
  const dictionaryData = useDictionaryData(word);
  const photosData = usePhotosData(word);

  const onChangeWord = ( newWord: string ) => {
    setWord(newWord);
  }

  return (
    <>
      <Alert />
      <div className="card">
        <div className="card-img">
          <img src="title.webp" alt="title_logo" className="img-title" width="100%" height="100%" />
        </div>
        <div className="content">
          <p>Enter the word you want to search for:</p>
          <SearchBar onNewWord={ onChangeWord } />
          <p>For example: cat, coding, pizza, love...</p>
        </div>
      </div>
      <svg width="100%" height="100%" viewBox="0 70 1440 280" xmlns="http://www.w3.org/2000/svg" className="svg-wave transition delay-150">
        <path d="M 0,350 C 0,350 0,200 0,200 C 249.5,172 499,144 739,144 C 979,144 1209.5,172 1440,200 C 1440,200 1440,350 1440,350 Z" stroke="none" strokeWidth="0" fillOpacity="1" className="transition-all delay-150 path-0" transform="rotate(-180 720 200)"></path>
      </svg>
      {
        (dictionaryData)
        ? <div className="content">
            <ResultsSection data={ dictionaryData } />
          </div>
        : null
      }
      {
        (photosData)
        ? <PhotosSection data={ photosData } />
        : null
      }
    </>
  );
};

export default Dictionary;
