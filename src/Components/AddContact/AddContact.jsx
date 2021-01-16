export default function AddContact({ handleClick }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="btn btn-default  btn-dark col-sm-2"
    >
      Add Contact
    </button>
  );
}
