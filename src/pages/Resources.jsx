import { useState } from 'react'
import { Link } from 'react-router-dom'

function Resources() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const resources = [
    {
      title: 'React.js Complete Notes',
      category: 'Coding',
      type: 'Study Notes',
      description:
        'Useful notes covering React components, props, state and hooks.',
      sharedBy: 'Aarav Sharma',
    },
    {
      title: 'Data Structures & Algorithms PYQs',
      category: 'PYQs',
      type: 'Previous Year Questions',
      description:
        'Collection of important DSA previous year questions for practice.',
      sharedBy: 'Rahul Verma',
    },
    {
      title: 'Machine Learning Roadmap',
      category: 'AI & ML',
      type: 'Study Material',
      description:
        'A beginner-friendly roadmap for learning machine learning step by step.',
      sharedBy: 'Priya Singh',
    },
    {
      title: 'Web Development Cheat Sheet',
      category: 'Coding',
      type: 'Coding Resource',
      description:
        'Quick reference for HTML, CSS, JavaScript and common web development concepts.',
      sharedBy: 'Ananya Gupta',
    },
  ]

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(search.toLowerCase()) ||
      resource.description.toLowerCase().includes(search.toLowerCase())

    const matchesCategory =
      category === 'All' || resource.category === category

    return matchesSearch && matchesCategory
  })

  return (
    <main className="page-section">

      <div className="page-header">
        <p className="tagline">Resource Marketplace</p>

        <h1>
          Share & Discover <span>Resources</span>
        </h1>

        <p>
          Find useful study materials shared by students,
          or contribute resources that can help others learn.
        </p>
      </div>

      {/* Search and Filter */}

      <div className="resource-filters">

        <input
          type="text"
          placeholder="Search resources..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Coding">Coding</option>
          <option value="PYQs">PYQs</option>
          <option value="AI & ML">AI & ML</option>
        </select>

      </div>

      {/* Resource Cards */}

      <div className="resource-grid">

        {filteredResources.map((resource, index) => (
          <div className="resource-card" key={index}>

            <div className="resource-icon">
              📚
            </div>

            <span className="resource-type">
              {resource.type}
            </span>

            <h3>{resource.title}</h3>

            <p>{resource.description}</p>

            <div className="resource-footer">
              <span>
                Shared by {resource.sharedBy}
              </span>

              <Link
  to={`/resource/${encodeURIComponent(resource.title)}`}
  className="primary-btn profile-btn"
>
  View Resource
</Link>
            </div>

          </div>
        ))}

      </div>

      {filteredResources.length === 0 && (
        <div className="no-results">
          <h3>No resources found</h3>
          <p>Try another search or category.</p>
        </div>
      )}

    </main>
  )
}

export default Resources