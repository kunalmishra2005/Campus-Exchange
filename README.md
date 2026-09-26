🎓 Campus Exchange

Skills • Knowledge • Resources — Students Helping Students

«Campus Exchange is a student-focused web platform that helps students connect with each other to share skills, exchange knowledge, discover learning resources, and find suitable study partners.»

<p align="center">
  <strong>Learn Together • Share Knowledge • Grow Together 🚀</strong>
</p>---

📌 About the Project

Students often have useful skills, notes, study materials, and knowledge that can help other students — but finding the right person or resource can be difficult.

Campus Exchange provides a centralized platform where students can:

- 👨‍🎓 Create their student profile
- 💡 Share skills they can teach
- 📚 Find skills they want to learn
- 🔍 Search for other students
- 🤝 Connect with suitable students
- 📖 Access useful academic resources
- 🤖 Get AI-powered student matching
- 🔐 Securely register and log in
- 🔑 Reset their password when required

The goal is to create a student-to-student learning ecosystem where knowledge can be exchanged easily.

---

✨ Key Features

👤 Student Profiles

Students can create profiles containing information such as:

- Name
- Email
- College
- Semester
- Bio
- Skills they can teach
- Skills they want to learn

---

🔎 Find Students

Search and discover students based on their skills and interests.

Students can explore profiles and find people who may be suitable for learning or knowledge exchange.

---

🛠️ Skills Marketplace

The Skills Marketplace allows students to:

- Find students who can teach specific skills
- Discover skills they want to learn
- Explore available learning opportunities
- Connect with other students

---

🤖 AI Match

Campus Exchange includes an AI-powered matching feature designed to help students discover suitable learning partners.

The matching system analyzes relevant student information such as:

- Skills
- Learning interests
- Subjects
- Teaching/learning preferences

The system generates a matching result to help students identify potentially suitable connections.

---

📚 Resources

Students can access and share academic resources such as:

- Notes
- Study materials
- Previous-year questions
- Other useful educational resources

---

🔐 Authentication

The application includes user authentication functionality:

- User registration
- Secure login
- Password hashing
- Login validation
- Password reset functionality
- Protected user information

Passwords are securely handled using bcrypt.

---

🧰 Tech Stack

Frontend

