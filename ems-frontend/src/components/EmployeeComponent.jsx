import React, { useState, useEffect } from 'react';
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const { id } = useParams();
  const navigator = useNavigate();
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          const { firstName, lastName, email } = response.data;
          setFirstName(firstName);
          setLastName(lastName);
          setEmail(email);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [id]);

  function saveOrUpdateEmployee(e) {
    e.preventDefault();

    if (validateForm()) {
      const employee = { firstName, lastName, email };
      console.log(employee);

      if (id) {
        updateEmployee(id, employee)
          .then((response) => {
            console.log(response.data);
            navigator('/employees');
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        createEmployee(employee)
          .then((response) => {
            console.log(response.data);
            navigator('/employees');
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
  }

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };

    if (firstName.trim()) {
      errorsCopy.firstName = '';
    } else {
      errorsCopy.firstName = 'First name is required';
      valid = false;
    }

    if (lastName.trim()) {
      errorsCopy.lastName = '';
    } else {
      errorsCopy.lastName = 'Last name is required';
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
      return <h2 className='text-center'>Update Employee</h2>;
    } else {
      return <h2 className='text-center'>Add Employee</h2>;
    }
  }

  return (
    <div className='container'>
      <br /> <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3'>
          {pageTitle()}
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>First Name:</label>
                <input
                  className={`form-control ${
                    errors.firstName ? 'is-invalid' : ''
                  }`}
                  type='text'
                  placeholder='Enter Employee First Name'
                  name='firstName'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
                {errors.firstName && (
                  <div className='invalid-feedback'>{errors.firstName}</div>
                )}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Last Name:</label>
                <input
                  className={`form-control ${
                    errors.lastName ? 'is-invalid' : ''
                  }`}
                  type='text'
                  placeholder='Enter Employee Last Name'
                  name='lastName'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
                {errors.lastName && (
                  <div className='invalid-feedback'>{errors.lastName}</div>
                )}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Email:</label>
                <input
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  type='text'
                  placeholder='Enter Employee Email'
                  name='eMail'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                {errors.email && (
                  <div className='invalid-feedback'>{errors.email}</div>
                )}
              </div>

              <button
                className='btn btn-success'
                onClick={saveOrUpdateEmployee}
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

export default EmployeeComponent;
