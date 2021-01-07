export default function ContactItem({ contactObj }) {
  return (
    <div>
      <p>
        ContactName <span>Phone Number</span>
      </p>
      <button>MoreInfo</button>
      <button>Change Contact</button>
      <button>Delete Contact</button>
    </div>
  );
}
