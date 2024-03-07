import axios from 'axios';

const DEPARTMENT_REST_API_BASE_URL = 'http://localhost:8080/api/departments';

// GET
export const getAllDepartments = () => axios.get(DEPARTMENT_REST_API_BASE_URL);

export const getDepartment = (departmentId) =>
  axios.get(`${DEPARTMENT_REST_API_BASE_URL}/${departmentId}`);

// POST
export const createDepartment = (department) =>
  axios.post(DEPARTMENT_REST_API_BASE_URL, department);

// PUT
export const updateDepartment = (departmentId, department) =>
  axios.put(`${DEPARTMENT_REST_API_BASE_URL}/${departmentId}`, department);

//DELETE
export const deleteDepartment = (departmentId) =>
  axios.delete(`${DEPARTMENT_REST_API_BASE_URL}/${departmentId}`);
