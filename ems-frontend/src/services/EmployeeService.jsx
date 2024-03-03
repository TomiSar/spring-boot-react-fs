import axios from 'axios';

const EMPLOYEE_REST_API_BASE_URL = 'http://localhost:8080/api/employees';

// GET
export const listEmployees = () => axios.get(EMPLOYEE_REST_API_BASE_URL);

export const getEmployee = (employeeId) =>
  axios.get(`${EMPLOYEE_REST_API_BASE_URL}/${employeeId}`);

// POST
export const createEmployee = (employee) =>
  axios.post(EMPLOYEE_REST_API_BASE_URL, employee);

// PUT
export const updateEmployee = (employeeId, employee) =>
  axios.put(`${EMPLOYEE_REST_API_BASE_URL}/${employeeId}`, employee);

//DELETE
export const deleteEmployee = (employeeId) =>
  axios.delete(`${EMPLOYEE_REST_API_BASE_URL}/${employeeId}`);
