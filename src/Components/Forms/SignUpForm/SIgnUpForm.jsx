import Button from 'Components/Button/Button';
import s from './SignUpForm.module.scss';

export default function SignUpForm() {
  return (
    <form className={s.form}>
      <h2 className={s.title}>Log in Form</h2>
      <label className={s.label}>
        <span>User Name</span>
        <input type="text" />
      </label>
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
