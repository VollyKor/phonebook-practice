import s from './LogInForm.module.scss';
import Button from 'Components/Button/Button';

export default function LogInForm() {
  return (
    <form>
      <h2 className={s.title}>Log in Form</h2>
      <label className={s.label}>
        <span>E-mail</span>
        <input type="email" />
      </label>
      <label className={s.label}>
        <span>Password</span>
        <input type="password" />
      </label>
      <Button type="submit">Log In</Button>
    </form>
  );
}
