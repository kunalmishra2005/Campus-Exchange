import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Campus<span>Exchange</span>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/login" className="login-btn">
          Login
        </Link>
      </div>
    </nav>
  )
}

export default Navbar