
---

# 🛍️ ShopEase - Full Stack E-Commerce Platform

A modern, full-stack e-commerce application built with **React**, **Node.js**, **Express**, and **MongoDB**.
It includes:

* A **customer-facing frontend** for shopping
* An **admin panel** for management
* A **robust backend API** for handling business logic

---

## 🏗️ Architecture Overview

```
ShopEase/
├── frontend/          # Customer-facing React application
├── admin/             # Admin panel React application
├── backend/           # Node.js/Express API server
└── README.md          # Project documentation
```

---

## 🚀 Technology Stack

### Frontend (Customer App)

* React 19.1.0 with Vite
* TailwindCSS 4.1.8
* React Router DOM 7.6.2
* React Context API
* Firebase Auth + Google OAuth
* Axios 1.9.0
* React Icons, React Toastify
* Vite 6.3.5

### Admin Panel

* React 19.1.0 with Vite
* TailwindCSS 4.1.8
* React Router DOM 7.6.2
* React Context API
* Axios 1.9.0
* React Icons, React Toastify
* Vite 6.3.5

### Backend (API Server)

* Node.js with Express 5.1.0
* MongoDB with Mongoose 8.15.1
* JWT + bcryptjs for authentication
* Multer 2.0.1 + Cloudinary 2.6.1 for uploads
* Razorpay 2.9.6 for payments
* CORS, Cookie Parser for security
* Nodemon 3.1.10 for development
* Validator 13.15.15 for validation

---

## 📁 Project Structure

### Frontend (`/frontend`)

* **Components**: Product cards, cart calculator, navigation, hero section, best sellers, footer, newsletter, AI chat, etc.
* **Pages**: Home, Product, Product Details, Collections, Cart, Place Order, Login, Registration, Order History, About, Contact, NotFound
* **Contexts**: Authentication, Shop, User
* **Utilities**: Firebase configuration

### Admin (`/admin`)

* **Components**: Navigation, Sidebar, Loading spinner
* **Pages**: Dashboard, Product Management (Add, Lists), Orders, Login
* **Contexts**: Admin Authentication

### Backend (`/backend`)

* **Config**: MongoDB, JWT, Cloudinary
* **Controllers**: Auth, Cart, Order, Product, User
* **Middleware**: Auth (user & admin), Multer for file uploads
* **Models**: User, Product, Order schemas
* **Routes**: Auth, User, Product, Cart, Order

---

## 🗄️ Database Schema

### User Model

```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String,
  cartData: Object (default: {}),
  timestamps: true
}
```

### Product Model

```javascript
{
  name: String (required),
  image1: String (required),
  image2: String (required),
  image3: String (required),
  image4: String (required),
  description: String (required),
  price: Number (required),
  category: String (required),
  subCategory: String (required),
  sizes: Array (required),
  date: Number (required),
  bestseller: Boolean,
  timestamps: true
}
```

### Order Model

```javascript
{
  userId: String (required),
  items: Array (required),
  amount: Number (required),
  address: Object (required),
  status: String (default: 'Order Placed'),
  paymentMethod: String (required),
  payment: Boolean (default: false),
  date: Number (required),
  timestamps: true
}
```

---

## 🔐 Authentication & Authorization

* **Frontend**:

  * Firebase Authentication with Google OAuth
  * JWT tokens for API calls
  * Protected routes with React Router
  * Context API for managing user state

* **Backend**:

  * JWT token validation middleware
  * Admin authorization middleware
  * Password hashing with bcryptjs
  * Secure CORS & cookie-based authentication

---

## 🛣️ API Routes

* **/api/auth** → User & admin authentication, registration, token validation
* **/api/user** → User profile & data management
* **/api/product** → Product CRUD, filtering, image uploads
* **/api/cart** → Add/remove/update cart items
* **/api/order** → Place orders, view history, update status, payment processing

---

## 🎨 Frontend Features

### Customer Application

* Homepage with **hero, latest collections, best sellers**
* Product catalog with **search & filtering**
* Product details with **gallery & size options**
* Shopping cart with **quantity updates**
* Checkout with **address + Razorpay payments**
* Order history & tracking
* Google OAuth-based login
* AI-powered chat support
* Responsive UI with TailwindCSS
* Newsletter & policy pages

### Admin Panel

* Dashboard with statistics
* Product management (Add, Edit, Delete)
* Order management with status updates
* Image upload via Cloudinary
* Admin login & authentication
* Responsive admin interface

---

## 🔧 Development Setup

### Prerequisites

* Node.js v14+
* MongoDB
* Cloudinary account
* Firebase project
* Razorpay account

### Environment Variables

**Frontend (`.env`)**

```
VITE_FIREBASE_APIKEY=your_firebase_api_key
```

**Backend (`.env`)**

```
PORT=6000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### Installation & Running

**Backend**

```bash
cd backend
npm install
npm run dev
```

**Frontend**

```bash
cd frontend
npm install
npm run dev
```

**Admin**

```bash
cd admin
npm install
npm run dev
```

### Default Ports

* Backend → `http://localhost:6000`
* Frontend → `http://localhost:5173`
* Admin → `http://localhost:5174`

---

## 🌟 Key Features

* Product catalog with categories & filters
* Shopping cart with persistence
* Secure checkout with Razorpay payments
* User authentication & profiles
* Order history & tracking
* Admin dashboard for management
* Cloudinary-based image optimization
* Real-time notifications with React Toastify
* Modern React with Hooks & Context API

---

## 🔄 Data Flow

1. **User Authentication** → Firebase OAuth + JWT
2. **Products** → Backend API serves data to frontend
3. **Cart** → Synced between frontend context & database
4. **Orders** → Managed in backend, payments via Razorpay
5. **Admin** → Panel communicates with backend for CRUD
6. **Uploads** → Images stored via Cloudinary

---

## 🚀 Deployment Considerations

* **Frontend & Admin** → Deploy on Vercel/Netlify
* **Backend** → Deploy on Heroku/Railway/Cloud
* **Database** → MongoDB Atlas
* **Images** → Cloudinary CDN
* **Environments** → Separate configs for dev & prod

---

✅ This setup ensures a **scalable, secure, and modern e-commerce platform** with a smooth experience for both users and developers.

---

