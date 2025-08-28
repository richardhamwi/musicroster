import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import DashboardPage from '@/pages/DashboardPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/volunteers" element={<div className="p-6">Volunteers page - coming soon</div>} />
            <Route path="/roster" element={<div className="p-6">Roster page - coming soon</div>} />
            <Route path="/roster/generate" element={<div className="p-6">Generate roster page - coming soon</div>} />
            <Route path="/import" element={<div className="p-6">Import page - coming soon</div>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
