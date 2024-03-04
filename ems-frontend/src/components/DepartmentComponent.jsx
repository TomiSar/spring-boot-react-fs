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
  const [email, setEmail] = useState('');

  const { id } = useParams();
  const navigator = useNavigate();
  const [errors, setErrors] = useState({
    departmentName: '',
    departmentDescription: '',
    email: '',
  });

  useEffect(() => {
    if (id) {
      getDepartment(id)
        .then((response) => {
          const { departmentName, departmentDescription, email } =
            response.data;
          setDepartmentName(departmentName);
          setDepartmentDescription(departmentDescription);
          setEmail(email);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [id]);

  function saveOrUpdateDepartment(e) {
    e.preventDefault();

    if (validateForm()) {
      const department = { departmentName, departmentDescription, email };
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
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (departmentName.trim()) {
      errorsCopy.departmentName = '';
    } else {
      errorsCopy.departmentName = 'Department name is required';
      valid = false;
    }

    if (departmentDescription.trim()) {
      errorsCopy.departmentDescription = '';
    } else {
      errorsCopy.departmentDescription = 'Department description is required';
      valid = false;
    }

    if (email.trim()) {
      errorsCopy.email = '';
    } else {
      errorsCopy.email = 'Email is required';
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
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
                <label className='form-label'>Department Name:</label>
                <input
                  className={`form-control ${
                    errors.departmentName ? 'is-invalid' : ''
                  }`}
                  type='text'
                  placeholder='Enter Department Name'
                  name='departmentName'
                  value={departmentName}
                  onChange={(e) => setDepartmentName(e.target.value)}
                ></input>
                {errors.departmentName && (
                  <div className='invalid-feedback'>
                    {errors.departmentName}
                  </div>
                )}
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Department Description:</label>
                <input
                  className={`form-control ${
                    errors.departmentDescription ? 'is-invalid' : ''
                  }`}
                  type='text'
                  placeholder='Enter Department Description'
                  name='departmentDescription'
                  value={departmentDescription}
                  onChange={(e) => setDepartmentDescription(e.target.value)}
                ></input>
                {errors.departmentDescription && (
                  <div className='invalid-feedback'>
                    {errors.departmentDescription}
                  </div>
                )}
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Department Email:</label>
                <input
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  type='text'
                  placeholder='Enter Department Email'
                  name='eMail'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                {errors.email && (
                  <div className='invalid-feedback'>{errors.email}</div>
                )}
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
