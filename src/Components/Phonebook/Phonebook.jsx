import Button from 'Components/Button/Button';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import s from './Phonebook.module.scss';

export default function Phonebook({
  data,
  setFilter,
  handleCLick,
  contactList,
  removeContact,
}) {
  const { contacts, filterQuery } = data;
  return (
    <>
      <div className={`${s.wrapper}`}>
        <div className={s.background}>
          <h1 className={s.title}>Contacts</h1>
          <div className={s.thumb}>
            <Filter data={{ contacts, filterQuery }} setFilter={setFilter} />
            <Button onClick={handleCLick}>Add Contact</Button>
          </div>
        </div>
      </div>
      <ContactList contactList={contactList} removeContact={removeContact} />
    </>
  );
}
