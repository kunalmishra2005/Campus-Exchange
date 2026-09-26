# Campus Exchange 🎓
Campus Exchange is a student-focused web platform where students can connect with other students to learn skills, teach skills, share educational resources, and discover potential learning matches.
The project was built as a full-stack web application using React, Node.js, Express, MongoDB, and Gemini AI.

🚀 Project Overview
Students often have useful skills, notes, study material, and knowledge that can help other students. Campus Exchange brings these opportunities together in one platform.
Main idea
Students Helping Students
A student can:
Create an account
Add their college and semester
Add skills they can teach
Add skills they want to learn
Add subjects and interests
Search for students by name or skill
View student profiles
Edit profile information
Explore educational resources
View resource details
Get an AI-powered skill matching suggestion
Log in securely with a hashed password
Reset their password
✨ Features
🎓 Skills Marketplace
The Skills Marketplace retrieves registered students from the backend and displays students who have added skills they can teach.
Users can:
Search by student name
Search by skill
View student profiles
See skills a student can teach
See skills the student wants to learn
View college, semester, subjects, and bio
📚 Resource Marketplace
The Resources section provides educational resources such as:
React.js notes
DSA previous-year questions
Machine Learning roadmaps
Web development cheat sheets
Resources can be searched and filtered by category.
👤 Student Profiles
Each student profile can display:
Name
College
Semester
Skills to teach
Skills to learn
Subjects and interests
Bio
Students can also edit their profile information.
🔐 Authentication
The backend provides:
User registration
User login
Password hashing using bcrypt
Password verification during login
Password reset functionality
Passwords are never stored as plain text in the database.
🤖 AI Skill Match
Campus Exchange includes an AI-powered matching assistant.
The system:
Reads the selected student's learning goals.
Finds other students who have skills they can teach.
Sends the available student/skill information to the Gemini API.
Generates a short recommendation explaining which students may be useful connections.
This helps students discover relevant people instead of manually checking every profile.
🧭 React Routing
The frontend uses React Router for navigation between:
Home
Skills
Resources
Login
Register
Student Profile
Edit Profile
Resource Details
Forgot Password
Reset Password
🛠️ Tech Stack
Frontend
React
React DOM
React Router
Vite
JavaScript
HTML
CSS
Backend
Node.js
Express.js
MongoDB
Mongoose
bcrypt
CORS
dotenv
AI
Google Gemini API
Development Tools
VS Code
Git
GitHub
MongoDB Atlas
📁 Project Structure
Campus_Exchange_App/
│
├── backend/
│   ├── models/
│   │   └── User.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Navbar.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Profile.jsx
│   │   ├── EditProfile.jsx
│   │   ├── skills.jsx
│   │   ├── Resources.jsx
│   │   ├── ResourceDetails.jsx
│   │   ├── ForgotPassword.jsx
│   │   └── ResetPassword.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
⚙️ Getting Started
1. Clone the repository
git clone https://github.com/kunalmishra2005/Campus-Exchange.git
cd Campus-Exchange
2. Install frontend dependencies
From the project root:
npm install
3. Install backend dependencies
Open a terminal inside the backend folder:
cd backend
npm install
4. Configure environment variables
Create or update:
backend/.env
Add your MongoDB connection string and Gemini API key:
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
Never commit your .env file or API keys to GitHub.
5. Start the backend
Inside the backend folder:
node server.js
The backend runs on:
http://localhost:5000
6. Start the frontend
Open another terminal in the project root:
npm run dev
Vite will provide the local frontend URL, normally:
http://localhost:5173
🔌 Main API Endpoints
Method
Endpoint
Purpose
GET
/
Check whether backend is running
POST
/api/register
Register a new student
POST
/api/login
Authenticate a student
POST
/api/reset-password
Reset a user's password
GET
/api/users
Get students for the Skills Marketplace
GET
/api/users/:name
Get a student's profile
PUT
/api/users/:name
Update a student's profile
GET
/api/ai-match/:name
Generate an AI skill-match suggestion
🔐 Security Notes
The project uses several basic security practices:
Passwords are hashed with bcrypt before being stored.
Password comparison is performed using bcrypt.
Database credentials are stored in environment variables.
Gemini API credentials are stored in environment variables.
Password fields are excluded from the general users API response.
For a production deployment, additional security measures such as JWT authentication, authorization middleware, rate limiting, stronger validation, secure cookies/tokens, and a production-grade password-reset flow should be added.
🧠 How AI Matching Works
The AI matching flow is:
Student Profile
      ↓
Skills the student wants to learn
      ↓
Find students who can teach skills
      ↓
Create matching context
      ↓
Gemini API
      ↓
AI-generated recommendation
      ↓
Display suggestion on profile
The AI acts as a matching assistant rather than simply performing a keyword search.
🎯 Future Improvements
Possible future improvements include:
JWT-based authentication
Protected routes
Real student-to-student skill exchange requests
Real resource uploads and downloads
Cloudinary integration for file storage
Notifications
Real-time messaging
Advanced semantic skill matching
Improved password recovery using secure, time-limited email tokens
User ratings and reviews
Admin dashboard
Production deployment
Mobile-responsive improvements
🌐 Repository
GitHub:
https://github.com/kunalmishra2005/Campus-Exchange⁠�
👨‍💻 Author
Kunal Mishra
B.Tech Computer Science & Engineering
📄 License
This project is created for educational and project-development purposes. """
out = Path("/mnt/data/README.md") out.write_text(readme, encoding="utf-8") print(f"Created: {out}")
