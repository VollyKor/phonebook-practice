import { AiFillCloseCircle } from 'react-icons/ai';
import s from './CloseButton.module.scss';

export default function CloseButton({ onClose }) {
  return (
    <button aria-label="close-button" onClick={onClose} className={s.btn}>
      <AiFillCloseCircle className={s.icon} />
    </button>
  );
}
