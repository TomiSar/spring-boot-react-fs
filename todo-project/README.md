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

## Project API endpoints (Todo)

- http://localhost:8080/api/todos (POST new Todo)
- http://localhost:8080/api/todos/id (GET Todo byId)
- http://localhost:8080/api/todos (GET all Todos)
- http://localhost:8080/api/todos/id (UPDATE Todo byId)
- http://localhost:8080/api/todos/id (DELETE Todo byId)
- http://localhost:8080/api/todos/id/complete (Mark todo byId as COMPLETE)
- http://localhost:8080/api/todos/id/incomplete (Mark todo byId as COMPLETE)
