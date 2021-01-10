import s from './Filter.module.css';

export default function Filter({ setFilter, data: { filter } }) {
  const handleFilter = e => {
    setFilter(e.target.value);
  };
  return (
    <div className="filter">
      <label className={s.label}>
        <span>Filter </span>
        <input
          type="text"
          className={s.input}
          value={filter}
          onChange={handleFilter}
        />
      </label>
    </div>
  );
}
