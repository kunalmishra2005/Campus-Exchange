import { useState } from 'react'
import { Link } from 'react-router-dom'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    setMessage('')
    setError('')
    setLoading(true)

    try {
      const response = await fetch(
        'http://localhost:5000/api/forgot-password',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email
          })
        }
      )

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || 'Something went wrong')
        return
      }

      setMessage(data.message)
    } catch (error) {
      console.error('Forgot password error:', error)

      setError('Unable to connect to server')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="auth-section">
      <div className="auth-card">

        <div className="auth-header">
          <p className="tagline">Account Recovery</p>

          <h1>
            Reset <span>Password</span>
          </h1>

          <p>
            Enter your registered email address to reset your password.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="forgot-email">Email</label>

            <input
              id="forgot-email"
              type="email"
              placeholder="Enter your registered email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                setMessage('')
                setError('')
              }}
              required
            />
          </div>

          {message && (
            <p className="success-message">
              {message}
            </p>
          )}

          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="primary-btn auth-btn"
            disabled={loading}
          >
            {loading
              ? 'Sending...'
              : 'Send Reset Instructions'}
          </button>

        </form>

        <p className="auth-footer">
          Remember your password?{' '}
          <Link to="/login">Back to Login</Link>
        </p>

      </div>
    </main>
  )
}

export default ForgotPassword