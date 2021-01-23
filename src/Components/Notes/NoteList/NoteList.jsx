import { useDispatch, useSelector } from 'react-redux';
import { notesOperations } from 'redux/notes';
const { deleteNote } = notesOperations;

export default function NoteList() {
  const notes = useSelector(state => state.notes.entities);
  const dispatch = useDispatch();
  return (
    <div>
      <h2 hidden>Note list</h2>
      <ul>
        {notes.map(e => (
          <li key={e.id}>
            <p>{e.title}</p>
            <p>{e.text}</p>
            <button onClick={() => dispatch(deleteNote(e.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
