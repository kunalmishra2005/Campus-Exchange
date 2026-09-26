import { useState } from 'react'
import { Link } from 'react-router-dom'

function ResetPassword() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    setMessage('')
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    try {
      const response = await fetch(
        'http://localhost:5000/api/reset-password',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            newPassword: password
          })
        }
      )

      const data = await response.json()

      if (!response.ok) {
        setError(data.message)
        return
      }

      setMessage('Password reset successfully!')

      setEmail('')
      setPassword('')
      setConfirmPassword('')

    } catch (error) {
      console.error('Reset password error:', error)

      setError(
        'Unable to connect to server. Please try again.'
      )
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
            Enter your email and create a new password
            for your Campus Exchange account.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="reset-email">
              Email Address
            </label>

            <input
              id="reset-email"
              type="email"
              placeholder="Enter your registered email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                setError('')
              }}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="new-password">
              New Password
            </label>

            <input
              id="new-password"
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value)
                setError('')
              }}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-new-password">
              Confirm New Password
            </label>

            <input
              id="confirm-new-password"
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(event) => {
                setConfirmPassword(event.target.value)
                setError('')
              }}
              required
            />
          </div>

          {error && (
            <p className="login-error">
              {error}
            </p>
          )}

          {message && (
            <p className="success-message">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="primary-btn auth-btn"
          >
            Reset Password
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

export default ResetPassword