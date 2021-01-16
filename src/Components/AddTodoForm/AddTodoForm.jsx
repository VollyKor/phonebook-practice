export default function AddTodoForm() {
  return (
    <form className="col-md-6 row">
      <label className="d-block mx-auto  p-1">
        <span className="col-sm-5 col-md-2 form-label">Название</span>
        <input
          type="text"
          maxLength="12"
          className="form-control col-sm-6 col-md-4"
        />
      </label>
      <label className="d-block mx-auto  p-1">
        <span className="form-label">Описание</span>
        <textarea className="form-control" style={{ resize: 'none' }} />
      </label>
      <button type="submit" className="d-block btn mt-2 btn-dark mx-auto">
        Добавить
      </button>
    </form>
  );
}
