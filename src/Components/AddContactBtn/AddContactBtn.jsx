import s from './AddContactBtn.module.scss';

export default function AddContact({ handleClick }) {
  return (
    <button type="button" onClick={handleClick} className={s.btn}>
      Add Contact
    </button>
  );
}
