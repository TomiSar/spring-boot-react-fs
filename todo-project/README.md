## Start backend (localhost:8080)

- cd ems-backend
- mvn spring-boot:run

## Install dependencies (node modules) in ems-frontend

- ems-frontend
- npm install

## Start frontend (localhost:3000)

- cd frontend
- npm run dev

## Create local database (MySQL)

- CREATE DATABASE todo_management;

## Project API endpoints (Todo)

- http://localhost:8080/api/todos (POST new todo)
- http://localhost:8080/api/todos/id (GET employee byId)
- http://localhost:8080/api/todos (GET all employees)
- http://localhost:8080/api/todos/id (UPDATE todo byId)
- http://localhost:8080/api/todos/id (DELETE todo byId)
- http://localhost:8080/api/todos/id/complete (COMPLETE todo byId)
- http://localhost:8080/api/todos/id/incomplete (INCOMPLETE todo byId)
