const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
require('dotenv').config()

const User = require('./models/User')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Check MongoDB URI
console.log(
  'MONGO_URI loaded:',
  process.env.MONGO_URI ? 'YES' : 'NO'
)

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully!')
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error)
  })

// Test Route
app.get('/', (req, res) => {
  res.send('Campus Exchange Backend is running')
})

// ===============================
// REGISTER
// ===============================
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({
        message: 'All fields are required'
      })
    }

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(400).json({
        message: 'User already exists'
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new User({
      name,
      email,
      password: hashedPassword
    })

    await newUser.save()

    res.status(201).json({
      message: 'Registration successful'
    })

  } catch (error) {
    console.error('Registration error:', error)

    res.status(500).json({
      message: 'Server error'
    })
  }
})

// ===============================
// LOGIN
// ===============================
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({
        message: 'Email and password are required'
      })
    }

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(401).json({
        message: 'Invalid email or password'
      })
    }

    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    )

    if (!passwordMatch) {
      return res.status(401).json({
        message: 'Invalid email or password'
      })
    }

    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    })

  } catch (error) {
    console.error('Login error:', error)

    res.status(500).json({
      message: 'Server error'
    })
  }
})

// ===============================
// RESET PASSWORD
// ===============================
app.post('/api/reset-password', async (req, res) => {
  try {
    const { email, newPassword } = req.body

    if (!email || !newPassword) {
      return res.status(400).json({
        message: 'Email and new password are required'
      })
    }

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }

    const hashedPassword = await bcrypt.hash(
      newPassword,
      10
    )

    user.password = hashedPassword

    await user.save()

    res.status(200).json({
      message: 'Password reset successfully'
    })

  } catch (error) {
    console.error('Password reset error:', error)

    res.status(500).json({
      message: 'Server error'
    })
  }
})

// ===============================
// GET USER PROFILE BY NAME
// ===============================
app.get('/api/users/:name', async (req, res) => {
  try {
    const { name } = req.params

    const user = await User.findOne({
      name: { $regex: new RegExp(`^${name}$`, 'i') }
    })

    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }

    res.status(200).json({
      user: {
        name: user.name,
        email: user.email,
        college: user.college,
        semester: user.semester,
        skillsToTeach: user.skillsToTeach,
        skillsToLearn: user.skillsToLearn,
        subjects: user.subjects,
        bio: user.bio
      }
    })

  } catch (error) {
    console.error('Get profile error:', error)

    res.status(500).json({
      message: 'Server error'
    })
  }
})
// ===============================
// UPDATE USER PROFILE BY NAME
// ===============================
app.put('/api/users/:name', async (req, res) => {
  try {
    const { name } = req.params

    const {
      college,
      semester,
      bio,
      skillsToTeach,
      skillsToLearn,
      subjects
    } = req.body

    const user = await User.findOne({
      name: { $regex: new RegExp(`^${name}$`, 'i') }
    })

    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      })
    }

    if (college !== undefined) user.college = college
    if (semester !== undefined) user.semester = semester
    if (bio !== undefined) user.bio = bio
    if (skillsToTeach !== undefined) user.skillsToTeach = skillsToTeach
    if (skillsToLearn !== undefined) user.skillsToLearn = skillsToLearn
    if (subjects !== undefined) user.subjects = subjects

    await user.save()

    res.status(200).json({
      message: 'Profile updated successfully',
      user: {
        name: user.name,
        email: user.email,
        college: user.college,
        semester: user.semester,
        skillsToTeach: user.skillsToTeach,
        skillsToLearn: user.skillsToLearn,
        subjects: user.subjects,
        bio: user.bio
      }
    })

  } catch (error) {
    console.error('Update profile error:', error)

    res.status(500).json({
      message: 'Server error'
    })
  }
})
// ===============================
// GET ALL USERS (for Skills Marketplace / Search)
// ===============================
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find().select('-password')

    res.status(200).json({
      users
    })

  } catch (error) {
    console.error('Get all users error:', error)

    res.status(500).json({
      message: 'Server error'
    })
  }
})
// ===============================
// AI SKILL MATCH ASSISTANT
// ===============================
app.get('/api/ai-match/:name', async (req, res) => {
  try {
    const { name } = req.params

    const student = await User.findOne({
      name: { $regex: new RegExp(`^${name}$`, 'i') }
    })

    if (!student) {
      return res.status(404).json({ message: 'User not found' })
    }

    const teachers = await User.find({
      skillsToTeach: { $exists: true, $ne: [] },
      name: { $ne: student.name }
    })

    const teacherList = teachers
      .map(
        (t) =>
          `- ${t.name}: can teach ${t.skillsToTeach.join(', ')}`
      )
      .join('\n')

    const prompt = `You are a helpful campus mentor-matching assistant.

Student "${student.name}" wants to learn: ${
      student.skillsToLearn.length
        ? student.skillsToLearn.join(', ')
        : 'nothing specified yet'
    }

Available students who can teach:
${teacherList || 'No teachers available yet.'}

In 3-4 short sentences, recommend which student(s) they should connect with and why. Be specific and friendly. If no good match exists, say so honestly.`

    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    )

    const geminiData = await geminiResponse.json()
console.log('Gemini raw response:', JSON.stringify(geminiData))
    const suggestion =
      geminiData?.candidates?.[0]?.content?.parts?.[0]?.text ||
      'AI could not generate a suggestion right now.'

    res.status(200).json({ suggestion })

  } catch (error) {
    console.error('AI match error:', error)
    res.status(500).json({ message: 'Server error' })
  }
})

// ===============================
// START SERVER
// ===============================
const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})