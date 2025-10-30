const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className="mb-3 text-center">
    <input
      type="text"
      className="form-control w-75 mx-auto"
      placeholder="Buscar artículo..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
);

export default SearchBar;