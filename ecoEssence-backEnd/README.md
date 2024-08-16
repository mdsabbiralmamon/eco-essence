
# **EcoEssence Backend**

This repository contains the backend code for **EcoEssence**, an eco-friendly and sustainable products marketplace. The backend is built using Node.js, Express.js, and MongoDB, providing RESTful APIs for product management, user authentication, and order processing.

## **Table of Contents**

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)

---

## **Features**

- **Product Management:** CRUD operations for products with filtering, sorting, and pagination.
- **User Authentication:** Firebase-based authentication (Google, Email/Password).
- **Order Management:** Handle orders, track order history, and manage cart items.
- **Security:** JWT-based authentication for protected routes.
- **Scalability:** MongoDB as a NoSQL database for flexible data storage.

---

## **Technology Stack**

- **Backend Framework:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** Firebase, JWT
- **Deployment:** Heroku, MongoDB Atlas

---

## **Installation**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mdsabbiralmamon/eco-essence
   cd eco-essence
   cd ecoEssence-backEnd
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   - Create a `.env` file in the root directory and add the following:
     ```bash
     DB_USERNAME=your_mongodb_connection_string
     DB_PASSWORD=Your_Password
     ACCESS_TOKEN_SECRET=f75886bd6ec83a3887de5feeb1f431daad36733197fcb4a355d1d6171748753387bdef0cd479dcac2dd78c4bdb831a912e198962bcc8f690f539ff43873ecf1f || Your_Code
     ```

4. **Start the server:**
   ```bash
   npm start
   ```

   The backend server will run on `http://localhost:5000`.

---

## **Folder Structure**

```
ecoessence-backend/
├── config/              # Configuration files (e.g., database, JWT)
├── controllers/         # Route handlers and business logic
├── models/              # Mongoose models for MongoDB
├── routes/              # API routes
├── middleware/          # Express middleware functions
├── utils/               # Utility functions (e.g., error handling)
├── .env                 # Environment variables
└── package.json         # Project metadata and dependencies
```

---

## **API Endpoints**

### **Product Endpoints:**
- `GET /api/products/allProducts` - Fetch all products with pagination and filtering.

### **Authentication Endpoints:**
- `POST /api/users/signup` - Register a new user.

### **User Endpoints:**
- `GET /api/users` - Fetch all users.

---

## **Usage**

1. **Access the API:**
   - Make requests to the backend API at `http://localhost:5000`.

2. **Manage Products:**
   - Use POST, PUT, and DELETE endpoints to manage products in the database.

3. **User Authentication:**
   - Implement user authentication using Firebase for secure login and registration.

4. **Order Management:**
   - Handle user orders, manage order status, and track order history.

---