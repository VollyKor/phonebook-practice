import ContactItem from './ContactItem/ContactItem';
import s from './ContactList.module.css';

export default function ContactList({ ContactList }) {
  return (
    <div className="container">
      <h2 className="text-center text-light rounded-3 bg-secondary p-5">
        Contact List
      </h2>
      <ul className={`${s.list}`}>
        {ContactList.map(el => {
          return (
            <li key={el.id} className={`${s.item} border border-1 rounded-2`}>
              <ContactItem contactObj={el} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
