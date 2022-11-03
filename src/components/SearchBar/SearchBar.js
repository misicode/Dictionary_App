import './SearchBar.css';

export default function SearchBar(props) {
    return (
        <form className="search-bar" onSubmit={ props.onSubmit }>
          <input type="search" onChange={ props.onChange } />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
    );
}  