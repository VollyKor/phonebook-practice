import NoteList from './NoteList/NoteList';
import s from './Notes.module.scss';
export default function Notes() {
  return (
    <div className={s.hero}>
      <h1 className={s.title}>Notes for Every day</h1>
      <form className={s.form}>
        <label className={s.label}>
          <span className={s.span}>Name</span>
          <input className={s.nameInput} type="text" />
        </label>
        <label className={s.label}>
          <span className={s.span}>Write some notes</span>
          <textarea className={s.textField} type="text" />
        </label>
        <button className={s.btn}>Add Note</button>
      </form>
      {/* <NoteList /> */}
    </div>
  );
}
