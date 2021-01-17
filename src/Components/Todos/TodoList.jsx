export default function TodoList({ header, list }) {
  return (
    <>
      <h3>{header}</h3>
      <ul>
        {list.map(({ id, name, desc }) => (
          <li key={id} className="card">
            <h3>{name}</h3>
            <p>{desc}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
