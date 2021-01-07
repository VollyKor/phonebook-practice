import ContactItem from './ContactItem/ContactItem';
import s from './ContactList.module.css';

export default function ContactList({ ContactList, removeContact }) {
  return (
    <div className="container">
      <h2>Contact List</h2>
      <ul className={s.list}>
        {ContactList.map(el => {
          return (
            <li key={el.id}>
              <ContactItem contactObj={el} removeContact={removeContact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
