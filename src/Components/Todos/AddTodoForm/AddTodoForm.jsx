import Button from 'Components/Button/Button';
import 'react-datepicker/dist/react-datepicker.css';
import s from './AddTodoForm.module.scss';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

export default function AddTodoForm() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState(null);

  return (
    <form className={s.form}>
      <h2 className={s.title}>Add Todo to your list</h2>
      <label className={s.label}>
        <span className={s.subtitle}>Название</span>
        <input type="text" maxLength="12" className={s.input} />
      </label>
      <label className={s.label}>
        <span className={s.subtitle}>Описание</span>
        <textarea className={s.textarea} />
      </label>
      <label className={s.label}>
        <span className={s.subtitle}>Дедлайн</span>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          timeInputLabel="Time:"
          dateFormat="MM/dd/yyyy h:mm aa"
          timeFormat="p"
          showTimeInput
          className={s.input}
          closeOnScroll={true}
        />
      </label>

      <Button type="submit" className={s.btn}>
        Add Todo
      </Button>
    </form>
  );
}
