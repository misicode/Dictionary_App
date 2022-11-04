import './SearchBar.css';

export default function SearchBar(props) {
  return (
    <form className="search-bar" onSubmit={ props.onSubmit }>
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <input type="search" onChange={ props.onChange } autoFocus={ true } />
    </form>
  );
}  