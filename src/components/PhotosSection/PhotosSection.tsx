import { Photos } from "../../types";

import "./PhotosSection.css";

type PhotosSectionProps = {
  word: string,
  data: Photos,
};

const PhotosSection = ({ word, data: { photos } }: PhotosSectionProps) => {
  return (
    <>
      <svg width="100%" height="100%" id="svg" viewBox="0 100 1440 300" xmlns="http://www.w3.org/2000/svg" className="svg-wave transition duration-300 ease-in-out delay-150">
        <path d="M 0,400 C 0,400 0,200 0,200 C 228.5,236.5 457,273 697,273 C 937,273 1188.5,236.5 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0"></path>
      </svg>
      <div className="content-photos">
        <div className="photos-card">
          {
            photos.map(({ src, alt }, index) => {
              return (
                <div key={ `${word}-photo-${index}` } className="photo">
                  <a href={ src.original } target="_blank" rel="noopener noreferrer">
                    <img src={ src.landscape } alt={ alt } />
                  </a>
                </div>
              );
            })
          }
        </div>
      </div>
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 250" xmlns="http://www.w3.org/2000/svg" className="svg-wave svg-b transition duration-300 ease-in-out delay-150">
        <path d="M 0,400 C 0,400 0,200 0,200 C 228.5,236.5 457,273 697,273 C 937,273 1188.5,236.5 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path>
      </svg>
    </>
  );
};

export default PhotosSection;
