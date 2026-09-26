🎓 Campus Exchange

Skills • Knowledge • Resources — Students Helping Students

<p align="center">
  <b>Learn Together • Share Knowledge • Grow Together 🚀</b>
</p><p align="center">
  A full-stack student learning and knowledge-exchange platform with AI-powered student matching.
</p>---

🌟 Overview

Campus Exchange is a full-stack educational platform designed to connect students with other students based on their skills, learning interests, knowledge, and academic resources.

Students can create profiles, discover other students, find skills they want to learn, share skills they can teach, access educational resources, and use the AI Match feature to discover suitable learning connections.

The goal is simple:

«Make it easier for students to learn from each other.»

---

🎯 Problem

Students often have valuable skills, knowledge, notes, and study resources that could help others.

However, finding the right student to learn from or the right person to teach can be difficult.

Campus Exchange addresses this problem by bringing students, skills, resources, and intelligent matching together in one platform.

---

💡 Solution

Campus Exchange provides a centralized environment where students can:

- 👤 Create their own learning profile
- 🛠️ Share skills they can teach
- 📚 Find skills they want to learn
- 🔎 Discover other students
- 🤝 Find suitable learning connections
- 📖 Access educational resources
- 🤖 Use AI-powered student matching
- 🔐 Securely manage their account

---

✨ Features

👤 Student Profiles

Students can create and manage their profiles with information such as:

- Name
- Email
- College
- Semester
- Bio
- Skills they can teach
- Skills they want to learn
- Academic interests

This helps other students understand what they can learn from each person.

---

🔎 Find Students

Students can search and discover other students based on their interests and skills.

This makes it easier to find potential:

- Learning partners
- Skill-sharing partners
- Study partners
- Knowledge-sharing connections

---

🛠️ Skills Marketplace

The Skills Marketplace connects students who can teach with students who want to learn.

Students can explore different skills and find people who are willing to share their knowledge.

Example

Student A
Can Teach → Python, JavaScript

        ↕ Knowledge Exchange

Student B
Wants to Learn → Python

---

🤖 AI Match

One of the core features of Campus Exchange is AI Match.

Instead of requiring students to manually search through many profiles, the system analyzes relevant student information and identifies potentially suitable learning connections.

Matching Process

Student Profile
      │
      ▼
Skills & Interests
      │
      ▼
AI Matching System
      │
      ▼
Compatibility Analysis
      │
      ▼
Matching Result
      │
      ▼
Potential Learning Partner

The feature is designed to make student discovery more relevant and reduce the effort required to find suitable learning connections.

---

📚 Educational Resources

Campus Exchange also provides a dedicated resource area where students can discover and share useful academic material.

Resources can include:

- 📖 Notes
- 📝 Study material
- 📄 Previous-year questions
- 🎓 Academic resources
- 📚 Other useful learning content

Students can view individual resources through the resource details section.

---

🔐 Authentication & Account Security

Campus Exchange includes a complete authentication flow.

Features

- User registration
- User login
- Password verification
- Password hashing
- Password reset
- Invalid login handling
- Secure environment variables

Passwords are hashed using bcrypt instead of being stored as plain text.

Authentication Flow

Register
   │
   ▼
Password Hashing
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

---

🏗️ Technology Stack

Frontend

<p>
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-Build%20Tool-646CFF?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/CSS3-Styling-1572B6?logo=css3&logoColor=white" />
</p>- React.js
- Vite
- React Router
- JavaScript
- HTML5
- CSS3

---

Backend

<p>
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-API-000000?logo=express&logoColor=white" />
</p>- Node.js
- Express.js
- REST APIs
- CORS
- dotenv
- bcrypt

---

Database

<p>
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Mongoose-ODM-880000?logo=mongoose&logoColor=white" />
</p>- MongoDB Atlas
- Mongoose

---

AI

- AI-powered student matching
- Skill and interest analysis
- Student compatibility matching

---

🏛️ System Architecture

                  ┌──────────────────────┐
                  │      Student         │
                  │       Browser        │
                  └──────────┬───────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │   React + Vite       │
                  │      Frontend        │
                  └──────────┬───────────┘
                             │
                         REST API
                             │
                             ▼
                  ┌──────────────────────┐
                  │   Node + Express     │
                  │       Backend        │
                  └──────────┬───────────┘
                             │
                 ┌───────────┴───────────┐
                 │                       │
                 ▼                       ▼
        ┌─────────────────┐     ┌─────────────────┐
        │ MongoDB Atlas   │     │    AI Match     │
        │    Database     │     │     System      │
        └─────────────────┘     └─────────────────┘

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

«⚠️ Never upload your ".env" file or private API credentials to GitHub.»

---

⚙️ Installation

1. Clone the Repository

