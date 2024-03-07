import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListTodoComponent from './components/ListTodoComponent';
import TodoComponent from './components/TodoComponent';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* // http://localhost:300 */}
          <Route path='/' element={<ListTodoComponent />}></Route>

          {/* // http://localhost:3000/todos */}
          <Route path='/todos' element={<ListTodoComponent />}></Route>

          {/* // http://localhost:3000/add-todo */}
          <Route path='/add-todo' element={<TodoComponent />}></Route>

          {/* // http://localhost:3000/update-todo/id */}
          <Route path='/update-todo/:id' element={<TodoComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
