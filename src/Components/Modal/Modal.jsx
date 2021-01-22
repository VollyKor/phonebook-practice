import { createPortal } from 'react-dom';
import s from './Modal.module.scss';
import CloseButton from '../CloseButton/CloseButton';
const modalRoot = document.querySelector('#modalRoot');

export default function Modal({ onClose, children }) {
  function onBackdropClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return createPortal(
    <div className={s.backdrop} onClick={onBackdropClick}>
      <div className={s.wrapper}>
        <CloseButton onClose={onClose} />
        {children}
      </div>
    </div>,
    modalRoot,
  );
}
