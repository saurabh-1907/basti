# Backend API Documentation

This document provides documentation for the backend API, which is hosted at [https://basti-7d1n.onrender.com/api](https://basti-7d1n.onrender.com/api).

## Authentication

Some endpoints require authentication. To authenticate, you must first obtain a JSON Web Token (JWT) by using the `/api/login` endpoint. Once you have the token, you must include it in the `Authorization` header of your requests for protected endpoints.

**Example Header:**
```
Authorization: Bearer <your_jwt_token>
```

---

## API Endpoints

### User Registration

*   **Endpoint:** `POST /api/register`
*   **Description:** Registers a new user.
*   **Request Body:**
    *   `name` (String, required): The user's name.
    *   `email` (String, required): The user's email address.
    *   `password` (String, required): The user's password.
    *   `role` (String, optional): The user's role (e.g., "user", "admin"). Defaults to "user".
*   **Example Request:**
    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "password": "yourpassword"
    }
    ```
*   **Example Response:**
    ```json
    {
      "message": "User registered",
      "user": {
        "name": "John Doe",
        "role": "user"
      }
    }
    ```

### User Login

*   **Endpoint:** `POST /api/login`
*   **Description:** Logs in a user and returns a JWT token.
*   **Request Body:**
    *   `email` (String, required): The user's email address.
    *   `password` (String, required): The user's password.
*   **Example Request:**
    ```json
    {
      "email": "john.doe@example.com",
      "password": "yourpassword"
    }
    ```
*   **Example Response:**
    ```json
    {
      "token": "your_jwt_token"
    }
    ```

### Get All Users

*   **Endpoint:** `GET /api/users`
*   **Description:** Retrieves a list of all users.
*   **Authentication:** Required (Admin only).
*   **Example Response:**
    ```json
    [
      {
        "_id": "user_id_1",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "role": "user"
      },
      {
        "_id": "user_id_2",
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "role": "admin"
      }
    ]
    ```

### Get Current User

*   **Endpoint:** `GET /api/me`
*   **Description:** Retrieves the profile of the currently authenticated user.
*   **Authentication:** Required.
*   **Example Response:**
    ```json
    {
      "_id": "user_id_1",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "role": "user"
    }
    ```
