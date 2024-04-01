---

# User Authentication and Management System

## Overview
This system is designed to handle user registration, login, and role-based access control within the Weapons Management System. It uses PostgreSQL for storing user data and JSON Web Tokens (JWT) for session management and authentication.

## Features
- Secure user registration and login
- Password hashing with bcrypt
- JWT for authentication and session management
- Role-based access control (RBAC)

## Technologies Used
- **PostgreSQL**: Database for user data
- **Node.js/Express.js**: Backend server and API
- **bcrypt**: Password hashing
- **jsonwebtoken**: JWT handling
- **Postman**: API testing and interaction

## Setup Instructions

### Prerequisites
- PostgreSQL
- Node.js and npm
- Postman (for API testing)

### Database Setup
1. Create the `users` table in PostgreSQL:
   ```sql
   CREATE TABLE users (
       user_id SERIAL PRIMARY KEY,
       username VARCHAR(255) UNIQUE NOT NULL,
       password VARCHAR(255) NOT NULL,
       full_name VARCHAR(255) NOT NULL,
       role VARCHAR(50) NOT NULL
   );
   ```

### Backend Setup
1. Initialize your Node.js project and install necessary packages:
   ```
   npm init -y
   npm install express bcrypt jsonwebtoken pg
   ```
2. Set up your Express server in `index.js` and implement the authentication logic.

### Running the Server
- Execute `node index.js` to start your server.

## Using Postman for API Testing

### Register a New User
- **Endpoint:** `POST /api/auth/signup`
- **Body:**
  ```json
  {
    "username": "newuser",
    "password": "password",
    "full_name": "New User",
    "role": "user"
  }
  ```
- **Action:** Creates a new user record in the database.

### Login
- **Endpoint:** `POST /api/auth/signin`
- **Body:**
  ```json
  {
    "username": "newuser",
    "password": "password"
  }
  ```
- **Action:** Authenticates the user and returns a JWT if successful.

### Access Protected Resource
- **Endpoint:** `GET /api/test/user`
- **Headers:**
  - **Authorization:** `Bearer <your_jwt_token>`
- **Action:** Fetches data accessible only to authenticated users.

## API Endpoints

| Method | Endpoint           | Description                          |
|--------|--------------------|--------------------------------------|
| POST   | `/api/auth/signup` | Register a new user                  |
| POST   | `/api/auth/signin` | Login and receive JWT                |
| GET    | `/api/test/user`   | Access user-specific protected route |

## Security Practices

- **Password Security:** Passwords are hashed using `bcrypt` before storage.
- **JWT Management:** Tokens are used for session management and are not stored or logged.
- **Endpoint Protection:** Apply validation and sanitization to protect against SQL injection and XSS attacks.
- **CORS Configuration:** Set up CORS in Express.js to accept requests only from allowed origins.

## Deployment

- Ensure the PostgreSQL database and Node.js server are properly configured and running.
- Use environmental variables to store sensitive information like database credentials and JWT secret.

## Postman Testing

- Use Postman to simulate client requests and test the APIs.
- Import or manually set up the API routes in Postman.
- Test each endpoint with valid and invalid data to ensure robustness.

---
