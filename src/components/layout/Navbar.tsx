import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-gray-900">
          Music Roster
        </Link>
        <div className="flex space-x-6">
          <Link to="/volunteers" className="text-gray-600 hover:text-gray-900">
            Volunteers
          </Link>
          <Link to="/roster" className="text-gray-600 hover:text-gray-900">
            Roster
          </Link>
          <Link to="/import" className="text-gray-600 hover:text-gray-900">
            Import
          </Link>
        </div>
      </div>
    </nav>
  )
}
