## Start backend (localhost:8080)

- cd todo-management
- mvn spring-boot:run

## Install dependencies (node modules) in todo-ui

- cd todo-ui
- npm install

## Start frontend (localhost:3000) in todo-ui

- cd todo-ui
- npm run dev

## Create local database (MySQL)

- CREATE DATABASE todo_management;

## JWT token

- https://jwt.io/

## Tools for password Encode/Decode

- https://www.base64decode.org/
- https://www.base64encode.org/

## Project API endpoints (Todo)

- http://localhost:8080/api/todos (POST new Todo)
- http://localhost:8080/api/todos/id (GET Todo byId)
- http://localhost:8080/api/todos (GET all Todos)
- http://localhost:8080/api/todos/id (UPDATE Todo byId)
- http://localhost:8080/api/todos/id (DELETE Todo byId)
- http://localhost:8080/api/todos/id/complete (Mark todo byId as COMPLETE)
- http://localhost:8080/api/todos/id/incomplete (Mark todo byId as INCOMPLETE)

## Project API endpoints (User)

- http://localhost:8080/api/auth/register (POST register New User)
- http://localhost:8080/api/auth/login (POST login with existing credentials from DB username or email and password)
