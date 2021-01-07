import { AiFillCloseCircle } from 'react-icons/ai';

export default function CloseButton({ onClose }) {
  return (
    <button
      aria-label="close-button"
      onClick={onClose}
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      <AiFillCloseCircle style={{ width: '20px', height: '20px' }} />
    </button>
  );
}
