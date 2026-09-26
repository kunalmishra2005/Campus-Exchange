import { Link, useParams } from 'react-router-dom'

function ResourceDetails() {
  const { title } = useParams()

  const resourceTitle = title
    ? decodeURIComponent(title)
    : 'Resource Details'

  return (
    <main className="profile-section">

      <div className="profile-card">

        <div className="profile-avatar">
          📚
        </div>

        <p className="tagline">Campus Resource</p>

        <h1>{resourceTitle}</h1>

        <p className="profile-role">
          Shared by a Campus Exchange student
        </p>

        <div className="profile-info">

          <div>
            <h3>Resource Type</h3>
            <p>Study Material</p>
          </div>

          <div>
            <h3>Description</h3>
            <p>
              This resource has been shared to help students
              learn, practice and prepare more effectively.
            </p>
          </div>

          <div>
            <h3>Category</h3>
            <p>Educational Resource</p>
          </div>

        </div>

        <button className="primary-btn">
          Download / Access Resource
        </button>

        <br />
        <br />

        <Link to="/resources" className="secondary-btn">
          Back to Resources
        </Link>

      </div>

    </main>
  )
}

export default ResourceDetails