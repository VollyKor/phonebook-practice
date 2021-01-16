import ContactItem from './ContactItem/ContactItem';

export default function ContactList({ ContactList }) {
  return (
    <div className="container">
      <h2 className="text-center text-light rounded-3 bg-secondary p-5">
        Contact List
      </h2>
      <ul className="row justify-content-around">
        {ContactList.map(el => {
          return (
            <li
              key={el.id}
              style={{ position: 'relative' }}
              className="card-body col-sm-12 col-md-6 col-lg-4 offset-lg-1 border border-1 rounded-2"
            >
              <ContactItem contactObj={el} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
