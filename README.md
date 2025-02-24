# Task Management Application

A full-stack task management application built with React, Node.js, and PostgreSQL.

## Demo

https://youtu.be/9vBAlwzKfUY

## Features

- User authentication (register/login)
- Create, read, update, and delete tasks
- Mark tasks as complete/incomplete
- Secure API endpoints with JWT

## Tech Stack

### Frontend
- React
- TypeScript
- Axios
- React Router DOM

### Backend
- Node.js/Express
- TypeScript
- TypeORM
- PostgreSQL
- JWT Authentication

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL 14 (installed via Homebrew)
- npm or yarn
- Git

## Installation & Setup

### 1. Clone the Repository and Install pack


```bash
git clone [repository-url]
cd task-management
npm run setup
```

### 2. Database Setup

1. Install and Start PostgreSQL Server

```bash
brew install postgresql@14
brew services start postgresql@14



postgres=# CREATE DATABASE taskmanagement;
postgres=# CREATE USER taskuser WITH PASSWORD 'your_password';
postgres=# GRANT ALL PRIVILEGES ON DATABASE taskmanagement TO taskuser;
postgres=# \c taskmanagement
```

3. Backend Setup

```bash  
cd backend
Update backend/.env with your database credentials or use current variables:

DB_HOST=localhost
DB_PORT=5432
DB_USER=taskuser
DB_PASSWORD=your_password
DB_NAME=taskmanagement
```

Start the backend server:

```bash
npm run dev
```
    

4. Frontend Setup

```bash
cd frontend
npm start
```

## Notes
API Endpoints

### Authentication

    POST /auth/register - Register new user
    POST /auth/login - Login user

### Tasks

    GET /tasks - Get all tasks
    POST /tasks - Create new task
    PUT /tasks/:id - Update task
    DELETE /tasks/:id - Delete task

### Project Structure

    
```bash
task-management/
├── backend/
│   ├── src/
│   │   ├── entities/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── index.ts
│   ├── package.json
│   └── tsconfig.json
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── contexts/
    │   ├── styles/
    │   └── App.tsx
    ├── package.json
    └── tsconfig.json
```

    

Security Features

    Password hashing using bcrypt
    JWT authentication
    Protected routes
    Database security best practices
    Input validation and sanitization


### Environment Variables

Backend (.env):

DB_HOST=localhost
DB_PORT=5432
DB_USER=taskuser
DB_PASSWORD=your_password
DB_NAME=taskmanagement
JWT_SECRET=auto_generated_on_dev_start

    

Frontend (.env):

    
REACT_APP_API_URL=http://localhost:3001/
