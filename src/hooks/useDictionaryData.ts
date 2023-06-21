import { useState, useEffect } from "react";

import { searchDictionary } from '../helpers/getDictionary';
import { Audio, Dictionary, DictionaryDataResponse } from "../types";

export const useDictionaryData = (word: string) => {
  const [dictionaryData, setDictionaryData] = useState<Dictionary>();

  const getDictionaryData = async () => {
    const data: DictionaryDataResponse = await searchDictionary(word);

    if (!data) return;

    // Obtiene el url de audio que encuentre de existir alguno
    const audio: Audio | undefined = data.phonetics.find(phonetic => phonetic.audio !== "");

    // Asigna los datos del diccionario
    setDictionaryData({
      word: data.word,
      phonetic: data.phonetic,
      audio: audio?.audio,
      meanings: data.meanings,
    });
  };

  useEffect(() => {
    if (word !== "") getDictionaryData();
  }, [word]);

  return dictionaryData;
};
