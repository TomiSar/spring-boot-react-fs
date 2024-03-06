import { useState, useEffect } from 'react';
import {
  getAllDepartments,
  deleteDepartment,
} from '../services/DepartmentService';
import { Link, useNavigate } from 'react-router-dom';

const ListDepartmentComponent = () => {
  const [departments, setDepartments] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    listOfDepartments();
  }, []);

  function listOfDepartments() {
    getAllDepartments()
      .then((response) => {
        // console.log(response.data);
        setDepartments(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function updateDepartment(id) {
    navigator(`/edit-department/${id}`);
  }

  function removeDepartment(id) {
    deleteDepartment(id)
      // eslint-disable-next-line no-unused-vars
      .then((response) => {
        // console.log(response.data);
        listOfDepartments();
      })
      .then((err) => {
        console.error(err);
      });
  }

  return (
    <div className='container'>
      <h2 className='text-center'>List of Departments</h2>
      <Link className='btn btn-success mb-2' to='/add-department'>
        Add Department
      </Link>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Department Id</th>
            <th>Department Name</th>
            <th>Department Description</th>
            <th>Department Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.id}>
              <td>{department.id}</td>
              <td>{department.departmentName}</td>
              <td>{department.departmentDescription}</td>
              <td>{department.email}</td>
              <td>
                <button
                  className='btn btn-primary'
                  onClick={() => updateDepartment(department.id)}
                >
                  Update
                </button>
                <button
                  className='btn btn-danger'
                  onClick={() => removeDepartment(department.id)}
                  style={{ marginLeft: '10px' }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListDepartmentComponent;
