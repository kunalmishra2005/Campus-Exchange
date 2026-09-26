import { Link } from 'react-router-dom'
function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <p className="tagline">
            Students Helping Students
          </p>

          <h1>
            Learn. Share. <span>Exchange.</span>
          </h1>

          <p className="hero-description">
            Campus Exchange connects students who want to
            learn, teach, share knowledge and exchange
            educational resources.
          </p>

          <div className="hero-buttons">
            <Link to="/skills" className="primary-btn">
  Explore Skills
</Link>

<Link to="/resources" className="secondary-btn">
  Share a Resource
</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Everything Students Need to Learn Together</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>🎓 Skills Marketplace</h3>
            <p>
              Find students who can teach the skills you
              want to learn.
            </p>
          </div>

          <div className="feature-card">
            <h3>📚 Resource Sharing</h3>
            <p>
              Share notes, PYQs, study material and useful
              educational resources.
            </p>
          </div>

          <div className="feature-card">
            <h3>🤝 Skill Exchange</h3>
            <p>
              Exchange your skills with other students and
              learn from each other.
            </p>
          </div>

          <div className="feature-card">
            <h3>🤖 Smart Match</h3>
            <p>
              Get intelligent compatibility scores to find
              students who match your learning goals.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