git clone https://github.com/kunalmishra2005/Campus-Exchange.git

cd Campus-Exchange

---

2. Install Frontend Dependencies

npm install

---

3. Start the Frontend

npm run dev

The frontend will normally be available at:

http://localhost:5173

---

🖥️ Backend Setup

Open another terminal.

cd backend

Install dependencies:

npm install

---

🔑 Environment Variables

Create a ".env" file inside the "backend" folder.

Example:

MONGO_URI=your_mongodb_connection_string
PORT=5000

Add any additional environment variables required by your implementation.

«Important: Keep ".env" private and never commit it to GitHub.»

---

▶️ Start the Backend

node server.js

The backend will normally run at:

http://localhost:5000

---

🌐 Application Pages

Page| Purpose
🏠 Home| Introduces Campus Exchange
🔐 Login| Secure user login
📝 Register| Create a student account
👤 Profile| Student profile information
👥 Find Students| Discover other students
🛠️ Skills Marketplace| Explore skills and potential teachers
🤖 AI Match| Find suitable student matches
📚 Resources| Explore educational resources
📄 Resource Details| View individual resources

---

🔄 How Campus Exchange Works

             STUDENT
                │
                ▼
        Create an Account
                │
                ▼
         Build a Profile
                │
        ┌───────┴────────┐
        │                │
        ▼                ▼
   Skills to Teach   Skills to Learn
        │                │
        └───────┬────────┘
                ▼
            AI Match
                │
                ▼
       Find Suitable Students
                │
                ▼
        Exchange Knowledge
                │
                ▼
          Learn & Grow 🚀

---

🎓 Educational Impact

Campus Exchange focuses on peer-to-peer learning.

Instead of learning only through traditional teacher-student structures, students can also learn from one another.

The platform encourages:

- Knowledge sharing
- Skill exchange
- Peer learning
- Resource sharing
- Collaboration
- Student networking

The goal is to turn students from only learners into both learners and contributors.

---

🧠 Why AI Matters

AI Match is not designed as a separate decorative feature.

It supports the central purpose of Campus Exchange:

«Finding the right student to learn from.»

Without matching, students may need to manually search through many profiles.

With AI-powered matching, relevant student information can be analyzed to help identify potentially compatible learning connections.

This makes the platform more personalized and reduces the effort involved in discovering suitable students.

---

🧪 Example Use Case

Student A

Can Teach:
• Python
• Machine Learning

Wants to Learn:
• Web Development

Student B

Can Teach:
• React
• Web Development

Wants to Learn:
• Python
• Machine Learning

AI Match

The system can identify that these students have complementary learning interests.

Student A  ↔  Student B
     Knowledge Exchange
           ↓
      Learn Together

---

🚀 Future Improvements

Possible future improvements include:

- 💬 Real-time student chat
- 🔔 Notifications
- ⭐ Student ratings and reviews
- 📱 Enhanced mobile experience
- ☁️ Cloud-based resource storage
- 📧 Email notifications
- 👥 Group study rooms
- 📅 Study session scheduling
- 🔎 More advanced search and filtering
- 🧠 More advanced AI-based semantic matching

---

📸 Screenshots

«Add actual screenshots of the working application here.»

🏠 Home Page

"Add screenshot here"

🔐 Login

"Add screenshot here"

👥 Find Students

"Add screenshot here"

🛠️ Skills Marketplace

"Add screenshot here"

🤖 AI Match

"Add screenshot here"

📚 Resources

"Add screenshot here"

---

📊 Project Highlights

Area| Implementation
Frontend| React + Vite
Backend| Node.js + Express
Database| MongoDB Atlas
ODM| Mongoose
Authentication| Custom authentication + bcrypt
Routing| React Router
AI Feature| AI-powered student matching
API| REST API
Version Control| Git + GitHub

---

📚 Learning Outcomes

Building Campus Exchange provided practical experience with:

- Full-stack web development
- React.js
- REST API development
- Node.js and Express
- MongoDB and Mongoose
- User authentication
- Password hashing
- Frontend-backend integration
- AI-powered functionality
- Git and GitHub
- Environment configuration
- Building an end-to-end educational application

---

👨‍💻 Developer

Kunal Mishra

B.Tech — Computer Science

Interested in:

- Artificial Intelligence & Machine Learning
- Software Development
- Full-Stack Development
- AI-powered applications

GitHub

🔗 https://github.com/kunalmishra2005

Project Repository

🔗 https://github.com/kunalmishra2005/Campus-Exchange

---

⭐ Support the Project

If you find Campus Exchange useful or interesting, consider giving the repository a ⭐ on GitHub.

---

<p align="center">
  Built with ❤️ for student-to-student learning
</p><p align="center">
  <b>Campus Exchange — Students Helping Students 🚀</b>
</p>
