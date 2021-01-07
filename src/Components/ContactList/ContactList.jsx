import ContactItem from './ContactItem/ContactItem';
import s from './ContactList.module.css';

const contactObj = {
  email: 'volydemar2032@gmail.com',
  firstName: 'Корнеев',
  isChosen: 'true',
  lastName: 'Владимир',
  phoneNumber: '+3 (111) 111-11-11',
};

export default function ContactList({ ContactList, removeContact }) {
  return (
    <div className="container">
      <ul className={s.list}>
        {ContactList.map(el => {
          return (
            <li key={el.id}>
              <ContactItem contactObj={contactObj} />
            </li>
            // <li className={s.item} key={el.id}>
            //   <p className={s.itemValue}>
            //     <span> {el.name}: </span>
            //     <span>{el.phoneNumber}</span>
            //   </p>
            //   <button className={s.btn} onClick={() => removeContact(el.id)}>
            //     delete
            //   </button>
            // </li>
          );
        })}
      </ul>
    </div>
  );
}
