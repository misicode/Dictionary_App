import Meaning from '../Meaning/Meaning';

import '../../assets/Variables.css';
import './Results.css';

export default function Results(props) {
    if (props.results) {
        return (
            <div>
                <h2>{ props.results.word }</h2>
                { props.results.meanings.map((meaning, index) => {
                    return (
                        <div key={ index }>
                            <Meaning data={ meaning } />
                        </div>
                    );
                })}
            </div>
        );
    } else {
        return null;
    }
}  