import AddTodoForm from './AddTodoForm/AddTodoForm';
import TodoList from './TodoList';
import { TestTodo, TestDoing, TestDone } from '../../service/testTodos';
import { Link, Route } from 'react-router-dom';
import ClockContainer from './ClockContainer/ClockContainer';

export default function Todos() {
  return (
    <>
      <h1 style={{ textAlign: 'center', padding: '15px' }}>To do to do</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <AddTodoForm />
        <ClockContainer />
      </div>
      <Link to="/notes/todolist">Todo List </Link>
      <Link to="/notes/alltodos">Todo List </Link>
      <Route path="/notes/todolist">
        <ul className="d-flex ">
          <li>
            <TodoList header="To Do" list={TestTodo} />
          </li>
          <li>
            <TodoList header="Doing" list={TestDoing} />
          </li>
          <li>
            <TodoList header="Done" list={TestDone} />
          </li>
        </ul>
      </Route>
      <Route path="/notes/alltodos">
        <TodoList header="All Todos" list={TestTodo} />
      </Route>
    </>
  );
}
