import './ToggleTheme.css';

export default function ToggleTheme(props) {
    return (
        <label className="switch">
            <input type="checkbox" onClick={ props.onClick } />
            <span className="slider round"></span>
        </label>
    );
}