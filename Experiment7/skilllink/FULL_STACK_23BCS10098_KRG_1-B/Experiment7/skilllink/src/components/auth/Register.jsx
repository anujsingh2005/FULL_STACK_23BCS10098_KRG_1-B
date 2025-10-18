import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('FREELANCER')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add registration logic
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          Register for SkillLink
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input
            type="email"
            className="input"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <select className="input" value={role} onChange={e => setRole(e.target.value)} required>
            <option value="FREELANCER">Freelancer</option>
            <option value="EMPLOYER">Employer</option>
          </select>
          <button type="submit" className="btn-primary w-full">
            Register
          </button>
          <div className="text-center">
            <Link to="/auth/login" className="text-blue-600 hover:text-blue-800">
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
