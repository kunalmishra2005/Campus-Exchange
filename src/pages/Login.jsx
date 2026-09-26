import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
   const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

 

  async function handleSubmit(event) {
    event.preventDefault()

    setError('')

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      })

      const data = await response.json()

      if (!response.ok) {
        setError(
          password
            ? 'Incorrect email or password. Please try again.'
            : 'Please enter your password.'
        )
        return
      }

      alert(`Welcome back, ${data.user.name}!`)

setEmail('')
setPassword('')

navigate(`/profile/${encodeURIComponent(data.user.name)}`)

    } catch (error) {
      console.error('Login error:', error)
      setError('Unable to connect to server. Please try again.')
    }
  }

  return (
    <main className="auth-section">
      <div className="auth-card">

        <div className="auth-header">
          <p className="tagline">Welcome Back</p>

          <h1>
            Login to <span>Campus Exchange</span>
          </h1>

          <p>
            Connect with students, share skills and
            discover useful resources.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                setError('')
              }}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value)
                setError('')
              }}
              required
            />
          </div>

          {error && (
  <div className="login-error-box">
    <p>{error}</p>

    <Link to="/forgot-password">
      Forgot your password? Reset it
    </Link>
  </div>
)}

          <button
            type="submit"
            className="primary-btn auth-btn"
          >
            Login
          </button>

        </form>

        <p className="auth-footer">
          Don't have an account?{' '}
          <Link to="/register">Create an account</Link>
        </p>

      </div>
    </main>
  )
}

export default Login