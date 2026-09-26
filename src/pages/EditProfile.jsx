import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

function EditProfile() {
  const { name } = useParams()
  const navigate = useNavigate()

  const [college, setCollege] = useState('')
  const [semester, setSemester] = useState('')
  const [bio, setBio] = useState('')
  const [skillsToTeach, setSkillsToTeach] = useState('')
  const [skillsToLearn, setSkillsToLearn] = useState('')
  const [subjects, setSubjects] = useState('')

  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setMessage('')

    try {
      const response = await fetch(
        `http://localhost:5000/api/users/${encodeURIComponent(name)}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            college,
            semester,
            bio,
            skillsToTeach: skillsToTeach
              .split(',')
              .map((item) => item.trim())
              .filter(Boolean),
            skillsToLearn: skillsToLearn
              .split(',')
              .map((item) => item.trim())
              .filter(Boolean),
            subjects: subjects
              .split(',')
              .map((item) => item.trim())
              .filter(Boolean)
          })
        }
      )

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || 'Update failed')
        return
      }

      setMessage('Profile updated successfully!')

      setTimeout(() => {
        navigate(`/profile/${name}`)
      }, 1000)

    } catch (error) {
      console.error('Update profile error:', error)
      setError('Unable to connect to server')
    }
  }

  return (
    <main className="profile-section">
      <div className="profile-card">
        <h1>Edit Profile</h1>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="college">College</label>
            <input
              id="college"
              type="text"
              value={college}
              onChange={(event) => setCollege(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="semester">Semester</label>
            <input
              id="semester"
              type="text"
              value={semester}
              onChange={(event) => setSemester(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <input
              id="bio"
              type="text"
              value={bio}
              onChange={(event) => setBio(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="skillsToTeach">
              Skills I Can Teach (comma separated)
            </label>
            <input
              id="skillsToTeach"
              type="text"
              placeholder="e.g. Python, DSA, React"
              value={skillsToTeach}
              onChange={(event) => setSkillsToTeach(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="skillsToLearn">
              Skills I Want To Learn (comma separated)
            </label>
            <input
              id="skillsToLearn"
              type="text"
              placeholder="e.g. UI Design, Public Speaking"
              value={skillsToLearn}
              onChange={(event) => setSkillsToLearn(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="subjects">
              Subjects & Interests (comma separated)
            </label>
            <input
              id="subjects"
              type="text"
              value={subjects}
              onChange={(event) => setSubjects(event.target.value)}
            />
          </div>

          {error && <p className="login-error">{error}</p>}
          {message && <p className="success-message">{message}</p>}

          <button type="submit" className="primary-btn auth-btn">
            Save Profile
          </button>

        </form>

        <Link to={`/profile/${name}`} className="secondary-btn">
          Back to Profile
        </Link>

      </div>
    </main>
  )
}

export default EditProfile