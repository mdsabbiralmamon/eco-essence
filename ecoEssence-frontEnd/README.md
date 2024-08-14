# **EcoEssence Frontend**

This repository contains the frontend code for **EcoEssence**, an eco-friendly and sustainable products marketplace. The frontend is built using React.js and styled with Tailwind CSS to provide a responsive and user-friendly interface.

## **Table of Contents**

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Usage](#usage)

---

## **Features**

- **Product Display:** Browse products with pagination, sorting, and filtering options.
- **Search Functionality:** Real-time search for products by name.
- **User Authentication:** Google and Email/Password login via Firebase.
- **Responsive Design:** Mobile-first design with a dark mode toggle.
- **Wishlist:** Add products to a wishlist for future reference.
- **Shopping Cart & Checkout:** Manage your cart and proceed to checkout with ease.

---

## **Technology Stack**

- **Frontend Framework:** React.js
- **Styling:** Tailwind CSS
- **State Management:** Context API
- **HTTP Client:** Axios
- **Authentication:** Firebase
- **Deployment:** Firebase

---

## **Installation**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mdsabbiralmamon/eco-essence
   cd eco-essence
   cd ecoEssence-frontEnd
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   - Create a `.env.local` file in the root directory and add the following:
     ```bash
     ENVs = Keys
     ```

4. **Start the React app:**
   ```bash
   npm start
   ```

   The app will run on `http://localhost:5173`.

---

## **Folder Structure**

```
ecoEssence-frontEnd/
├── public/
├── src/
│   ├── assets/          # Images, fonts, and other static assets
│   ├── components/      # Reusable UI components
│   ├── context/         # React context for state management
│   ├── layout/          # Layout components
│   ├── pages/           # Page components
│   ├── routes/          # Route components
│   ├── index.css        # Tailwind CSS configurations
│   └── main.jsx         # Main application component
├── .env.local           # Environment variables
└── package.json         # Project metadata and dependencies
```

---

## **Usage**

1. **Access the Home Page:**
   - Visit `http://localhost:5173` to view the EcoEssence homepage.

2. **Browse Products:**
   - Explore the product catalog, use filters, and sort options to find what you need.

3. **User Authentication:**
   - Register or log in using Google or email/password authentication.

4. **Manage Cart & Checkout:**
   - Add items to your cart, manage quantities, and proceed to checkout.

---
