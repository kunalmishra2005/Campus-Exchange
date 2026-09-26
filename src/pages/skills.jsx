import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Skills() {
  const [search, setSearch] = useState('')
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('http://localhost:5000/api/users')
        const data = await response.json()

        if (!response.ok) {
          setError(data.message || 'Unable to load students')
          return
        }

        // Only show students who have added at least one skill to teach
        const withSkills = data.users.filter(
          (user) => user.skillsToTeach && user.skillsToTeach.length > 0
        )

        setStudents(withSkills)
      } catch (error) {
        console.error('Fetch users error:', error)
        setError('Unable to connect to server')
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  const filteredStudents = students.filter((student) => {
    const term = search.toLowerCase()

    const nameMatch = student.name.toLowerCase().includes(term)

    const skillMatch = student.skillsToTeach.some((skill) =>
      skill.toLowerCase().includes(term)
    )

    return nameMatch || skillMatch
  })

  return (
    <main className="page-section">

      <div className="page-header">
        <p className="tagline">Skills Marketplace</p>

        <h1>
          Learn from <span>Other Students</span>
        </h1>

        <p>
          Find students who can teach you the skills you want
          to learn, or share your own skills with others.
        </p>
      </div>

      <div className="skill-filters">
        <input
          type="text"
          placeholder="Search skills or students..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      {loading && <p>Loading students...</p>}

      {error && <p className="login-error">{error}</p>}

      {!loading && !error && (
        <div className="skill-grid">

          {filteredStudents.map((student) => (
            <div className="skill-card" key={student._id}>

              <div className="student-header">
                <div className="student-avatar">
                  {student.name.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h3>{student.name}</h3>

                  <p className="student-category">
                    {student.college || 'Campus Exchange Student'}
                  </p>
                </div>
              </div>

              <div className="skill-info">
                <h4>{student.skillsToTeach.join(' • ')}</h4>
              </div>

              <p className="skill-description">
                {student.bio || 'No bio added yet.'}
              </p>

              <Link
                to={`/profile/${encodeURIComponent(student.name)}`}
                className="primary-btn profile-btn"
              >
                View Profile
              </Link>

            </div>
          ))}

        </div>
      )}

      {!loading && !error && filteredStudents.length === 0 && (
        <div className="no-results">
          <h3>No students found</h3>
          <p>Try another skill or name.</p>
        </div>
      )}

    </main>
  )
}

export default Skills