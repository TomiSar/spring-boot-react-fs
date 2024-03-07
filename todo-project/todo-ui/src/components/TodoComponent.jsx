import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTodo, saveTodo, updateTodo } from '../services/TodoService';
import TodoFormField from './TodoFormField';

const TodoComponent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  function saveOrUpdateTodo(e) {
    e.preventDefault();

    const todo = { title, description, completed };
    const request = id ? updateTodo(id, todo) : saveTodo(todo);

    request
      .then((response) => {
        console.log(response.data);
        navigate('/todos');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function pageTitle() {
    return id ? (
      <h2 className='text-center'>Update Todo</h2>
    ) : (
      <h2 className='text-center'>Add Todo</h2>
    );
  }

  useEffect(() => {
    if (id) {
      getTodo(id)
        .then((response) => {
          //   console.log(response.data);
          const { title, description, completed } = response.data;
          setTitle(title);
          setDescription(description);
          setCompleted(completed);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  return (
    <div className='container'>
      <br /> <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {pageTitle()}
          <div className='card-body'>
            <form>
              <TodoFormField
                label='Todo Title'
                placeholder='Enter Todo Title'
                name='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TodoFormField
                label='Todo Description'
                placeholder='Enter Todo Description'
                name='description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className='form-group mb-2'>
                <label className='form-label fw-bold'>Todo Completed:</label>
                <select
                  className='form-control'
                  value={completed}
                  onChange={(e) => setCompleted(e.target.value)}
                >
                  <option value='false'>No</option>
                  <option value='true'>Yes</option>
                </select>
              </div>
              <button
                className='btn btn-success'
                onClick={(e) => saveOrUpdateTodo(e)}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoComponent;
