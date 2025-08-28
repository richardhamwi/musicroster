import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Music Roster</h1>
      <p className="text-sm text-gray-600">Scaffolding in progress…</p>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 border-b">
        <Link to="/" className="font-medium">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
