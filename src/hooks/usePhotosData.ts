import { useState, useEffect } from "react";

import { searchPhotos } from "../helpers/getPhotos";
import { Photos } from "../types";

export const usePhotosData = (word: string) => {
  const [photosData, setPhotosData] = useState<Photos>();

  const getPhotosData = async () => {
    const data = await searchPhotos(word);
    
    if (!data || (data.photos).length === 0) return;

    // Asigna los datos de las fotos
    setPhotosData({
      photos: data.photos,
    });
  };

  useEffect(() => {
    if (word !== "") getPhotosData();
  }, [word]);

  return photosData;
};
