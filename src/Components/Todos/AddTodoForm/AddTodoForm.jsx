import Button from 'Components/Button/Button';
import s from './AddTodoForm.module.scss';

export default function AddTodoForm() {
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
      <Button type="submit" className={s.btn}>
        Add Todo
      </Button>
    </form>
  );
}
