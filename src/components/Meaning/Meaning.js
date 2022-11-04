import './Meaning.css';

export default function Meaning(props) {
    return (
        <>
            <h3>{ props.data.partOfSpeech }</h3>
            { props.data.definitions.map((def, index) => {
                return (
                    <div key={ index } className="row-def">
                        <p>{ index + 1 }</p>
                        <div className="def-content">
                            <p>{ def.definition }</p>
                            {
                                (def.example) ? <p>Example: { def.example }</p> : null
                            }
                        </div>
                    </div>
                );
            })}
        </>
    );
}  