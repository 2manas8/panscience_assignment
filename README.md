# PanScience Assignment
Done by Manas Pratim Das (dasmp123.work@gmail.com or manas.das.ug22@nsut.ac.in)

# 🔐 Authentication Backend

A clean, modular authentication backend built with Node.js and Express. This backend provides a secure **login API** for user authentication and includes **admin control APIs** for user management — including creation, updating, and deletion of users.

It uses **JWT (JSON Web Tokens)** for **secure encryption and authentication**, ensuring stateless session handling and token-based access control.

## 📁 Features

- ✅ User Login API (https://panscience-assignment.onrender.com/api/auth/login)
- 🛡️ Secure password handling (bcrypt hashing)
- 🔑 Token-based authentication (JWT)
- 👮 Admin-only APIs to:
  - Create users (https://panscience-assignment.onrender.com/api/admin/createUser)
  - Update user details (https://panscience-assignment.onrender.com/api/admin/updateUser)
  - Delete users (https://panscience-assignment.onrender.com/api/admin/deleteUser)
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