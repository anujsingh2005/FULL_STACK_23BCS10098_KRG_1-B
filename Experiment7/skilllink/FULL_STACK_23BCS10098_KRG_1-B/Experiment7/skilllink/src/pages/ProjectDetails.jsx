import React from 'react'
import { useParams, Link } from 'react-router-dom'

function ProjectDetails() {
  const { id } = useParams()
  // For demo purposes, you might want to fetch the real project here by ID
  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded shadow">
      <h2 className="text-2xl font-bold mb-2">Project Details (ID: {id})</h2>
      <p className="mb-3 text-gray-500">Here you would show full project info, description, employer, all bids, etc.</p>
      {/* For now, just a back button */}
      <Link to="/projects" className="btn-primary">Back to Project List</Link>
    </div>
  )
}
export default ProjectDetails
