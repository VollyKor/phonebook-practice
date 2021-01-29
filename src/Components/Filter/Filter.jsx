import s from './Filter.module.scss';
import { useState } from 'react';

export default function Filter() {
  const [filtered, setFiltered] = useState('');

  const handleFilter = e => {
    setFiltered(e.target.value);
  };
  return (
    <label className={s.label}>
      <span className="">Filter</span>
      <input
        type="text"
        value={filtered}
        onChange={handleFilter}
        placeholder="some query"
        className={s.input}
      />
    </label>
  );
}
