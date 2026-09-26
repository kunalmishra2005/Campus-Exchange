import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [college, setCollege] = useState('')
  const [semester, setSemester] = useState('')
  const [skillsToTeach, setSkillsToTeach] = useState('')
  const [skillsToLearn, setSkillsToLearn] = useState('')
  const [subjects, setSubjects] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          password,
          college,
          semester,
          skillsToTeach: skillsToTeach
            .split(',')
            .map((skill) => skill.trim())
            .filter(Boolean),
          skillsToLearn: skillsToLearn
            .split(',')
            .map((skill) => skill.trim())
            .filter(Boolean),
          subjects: subjects
            .split(',')
            .map((subject) => subject.trim())
            .filter(Boolean)
        })
      })

      const data = await response.json()

      if (!response.ok) {
        alert(data.message)
        return
      }

      alert('Account created successfully!')

      setName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      setCollege('')
      setSemester('')
      setSkillsToTeach('')
      setSkillsToLearn('')
      setSubjects('')

    } catch (error) {
      console.error('Registration error:', error)
      alert('Unable to connect to server')
    }
  }

  return (
    <main className="auth-section">
      <div className="auth-card">

        <div className="auth-header">
          <p className="tagline">Join Campus Exchange</p>

          <h1>
            Create <span>Account</span>
          </h1>

          <p>
            Join other students, share your skills and
            discover useful resources.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>

            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="register-email">Email</label>

            <input
              id="register-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="college">College</label>

            <input
              id="college"
              type="text"
              placeholder="Enter your college"
              value={college}
              onChange={(event) => setCollege(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="semester">Semester</label>

            <input
              id="semester"
              type="text"
              placeholder="e.g. 7th"
              value={semester}
              onChange={(event) => setSemester(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="skills-teach">
              Skills You Can Teach
            </label>

            <input
              id="skills-teach"
              type="text"
              placeholder="e.g. Python, React, JavaScript"
              value={skillsToTeach}
              onChange={(event) => setSkillsToTeach(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="skills-learn">
              Skills You Want To Learn
            </label>

            <input
              id="skills-learn"
              type="text"
              placeholder="e.g. Machine Learning, AI"
              value={skillsToLearn}
              onChange={(event) => setSkillsToLearn(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="subjects">
              Subjects / Interests
            </label>

            <input
              id="subjects"
              type="text"
              placeholder="e.g. AI, Data Science, Web Development"
              value={subjects}
              onChange={(event) => setSubjects(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="register-password">Password</label>

            <input
              id="register-password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">
              Confirm Password
            </label>

            <input
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(event) =>
                setConfirmPassword(event.target.value)
              }
              required
            />
          </div>

          <button
            type="submit"
            className="primary-btn auth-btn"
          >
            Create Account
          </button>

        </form>

        <p className="auth-footer">
          Already have an account?{' '}
          <Link to="/login">Login</Link>
        </p>

      </div>
    </main>
  )
}

export default Register