import { Definition } from "../../types";

import "./Meaning.css";

type MeaningProps = {
  speech: string;
  definitions: Definition[];
};

const Meaning = ({ speech, definitions }: MeaningProps) => {
  return (
    <>
      <h3>{ speech }</h3>
      { 
        definitions.map(({ definition, example }, index) => {
          return (
            <div key={ index } className="row-def">
              <p>{ index + 1 }</p>
              <div className="def-content">
                <p>{ definition }</p>
                { example ? <p>Example: { example }</p> : null }
              </div>
            </div>
          );
        })
      }
    </>
  );
};

export default Meaning;
