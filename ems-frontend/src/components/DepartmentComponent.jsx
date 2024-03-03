import React, { useState, useEffect } from 'react';
import {
  createDepartment,
  getDepartment,
  updateDepartment,
} from '../services/DepartmentService';
import { useNavigate, useParams } from 'react-router-dom';

const DepartmentComponent = () => {
  const [departmentName, setDepartmentName] = useState('');
  const [departmentDescription, setDepartmentDescription] = useState('');

  const { id } = useParams();
  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      getDepartment(id)
        .then((response) => {
          const { departmentName, departmentDescription } = response.data;
          setDepartmentName(departmentName);
          setDepartmentDescription(departmentDescription);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [id]);

  function saveOrUpdateDepartment(e) {
    e.preventDefault();

    const department = { departmentName, departmentDescription };
    console.log(department);

    if (id) {
      updateDepartment(id, department)
        .then((response) => {
          console.log(response.data);
          navigator('/departments');
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      createDepartment(department)
        .then((response) => {
          console.log(response.data);
          navigator('/departments');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  function pageTitle() {
    if (id) {
      return <h2 className='text-center'>Update Department</h2>;
    } else {
      return <h2 className='text-center'>Add Department</h2>;
    }
  }

  return (
    <div className='container'>
      <br /> <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {pageTitle()}
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='forma-label'>Department Name:</label>
                <input
                  type='text'
                  name='departmentName'
                  placeholder='Enter Department Name'
                  className='form-control'
                  value={departmentName}
                  onChange={(e) => setDepartmentName(e.target.value)}
                ></input>
              </div>
              <div className='form-group mb-2'>
                <label className='forma-label'>Department Desciprtion:</label>
                <input
                  type='text'
                  name='departmentDescription'
                  placeholder='Enter Department Description'
                  value={departmentDescription}
                  onChange={(e) => setDepartmentDescription(e.target.value)}
                  className='form-control'
                ></input>
              </div>
              <button
                className='btn btn-success mb-2'
                onClick={(e) => saveOrUpdateDepartment(e)}
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

export default DepartmentComponent;
