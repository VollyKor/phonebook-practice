import s from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';
import InputMask from 'react-input-mask';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { contactsOperations } from 'redux/phonebook';
import { useDispatch } from 'react-redux';

const { changeContact, addContact } = contactsOperations;

//  регулярное выраженияе для фильтрации чисел
// +3 (111) 111-11-11 ==> 31111111111
//  const unmask = value.replace(/\D/g, '');

export default function Form({ contactObj }) {
  const [submittedData, setSubmittedData] = useState({});
  const dispatch = useDispatch();

  //  Reaact hook Form
  // ========================================
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues(), //  for reset form with default values
  });

  //  Validation
  // ====================================================
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .min(3, 'More then 3chars')
      .max(20)
      .required('Required'),
    lastName: yup.string().min(3).max(20).required('Required'),
    phoneNumber: yup
      .string()
      .test('len', 'Fill all space', val => {
        const val_length_without_dashes = val.replace(/\D/g, '').length;
        return val_length_without_dashes === 11;
      })
      .required(),
    email: yup.string().email().required(),
  });

  // react hook form with default values part №1
  // ====================================
  function defaultValues() {
    if (contactObj) {
      const { firstName, lastName, phoneNumber, email } = contactObj;
      return {
        firstName,
        lastName,
        phoneNumber,
        email,
      };
    }
    return {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
    };
  }

  // Submit Form
  // ==============================================================
  const onSubmit = (data, e) => {
    // data.phoneNumber = data.phoneNumber.replace(/\D/g, '');

    if (!contactObj) {
      data.id = uuidv4();
      setSubmittedData(data);
      addContact(data);
      e.target.reset();
      return;
    }

    changeContact(data, contactObj.id);
  };

  return (
    <div className={s.formWrapper}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={s.title}>
          {contactObj ? 'Change Contact' : 'New Contact'}
        </h2>

        <label className={s.label}>
          <span className={s.inputTitle}>First Name</span>
          <input
            type="name"
            name="firstName"
            className={s.input}
            ref={register({ required: true, maxLength: 20 })}
          />
          <p className={s.error}>{errors.firstName?.message}</p>
        </label>

        <label className={s.label}>
          <span className={s.inputTitle}>Second Name</span>
          <input
            type="name"
            name="lastName"
            className={s.input}
            ref={register({ required: true, maxLength: 20 })}
          />
          <p className={s.error}>{errors.lastName?.message}</p>
        </label>

        <label className={s.label}>
          <span className={s.inputTitle}>E-mail</span>
          <input name="email" className={s.input} ref={register} />
          <p className={s.error}>{errors.email?.message}</p>
        </label>

        <label className={s.label}>
          <span className={s.inputTitle}>Phone number</span>
          <InputMask
            name="phoneNumber"
            mask="+3 (999) 999-99-99"
            alwaysShowMask={true}
            className={s.input}
            ref={register}
          />
          <p className={s.error}>{errors.phoneNumber?.message}</p>
        </label>

        <label className={s.label}>
          <span className={s.inputTitle} style={{ display: 'block' }}>
            Add to Chosen?
          </span>
          <input type="checkbox" />
        </label>
        {contactObj ? (
          <button className={s.btn} type="submit">
            Save changes
          </button>
        ) : (
          <button type="submit" className={s.btn}>
            Add contact
          </button>
        )}
      </form>
    </div>
  );
}
