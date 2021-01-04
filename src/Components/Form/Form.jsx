import s from './Form.module.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PhoneInput from 'react-phone-number-input/input';
import { useForm } from 'react-hook-form';
export default function Form(props) {
  const { register, handleSubmit } = useForm();
  const [value, setValue] = useState('');

  // const [firstName, setFirstName] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [name, setName] = useState('');

  const handleChange = ({ target: { dataset, value } }) => {
    console.log(dataset);
    console.log(value);
    // switch (dataset.id) {
    //   case 'first-name':
    //     setName(value);
    //     break;
    //   case 'second-name':
    //     setPhoneNumber(value);
    //     break;
    //   case 'email':
    //     setPhoneNumber(value);
    //     break;
    //   case 'phoneNumber':
    //     setPhoneNumber(value);
    //     break;
    //   default:
    //     throw new Error(`there are no ${dataset.id} `);
    // }
  };
  const onSubmit = data => console.log(data);
  // const handleSubmit = e => {
  //   e.preventDefault();

  //   if (name.length > 0 && phoneNumber.length > 0) {
  //     onSubmit({
  //       id: uuidv4(),
  //       name,
  //       phoneNumber,
  //     });
  //     resetForm();
  //   }
  // };

  function resetForm() {
    // setName('');
    // setPhoneNumber('');
  }

  return (
    <form
      className={s.form}
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <label className={s.label}>
        <span>Имя</span>
        <input
          type="name"
          name="first-name"
          className={s.input}
          ref={register}
        />
      </label>
      <label className={s.label}>
        <span>Фамилия</span>
        <input
          type="name"
          name="second-name"
          className={s.input}
          ref={register}
        />
      </label>
      <label className={s.label}>
        <span>E-mail</span>
        <input type="email" name="email" className={s.input} ref={register} />
      </label>
      <label className={s.label}>
        <span>Phone number</span>
        <PhoneInput
          name="phoneNumber"
          className={s.input}
          country="UA"
          international
          value={value}
          onChange={setValue}
          // ref={register}
        />
      </label>
      <label>
        <span style={{ display: 'block' }}>Избранные</span>
        <select name="isChosen" ref={register}>
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
