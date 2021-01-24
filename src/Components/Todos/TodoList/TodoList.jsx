import s from './TodoList.module.scss';

export default function TodoList({ header, list }) {
  return (
    <>
      <h2 className={s.title}>{header}</h2>
      <ul>
        {list.map(({ id, name, desc }) => (
          <li key={id} tabIndex="0" className={s.item}>
            <h3 className={s.subtitle}>{name}</h3>
            <p>{desc}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
