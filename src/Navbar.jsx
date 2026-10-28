import { Link } from "react-router-dom"

function Navbar() {

  return (
    <nav className="bg-blue-600 text-white p-4">

      <div className="max-w-4xl mx-auto flex flex-wrap gap-5">

        {/* React Router links */}
        <Link to="/home">
          Home
        </Link>

        <Link to="/groups">
          Groups
        </Link>

        <Link to="/guide">
          Guide
        </Link>

        <Link to="/developers">
          Developers
        </Link>

      </div>

    </nav>
  )
}

export default Navbar