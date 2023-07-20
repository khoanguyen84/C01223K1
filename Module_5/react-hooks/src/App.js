import { useReducer } from 'react';
import './App.css';
import reducer, { initState } from './store/reducer';
import * as actions from './store/actions';

// const [state, setState] = useState(initState)
// const [state, setState] = useState({
//   todoInput: '',
//   todoList: []
// })

// const [state, dispatch] = useReducer(reducer, initState)

// action: {
//   type, -> loại gì
//   payload -> dữ liệu
// }

function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  const handleInput = (e) => {
    dispatch(actions.setTodoInput(e.target.value))
  }

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(actions.addTodoList(state.todoInput))
  }

  const handleMakeDone = (todo) => {
    // dispatch({ type: MAKE_DONE, payload: todo })
    dispatch(actions.makeDone(todo))
  }

  const handleRemove = (todo) => {
    let confirm = window.confirm(`Are sure to remove todo ${todo.name}?`)
    if (confirm) {
      // dispatch({ type: REMOVE_TODO, payload: todo })
      dispatch(actions.removeTodo(todo))
    }
  }

  console.log(state);
  return (
    <form className='w-50'>
      <div className='d-flex mb-3'>
        <input className='form-control' type="text" value={state.todoInput} onInput={handleInput} />
        <button className='btn btn-warning btn-sm' onClick={handleAddTodo}>Add</button>
      </div>
      <div>
        <ul className='list-group'>
          {
            state.todoList.map((todo) => (
              <li key={todo.id} className='list-group-item d-flex justify-content-between'>
                <div className='d-flex align-items-start'>
                  {todo.name}
                  {todo.completed ? <span className="ms-3 badge bg-success">completed</span> : <span className="ms-3 badge bg-secondary">Inprogess</span>}
                </div>
                <div>
                  {
                    !todo.completed ? <span role='button' className='text-sucess fw-bolder' onClick={() => handleMakeDone(todo)}>&#10003;</span> : ''
                  }
                  <span role='button' className='text-danger fw-bolder' onClick={() => handleRemove(todo)}>&times;</span>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </form>
  );
}

export default App;
