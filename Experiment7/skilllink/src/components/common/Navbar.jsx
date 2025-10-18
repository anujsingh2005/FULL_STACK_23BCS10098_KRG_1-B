import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-600 text-white">
      <Link to="/" className="text-xl font-bold">SkillLink</Link>
      <div className="flex gap-4 items-center">
        <Link to="/auth/login">Login</Link>
        <Link to="/auth/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
        <ThemeToggle />
      </div>
    </nav>
  )
}

export default Navbar
