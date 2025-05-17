# PanScience Assignment

Done by Manas Pratim Das (dasmp123.work@gmail.com or manas.das.ug22@nsut.ac.in)

A clean, modular authentication backend built with Node.js and Express. This backend provides a secure login API for user authentication and includes admin control APIs for user management — including creation, updating, and deletion of users. It also includes user-specific task management APIs with proper role restrictions.

It uses **JWT (JSON Web Tokens)** for **secure encryption and authentication**, ensuring stateless session handling and token-based access control.

## 📁 Features

- ✅ User Login API (https://panscience-assignment.onrender.com/api/auth/login)
- 🛡️ Secure password handling (bcrypt hashing)
- 🔑 Token-based authentication (JWT)
- 👮 Admin-only APIs to:
  - Create users (https://panscience-assignment.onrender.com/api/admin/createUser)
  - Update user details (https://panscience-assignment.onrender.com/api/admin/updateUser)
  - Delete users (https://panscience-assignment.onrender.com/api/admin/deleteUser)
  - Add tasks (https://panscience-assignment.onrender.com/api/task/addTask)
  - Delete tasks (https://panscience-assignment.onrender.com/api/task/deleteTask)
- 👤 User-specific APIs to:
  - Get all tasks assigned to them (https://panscience-assignment.onrender.com/api/task/getTask)
  - Update their own tasks (https://panscience-assignment.onrender.com/api/task/updateTask)
- 📚 Clean and industry-standard folder structure
- 🧩 Easily extensible for future features like roles, permissions, or OAuth

## 🗂️ Folder Structure

```bash
backend/
├── config/             # Config files like DB connection
├── controllers/        # Logic for handling API requests
├── models/             # Mongoose schemas or data models
├── routes/             # API route definitions
├── .env                # Environment variables (ignored in Git)
├── index.js            # Entry point
```

## 🔐 Login Endpoint

Authenticates a user with their email and password. If credentials are valid, returns a signed JWT token containing the user's ID, name, email, and role.

```bash
POST /api/login
```

### Header

```bash
Content-Type: application/json
```

### Request Body

```json
{
    "email": "<your_email_here>",
    "password": "<your_password_here>"
}
```

### Success Response

On success it returns a status code `200 OK` with the response:

```json
{
    "token": "<jwt_token>"
}
```

### Failure Response

If wrong credentials have been entered, then it return `400 Bad Request` with the following response:

```json
{
    "message": "Incorrect credentials"
}
```

In case of ineternal server error, it returns `500 Internal Server Error` with the following response:

```json
{
    "message": "Internal Server Error"
}
```

## 👮 Admin Endpoints (Require Admin Privileges)

All admin endpoints require the request to include `"requestRole": "admin"` in the JSON body to verify admin privileges.

### ➕ Create User

Endpoint:

```bash
POST /api/admin/createUser
```

Request Body:

```json
{
    "requestRole": "<your_role>",
    "name": "<user_name>",
    "email": "<user_email>",
    "role": "<user_role>",
    "password": "<user_password>"
}
```

### ✏️ Update User

Endpoint:

```bash
POST /api/admin/updateUser
```

Request Body:

```json
{
    "requestRole": "<your_role>",
    "currentEmail": "<old_email>",
    "name": "<updated_name>",
    "email": "<updated_email>",
    "role": "<updated_role>"
}
```

### ❌ Delete User

Endpoint:

```bash
POST /api/admin/deleteUser
```

Request Body:

```json
{
    "requestRole": "<your_role>",
    "email": "<user_email>"
}
```

## ✅ Task Endpoints

The Task endpoints allow users to manage and interact with tasks in the system. Access is role-based:
- **Admins** can create and delete tasks, and assign them to users.
- **Users** can view tasks assigned to them and update task details like status or description.

Each task includes details such as title, description, priority, status, due date, assigned user, and optional document attachments.

### 📥 Add Task (Admin Only)

Endpoint:

```bash
POST /api/task/addtask
```

Request Body:

```json
{
    "requestRole": "<your_role>",
    "title": "<task_title>",
    "description": "<task_description>",
    "status": "<task_status>",
    "priority": "<task_priority>",
    "due_date": "task_due_date",
    "assigned_to": "<email_of_user_for_the_task>",
    "attached_documents": ["<array_of_document_paths>"]
}
```

### 📋 Get Tasks (User-Specific)

Endpoint:

```bash
GET /api/task/getTask
```

Request Query Parameters:

```bash
id=<user_id>
```

### 🔄 Update Task

Endpoint:

```bash
PUT /api/task/updateTask
```

Request Query Parameters:

```bash
id=<user_id>
```

Request Body:

```json
{
    "title": "<new_task_title>",
    "description": "<new_task_description>",
    "status": "<new_task_status>",
    "priority": "<new_task_priority>",
    "due_date": "new_task_due_date",
    "assigned_to": "<new_email_of_user_for_the_task>",
    "attached_documents": ["<new_array_of_document_paths>"]
}
```

### 🗑️ Delete Task (Admin Only)

Endpoint:

```bash
DELETE /api/task/deleteTask
```

Request Query Parameters:

```bash
id=<user_id>
```

Request Body:

```json
{
    "requestRole": "<your_role>"
}
```

## ⚙️ Project Setup (Node.js)

Follow these steps to set up and run the backend locally:

### Clone the Repository

```bash
git clone https://github.com/2manas8/panscience_assignment.git
cd panscience_assignment
```

### Install Dependencies

Make sure you have `Node.js` installed (preferably version 16+), then install all required packages:

```bash
npm install
```

### Set Up Environment Variables

Create a `.env` file in the root directory and add the following variables:

```bash
DATABASE_URL=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret_key
```

### Run the Server

To start the server:

```bash
npm start
```

The backend will run at: 📍 `http://localhost:5000`