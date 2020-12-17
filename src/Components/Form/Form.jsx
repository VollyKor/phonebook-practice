import s from './Form.module.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleChange = ({ target: { dataset, value } }) => {
    switch (dataset.id) {
      case 'name':
        setName(value);
        break;
      case 'phoneNumber':
        setPhoneNumber(value);
        break;
      default:
        throw new Error(`there are no ${dataset.id} `);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name.length > 0 && phoneNumber.length > 0) {
      onSubmit({
        id: uuidv4(),
        name,
        phoneNumber,
      });
      resetForm();
    }
  };

  function resetForm() {
    setName('');
    setPhoneNumber('');
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <span>Name</span>
        <input
          type="text"
          className={s.input}
          value={name}
          onChange={handleChange}
          data-id="name"
        />
      </label>
      <label className={s.label}>
        <span>Phone number</span>
        <input
          type="text"
          className={s.input}
          value={phoneNumber}
          onChange={handleChange}
          data-id="phoneNumber"
        />
      </label>
      <button type="submit" className={s.btn}>
        Add contact
      </button>
    </form>
  );
}
