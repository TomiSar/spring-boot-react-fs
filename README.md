## Start backend (localhost:8080)

- cd ems-backend
- mvn spring-boot-run

## Install dependencies (node modules) in ems-frontend

- ems-frontend
- npm install

## Start frontend (localhost:3000)

- cd frontend
- npm run dev

## Create local database (MySQL)

- CREATE DATABASE management_system;

## Project API endpoints (Employees)

- http://localhost:8080/api/employees (POST new employee)
- http://localhost:8080/api/employees/id (GET employee byId)
- http://localhost:8080/api/employees (GET all employees)
- http://localhost:8080/api/employees/id (UPDATE employee byId)
- http://localhost:8080/api/employees/id (DELETE employee byId)

## Project API endpoints (Departments)

- http://localhost:8080/api/departments (POST new department)
- http://localhost:8080/api/departments/id (GET department byId)
- http://localhost:8080/api/departments (GET all departments)
- http://localhost:8080/api/departments/id (UPDATE department byId)
- http://localhost:8080/api/departments/id (DELETE department byId)
