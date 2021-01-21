import s from './Filter.module.scss';

export default function Filter({ setFilter, data: { filter } }) {
  const handleFilter = e => {
    setFilter(e.target.value);
  };
  return (
    <label className={s.label}>
      <span className="">Filter</span>
      <input
        type="text"
        value={filter}
        onChange={handleFilter}
        placeholder="some query"
        className={s.input}
      />
    </label>
  );
}
