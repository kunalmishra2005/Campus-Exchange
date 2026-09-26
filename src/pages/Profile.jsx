import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Profile() {
  const { name } = useParams()

  const [user, setUser] = useState(null)
  const [error, setError] = useState('')

  const [aiSuggestion, setAiSuggestion] = useState('')
  const [aiLoading, setAiLoading] = useState(false)

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await fetch(
          `http://localhost:5000/api/users/${encodeURIComponent(name)}`
        )

        const data = await response.json()

        if (!response.ok) {
          setError(data.message || 'Unable to load profile')
          return
        }

        setUser(data.user)
      } catch (error) {
        console.error('Profile fetch error:', error)
        setError('Unable to connect to server')
      }
    }

    if (name) {
      fetchProfile()
    }
  }, [name])

  async function getAiSuggestion() {
    setAiLoading(true)
    setAiSuggestion('')

    try {
      const response = await fetch(
        `http://localhost:5000/api/ai-match/${encodeURIComponent(name)}`
      )
      const data = await response.json()
      setAiSuggestion(data.suggestion || 'No suggestion available.')
    } catch (error) {
      console.error('AI match error:', error)
      setAiSuggestion('Unable to connect to AI assistant.')
    } finally {
      setAiLoading(false)
    }
  }

  if (error) {
    return (
      <main className="profile-section">
        <div className="profile-card">
          <h1>Profile Not Found</h1>
          <p>{error}</p>

          <Link to="/skills" className="secondary-btn">
            Back to Skills
          </Link>
        </div>
      </main>
    )
  }

  if (!user) {
    return (
      <main className="profile-section">
        <div className="profile-card">
          <p>Loading profile...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="profile-section">

      <div className="profile-card">

        <div className="profile-avatar">
          {user.name.charAt(0).toUpperCase()}
        </div>

        <h1>{user.name}</h1>

        <p className="profile-role">
          Campus Exchange Student
        </p>

        <div className="profile-info">

          <div>
            <h3>College</h3>
            <p>{user.college || 'Not provided'}</p>
          </div>

          <div>
            <h3>Semester</h3>
            <p>{user.semester || 'Not provided'}</p>
          </div>

          <div>
            <h3>Skills I Can Teach</h3>
            <p>
              {user.skillsToTeach?.length
                ? user.skillsToTeach.join(' • ')
                : 'No skills added yet'}
            </p>
          </div>

          <div>
            <h3>Skills I Want To Learn</h3>
            <p>
              {user.skillsToLearn?.length
                ? user.skillsToLearn.join(' • ')
                : 'No skills added yet'}
            </p>
          </div>

          <div>
            <h3>Subjects & Interests</h3>
            <p>
              {user.subjects?.length
                ? user.subjects.join(' • ')
                : 'No subjects added yet'}
            </p>
          </div>

          <div>
            <h3>About</h3>
            <p>
              {user.bio ||
                'This student has not added a bio yet.'}
            </p>
          </div>

        </div>

        <button
          onClick={getAiSuggestion}
          className="primary-btn"
          disabled={aiLoading}
        >
          {aiLoading ? 'Thinking...' : '✨ Get AI Skill Match'}
        </button>

        {aiSuggestion && (
          <div className="ai-suggestion-box">
            <h3>AI Suggestion</h3>
            <p>{aiSuggestion}</p>
          </div>
        )}

        <Link to={`/profile/${name}/edit`} className="primary-btn">
          Edit Profile
        </Link> 
        <Link to="/skills" className="secondary-btn">
          Back to Skills
        </Link> 
      </div>
        </main>
  )
}
export default Profile