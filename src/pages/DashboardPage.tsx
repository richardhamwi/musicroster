import { Link } from 'react-router-dom'
import Button from '@/components/common/Button'

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Next 3 Sundays</h3>
          <div className="space-y-2">
            <div className="text-sm text-gray-600">Status: Complete</div>
            <div className="text-sm text-gray-600">Unfilled slots: 0</div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Volunteers</h3>
          <div className="text-sm text-gray-600">Total: 0</div>
          <div className="text-sm text-gray-600">Active: 0</div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Bands</h3>
          <div className="text-sm text-gray-600">Total: 0</div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link to="/volunteers">
          <Button variant="primary" className="w-full">
            Manage Volunteers
          </Button>
        </Link>
        
        <Link to="/roster/generate">
          <Button variant="primary" className="w-full">
            Generate Roster
          </Button>
        </Link>
        
        <Link to="/import">
          <Button variant="outline" className="w-full">
            Import Unavailability
          </Button>
        </Link>
        
        <Link to="/roster">
          <Button variant="outline" className="w-full">
            View Full Roster
          </Button>
        </Link>
      </div>
    </div>
  )
}
