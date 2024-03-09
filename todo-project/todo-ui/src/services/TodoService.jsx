import axios from 'axios';
import { getToken } from './AuthService';

const TODOS_REST_API_BASE_URL = 'http://localhost:8080/api/todos';

// Add Request interceptor
axios.interceptors.request.use(
  function (config) {
    config.headers['Authorization'] = getToken();
    return config;
  },
  function (error) {
    // Do Something with request ERROR
    return Promise.reject(error);
  }
);

// GET
export const getAllTodos = () => axios.get(TODOS_REST_API_BASE_URL);

export const getTodo = (todoId) =>
  axios.get(`${TODOS_REST_API_BASE_URL}/${todoId}`);

// POST
export const saveTodo = (todo) => axios.post(TODOS_REST_API_BASE_URL, todo);

// PUT
export const updateTodo = (todoId, todo) =>
  axios.put(`${TODOS_REST_API_BASE_URL}/${todoId}`, todo);

// DELETE
export const deleteTodo = (todoId) =>
  axios.delete(`${TODOS_REST_API_BASE_URL}/${todoId}`);

// COMPLETE
export const completeTodo = (todoId) =>
  axios.patch(`${TODOS_REST_API_BASE_URL}/${todoId}/complete`);

// INCOMPLETE
export const incompleteTodo = (todoId) =>
  axios.patch(`${TODOS_REST_API_BASE_URL}/${todoId}/incomplete`);
