# Stock Discussion Platform Backend
A community platform for discussing various stocks in the market, built using the MERN stack (MongoDB, Express.js, Node.js).

## Project Overview
This project is a backend implementation of a stock discussion platform, allowing users to create posts related to specific stocks, comment on posts, and like or unlike posts. The platform features user authentication, post management, commenting system, like system, filtering, and sorting.

## Technologies Used
* Node.js (v14 or higher)
* Express.js
* MongoDB (local or Atlas)
* JSON Web Tokens (JWT) for authentication

# Stock Discussion Platform - API Endpoints

## Overview

This document provides a detailed list of API endpoints for the Stock Discussion Platform. The platform allows users to authenticate, manage posts related to stocks, comment on posts, like/unlike posts, and filter or sort posts. The backend is built using the MERN stack (MongoDB, Express.js, Node.js).

## User Authentication and Management

### 1. User Registration

- **Endpoint:** `POST /api/auth/register`
- **Request Body:**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }

## Setup and Installation
To set up and run the project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/your-repo-name.git`
2. Install dependencies: `npm install`
3. Create a `.env` file:
```plaintext
MONGO_URI=mongodb://localhost:27017/yourdbname
JWT_SECRET=your_jwt_secret_key
PORT=5000

stock-discussion-platform/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   ├── postController.js
│   └── commentController.js
├── models/
│   ├── user.js
│   ├── post.js
│   └── comment.js
├── routes/
│   ├── authRoutes.js
│   ├── postRoutes.js
│   └── commentRoutes.js
├── middleware/
│   └── authMiddleware.js
├── .env
├── server.js
└── README.md

