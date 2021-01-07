export default function AddContact({ handleClick }) {
  return (
    <button
      onClick={handleClick}
      style={{ width: '100px', height: '20px', marginLeft: '15px' }}
    >
      Add Contact
    </button>
  );
}