"React" (https://img.shields.io/badge/React-2026-blue?logo=react)
"Vite" (https://img.shields.io/badge/Vite-Frontend-purple?logo=vite)
"JavaScript" (https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
"CSS3" (https://img.shields.io/badge/CSS3-Styling-blue?logo=css3)

- React.js
- Vite
- React Router
- JavaScript
- HTML5
- CSS3

Backend

"Node.js" (https://img.shields.io/badge/Node.js-Runtime-green?logo=node.js)
"Express" (https://img.shields.io/badge/Express.js-Backend-black?logo=express)

- Node.js
- Express.js
- REST APIs
- CORS
- dotenv
- bcrypt

Database

"MongoDB" (https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)

- MongoDB Atlas
- Mongoose

AI

- AI-based student matching
- Matching logic based on student skills and interests

---

🏗️ Project Architecture

Campus Exchange
│
├── Frontend
│   ├── React
│   ├── Vite
│   ├── React Router
│   └── CSS
│
├── Backend
│   ├── Node.js
│   ├── Express.js
│   ├── REST APIs
│   └── Authentication
│
├── Database
│   ├── MongoDB Atlas
│   └── Mongoose
│
└── AI
    └── Student Matching System

---

📂 Project Structure

Campus_Exchange_App/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
│
├── public/
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

«Note: The ".env" file should never be uploaded to GitHub.»

---

⚙️ Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/kunalmishra2005/Campus-Exchange.git

Move into the project directory:

cd Campus-Exchange

---

2️⃣ Install Frontend Dependencies

npm install

---

3️⃣ Start the Frontend

npm run dev

The frontend will normally run at:

http://localhost:5173

---

4️⃣ Setup the Backend

Open another terminal:

cd backend

Install backend dependencies:

npm install

---

5️⃣ Configure Environment Variables

Create a ".env" file inside the "backend" folder.

Example:

MONGO_URI=your_mongodb_connection_string
PORT=5000

Add any other API keys required by your implementation.

Never commit ".env" to GitHub.

---

6️⃣ Start the Backend

node server.js

The backend will normally run at:

http://localhost:5000

---

🔐 Authentication Flow

The authentication system follows this general process:

User
 │
 ▼
Register
 │
 ▼
Password Hashed with bcrypt
 │
 ▼
MongoDB
 │
 ▼
Login
 │
 ▼
Password Verification
 │
 ▼
Authenticated User

This prevents passwords from being stored as plain text.

---

🤖 AI Match Flow

The student matching process can be represented as:

Student Profile
      │
      ▼
Skills & Interests
      │
      ▼
Matching System
      │
      ▼
Compare Relevant Information
      │
      ▼
Matching Score / Result
      │
      ▼
Potential Learning Partner

The purpose of the matching feature is to reduce the difficulty of manually finding students with compatible skills and learning interests.

---

🌐 Main Application Pages

The application includes pages/features such as:

Page| Purpose
🏠 Home| Introduces Campus Exchange
🔐 Login| User authentication
📝 Register| Create a new account
👥 Find Students| Discover other students
🛠️ Skills Marketplace| Find skills and potential teachers
👤 Profile| View student information
📚 Resources| Explore learning resources
📄 Resource Details| View individual resources
🤖 AI Match| Find potential learning matches

---

🛡️ Security Considerations

The application includes basic security practices such as:

- Password hashing using bcrypt
- Environment variables for sensitive configuration
- MongoDB authentication
- Backend API validation
- CORS configuration
- Separation of frontend and backend

Sensitive credentials and API keys should remain inside environment variables.

---

🚀 Future Improvements

Possible future improvements include:

- 💬 Real-time student chat
- 🔔 Notifications
- ⭐ Student ratings and reviews
- 📱 Improved mobile responsiveness
- ☁️ Cloud-based resource storage
- 🧠 More advanced semantic AI matching
- 📧 Email notifications
- 👥 Group study rooms
- 📅 Study session scheduling
- 🔎 Advanced search and filtering

---

🎯 Project Goals

Campus Exchange was developed with the following goals:

1. Make student-to-student learning easier.
2. Help students discover useful skills and resources.
3. Connect students with compatible learning interests.
4. Provide a centralized platform for academic resource sharing.
5. Demonstrate the integration of a modern frontend, backend, database, authentication, and AI functionality.

---

📸 Screenshots

Add screenshots of your application here.

🏠 Home Page

[ Add Home Page Screenshot ]

🔐 Login

[ Add Login Screenshot ]

👥 Find Students

[ Add Find Students Screenshot ]

🛠️ Skills Marketplace

[ Add Skills Marketplace Screenshot ]

🤖 AI Match

[ Add AI Match Screenshot ]

📚 Resources

[ Add Resources Screenshot ]

---

💻 Local Development

For development, run the frontend and backend separately.

Terminal 1 — Frontend

npm run dev

Terminal 2 — Backend

cd backend
node server.js

---

📊 What I Learned

Through this project, I worked with:

- React.js
- Vite
- React Router
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- REST APIs
- Authentication
- Password hashing
- Git & GitHub
- AI-based matching
- Frontend-backend integration
- Environment variables
- Full-stack project structure

---

👨‍💻 Developer

Kunal Mishra

B.Tech — Computer Science

Interested in:

- Artificial Intelligence & Machine Learning
- Software Development
- Full-Stack Development
- Data & AI Applications

GitHub

🔗 "Kunal Mishra on GitHub" (https://github.com/kunalmishra2005)

Project Repository

🔗 "Campus Exchange" (https://github.com/kunalmishra2005/Campus-Exchange)

---

⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

<p align="center">
  Built with ❤️ using React, Node.js, Express & MongoDB
</p><p align="center">
  <strong>Campus Exchange — Students Helping Students 🚀</strong>
</p>
