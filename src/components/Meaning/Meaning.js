import '../../assets/Variables.css';
import './Meaning.css';

export default function Meaning(props) {
    return (
        <>
            <h3>{ props.data.partOfSpeech }</h3>
            { props.data.definitions.map((def, index) => {
                return (
                    <div key={ index }>
                        <p>{ def.definition }</p>
                    </div>
                );
            })}
        </>
    );
}  