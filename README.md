# sepid system sharif task

## Auth API Documentation

### base URl : REACT_APP_API_BASE_URL='http://9craft.ir:5001'

### Register User

- **Method:** POST
- **Endpoint:** `/api/user/register`
- **Input:**
  ```json
  {
    "email": "example@example.com",
    "username": "exampleUser",
    "password": "securePassword123"
  }
  ```
- **Output:**
  ```json
  {
    "msg": "User created successfully"
  }
  ```
  Status Code: `201 Created`

### Login User

- **Method:** POST
- **Endpoint:** `/api/user/login`
- **Input:**
  ```json
  {
    "username": "exampleUser",
    "password": "securePassword123"
  }
  ```
- **Output:**
  ```json
  {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refresh_token": "REFRESH_TOKEN_VALUE"
  }
  ```
  Status Code: `200 OK`

## Posts Api `https://jsonplaceholder.typicode.com/`

> Consider this **resource will not be really updated on the server but it will be faked as if.**

## Auth with JWT and Context

## State management : Redux toolkit

## For CRUD operation and logic See : `features/post/`
