import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modalRoot');

export default function Modal({ onClose, children }) {
  function onBackdropClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return createPortal(
    <div className={s.backdrop} onClick={onBackdropClick}>
      <div className={s.wrapper}>{children}</div>
    </div>,
    modalRoot,
  );
}
