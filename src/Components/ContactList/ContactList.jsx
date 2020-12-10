import s from './ContactList.module.css';
export default function ContactList({ ContactList, removeContact }) {
  // if (ContactList.lenght >)
  return (
    <div className="container">
      <ul className={s.list}>
        {ContactList.map(el => {
          return (
            <li className={s.item} key={el.id}>
              <p className={s.itemValue}>
                <span> {el.name}: </span>
                <span>{el.phoneNumber}</span>
              </p>
              <button className={s.btn} onClick={() => removeContact(el.id)}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
