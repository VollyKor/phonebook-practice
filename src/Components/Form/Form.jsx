import s from './Form.module.css';
import { v4 as uuidv4 } from 'uuid';
import InputMask from 'react-input-mask';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState, useContext } from 'react';
import contactsCtx from '../../context/contactsCtx';

//  регулярное выраженияе для фильтрации чисел
// +3 (111) 111-11-11 ==> 31111111111
//  const unmask = value.replace(/\D/g, '');

export default function Form({ contactObj }) {
  const [submittedData, setSubmittedData] = useState({});
  const { changeContact, addContact } = useContext(contactsCtx);
  //  Validation
  // ====================================================
  const schema = yup.object().shape({
    firstName: yup.string().min(3, 'больше 3х').max(20).required(),
    lastName: yup.string().min(3).max(20).required(),
    phoneNumber: yup
      .string()
      .test('len', 'Нужно подставить все значения', val => {
        const val_length_without_dashes = val.replace(/\D/g, '').length;
        return val_length_without_dashes === 11;
      })
      .required(),
    email: yup.string().email(),
  });

  // react hook form with default values part №1
  // ====================================

  function defaultValues() {
    if (contactObj) {
      const { id, firstName, lastName, phoneNumber, email } = contactObj;
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

  //   const defaultValues = {
  //   firstName,
  //   lastName,
  //   phoneNumber,
  //   email,
  // };

  const {
    register,
    errors,
    handleSubmit,
    // reset,                                      // for reset form with default values
    // formState: { isSubmitSuccessful },         //  for reset form with default values
  } = useForm({
    resolver: yupResolver(schema),
    // reValidateMode: 'onSubmit',
    defaultValues: defaultValues(), //  for reset form with default values
  });

  // reset Form with default values par  .№2
  // =========================
  // useEffect(() => {
  //   if (isSubmitSuccessful) {
  //     reset({ ...defaultValues });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isSubmitSuccessful, reset]);

  // Submit Form
  // ==============================================================
  const onSubmit = (data, e) => {
    data.phoneNumber = data.phoneNumber.replace(/\D/g, '');
    console.log(!contactObj);
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
    <form className="row g-2 p-3" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="text-center">
        {contactObj ? 'Форма изменения контактов' : 'Форма добавления контакта'}
      </h3>

      <label className="form-label">
        <span>Фамилия</span>
        <input
          type="name"
          name="firstName"
          className="form-control"
          ref={register({ required: true, maxLength: 20 })}
        />
        <p>{errors.firstName?.message}</p>
      </label>

      <label className="form-label">
        <span>Имя</span>
        <input
          type="name"
          name="lastName"
          className="form-control"
          ref={register({ required: true, maxLength: 20 })}
        />
        <p>{errors.lastName?.message}</p>
      </label>

      <label className="form-label">
        <span>E-mail</span>
        <input name="email" className="form-control" ref={register} />
        <p>{errors.email?.message}</p>
      </label>

      <label className="form-label">
        <span>Phone number</span>
        <InputMask
          name="phoneNumber"
          mask="+3 (999) 999-99-99"
          alwaysShowMask={true}
          className="form-control"
          ref={register}
        />
        <p>{errors.phoneNumber?.message}</p>
      </label>

      <label>
        <span style={{ display: 'block' }}>Избранные</span>
        <select name="isChosen" ref={register}>
          <option value="true">Да</option>
          <option value="false">Нет</option>
        </select>
      </label>
      {contactObj ? (
        <button
          className="d-inline btn btn-default btn-dark mx-auto"
          type="submit"
        >
          save changes
        </button>
      ) : (
        <button
          type="submit"
          className="d-inline btn btn-default btn-dark mx-auto"
        >
          Add contact
        </button>
      )}
    </form>
  );
}
