# 🎓 EduNova - Online Learning & Course Recommendation Platform

## 📌 Project Overview

EduNova is a Full-Stack Online Learning & Course Recommendation Platform that allows users to register, log in, browse courses, enroll in courses, view enrolled courses, and receive personalized course recommendations based on their skills and interests.

The platform is built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js) and demonstrates full-stack development concepts including authentication, database management, REST APIs, and recommendation systems.

---

## 🚀 Features

### 👤 User Authentication

* User Registration
* User Login
* JWT Authentication
* Password Reset Functionality
* Secure Password Hashing using bcrypt

### 📚 Course Management

* View Available Courses
* Search Courses
* Course Details Display
* Dynamic Course Listing

### 🎯 Personalized Recommendations

* Recommendations based on User Skills
* Recommendations based on User Interests
* Tag-based Recommendation Engine

### 📝 Enrollment System

* Enroll in Courses
* Prevent Duplicate Enrollments
* View My Enrollments
* Track Registered Courses

### 🔒 Security Features

* JWT Protected Routes
* Password Encryption
* Authentication Middleware

---

## 🛠 Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JWT (JSON Web Token)
* bcryptjs

---

## 📂 Project Structure

```bash
EduNova/
│
├── client/
│   ├── src/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── MyEnrollments.jsx
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/edunova.git
```

### Backend Setup

```bash
cd server

npm install

npm run dev
```

### Frontend Setup

```bash
cd client

npm install

npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the server folder:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## 🗄 Database Collections

### Users

```json
{
  "name": "Jatin Gujarathi",
  "email": "user@gmail.com",
  "password": "hashed_password",
  "skills": ["Python", "Machine Learning"],
  "interests": ["Data Science", "AI"]
}
```

### Courses

```json
{
  "title": "Python for Data Science",
  "description": "Learn Python and Data Analysis",
  "instructor": "Jatin Gujarathi",
  "tags": ["Python", "Data Science"],
  "level": "Beginner",
  "duration": "15 Hours"
}
```

### Enrollments

```json
{
  "user": "UserId",
  "course": "CourseId"
}
```

---

## 🎯 Recommendation Logic

The recommendation engine matches:

* User Skills
* User Interests

with

* Course Tags

to generate personalized course recommendations.

---

## 📸 Screenshots

### Login Page

* User Authentication Interface

### Home Dashboard

* Course Listing
* Search Functionality
* Recommendations

### My Enrollments

* Enrolled Course Tracking

---

## 🔮 Future Enhancements

* AI-Powered Recommendation Engine
* Course Progress Tracking
* Video Lectures Integration
* User Profile Management
* Course Ratings & Reviews
* Admin Dashboard
* Email Notifications
* Certificate Generation

---

## 💡 Learning Outcomes

Through this project, I gained hands-on experience in:

* MERN Stack Development
* REST API Development
* MongoDB Database Design
* Authentication & Authorization
* Recommendation Systems
* Frontend-Backend Integration
* State Management in React

---

## 👨‍💻 Author

**Jatin Gujarathi**

B.Tech Mechanical Engineering

Aspiring Data Scientist | Machine Learning Enthusiast | Full-Stack Developer

---

## ⭐ If you like this project

Give this repository a star and share your feedback.
# 🎓 EduNova - Online Learning & Course Recommendation Platform

## 📌 Project Overview

EduNova is a Full-Stack Online Learning & Course Recommendation Platform that allows users to register, log in, browse courses, enroll in courses, view enrolled courses, and receive personalized course recommendations based on their skills and interests.

The platform is built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js) and demonstrates full-stack development concepts including authentication, database management, REST APIs, and recommendation systems.

---

## 🚀 Features

### 👤 User Authentication

* User Registration
* User Login
* JWT Authentication
* Password Reset Functionality
* Secure Password Hashing using bcrypt

### 📚 Course Management

* View Available Courses
* Search Courses
* Course Details Display
* Dynamic Course Listing

### 🎯 Personalized Recommendations

* Recommendations based on User Skills
* Recommendations based on User Interests
* Tag-based Recommendation Engine

### 📝 Enrollment System

* Enroll in Courses
* Prevent Duplicate Enrollments
* View My Enrollments
* Track Registered Courses

### 🔒 Security Features

* JWT Protected Routes
* Password Encryption
* Authentication Middleware

---

## 🛠 Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JWT (JSON Web Token)
* bcryptjs

---

## 📂 Project Structure

```bash
EduNova/
│
├── client/
│   ├── src/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── MyEnrollments.jsx
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/edunova.git
```

### Backend Setup

```bash
cd server

npm install

npm run dev
```

### Frontend Setup

```bash
cd client

npm install

npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the server folder:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## 🗄 Database Collections

### Users

```json
{
  "name": "Jatin Gujarathi",
  "email": "user@gmail.com",
  "password": "hashed_password",
  "skills": ["Python", "Machine Learning"],
  "interests": ["Data Science", "AI"]
}
```

### Courses

```json
{
  "title": "Python for Data Science",
  "description": "Learn Python and Data Analysis",
  "instructor": "Jatin Gujarathi",
  "tags": ["Python", "Data Science"],
  "level": "Beginner",
  "duration": "15 Hours"
}
```

### Enrollments

```json
{
  "user": "UserId",
  "course": "CourseId"
}
```

---

## 🎯 Recommendation Logic

The recommendation engine matches:

* User Skills
* User Interests

with

* Course Tags

to generate personalized course recommendations.

---

## 📸 Screenshots

### Login Page

* User Authentication Interface

### Home Dashboard

* Course Listing
* Search Functionality
* Recommendations

### My Enrollments

* Enrolled Course Tracking

---

## 🔮 Future Enhancements

* AI-Powered Recommendation Engine
* Course Progress Tracking
* Video Lectures Integration
* User Profile Management
* Course Ratings & Reviews
* Admin Dashboard
* Email Notifications
* Certificate Generation

---

## 💡 Learning Outcomes

Through this project, I gained hands-on experience in:

* MERN Stack Development
* REST API Development
* MongoDB Database Design
* Authentication & Authorization
* Recommendation Systems
* Frontend-Backend Integration
* State Management in React

---

## 👨‍💻 Author

**Jatin Gujarathi**

B.Tech Mechanical Engineering

Aspiring Data Scientist | Machine Learning Enthusiast | Full-Stack Developer

---

## ⭐ If you like this project

Give this repository a star and share your feedback.
