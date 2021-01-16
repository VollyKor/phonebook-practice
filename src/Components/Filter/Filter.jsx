export default function Filter({ setFilter, data: { filter } }) {
  const handleFilter = e => {
    setFilter(e.target.value);
  };
  return (
    <label className="form-label col-sm-8 col-md-4 mb-0 d-flex">
      <span className="d-block me-4 align-self-center bg-secondary p-2 border-dark rounded-3 text-white">
        Filter
      </span>
      <input
        type="text"
        value={filter}
        onChange={handleFilter}
        placeholder="some query"
        className="form-control shadow-sm"
      />
    </label>
  );
}
