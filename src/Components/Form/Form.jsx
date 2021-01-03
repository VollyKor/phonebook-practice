import s from './Form.module.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PhoneInput from 'react-phone-number-input/input';
export default function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [value, setValue] = useState('');

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
    <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={s.label}>
        <span>Имя</span>
        <input
          type="text"
          className={s.input}
          value={name}
          onChange={handleChange}
          data-id="first-name"
        />
      </label>
      <label className={s.label}>
        <span>Фамилия</span>
        <input
          type="text"
          className={s.input}
          value={name}
          onChange={handleChange}
          data-id="second-name"
        />
      </label>
      <label className={s.label}>
        <span>E-mail</span>
        <input
          type="email"
          className={s.input}
          value={name}
          onChange={handleChange}
          data-id="email"
        />
      </label>
      <label className={s.label}>
        <span>Phone number</span>
        <PhoneInput
          placeholder="Phone number"
          // className={s.input}
          country="UA"
          international
          initialValueFormat="national"
          value={value}
          onChange={setValue}
          data-id="phoneNumber"
        />
      </label>
      <label>
        <span style={{ display: 'block' }}>Избранные</span>
        <select name="isChosen">
          <option value="true">Да</option>
          <option value="false">Нет</option>
        </select>
      </label>
      <button type="submit" className={s.btn}>
        Add contact
      </button>
    </form>
  );
}
