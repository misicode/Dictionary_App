export interface Dictionary {
  word: string;
  phonetic: string;
  audio?: string;
  meanings: Meaning[];
}

export interface Photos {
  photos: Photo[];
}

interface Audio {
  audio: string;
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: StringMap[];
}

interface Definition {
  definition: string;
  example?: string;
}

interface Photo {
  src: { 
    original: string;
    landscape: string;
  };
  alt: string;
}

export interface DictionaryDataResponse {
  word: string;
  phonetic: string;
  phonetics: Audio[];
  meanings: Meaning[];
}

interface StringMap {
  [key: number]: string;
}
