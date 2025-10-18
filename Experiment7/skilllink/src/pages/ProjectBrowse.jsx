import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Mocked categories and skills for filtering; swap with real API data as needed
const ALL_CATEGORIES = ['Web', 'Mobile', 'Data Science', 'Design', 'AI', 'DevOps']
const ALL_SKILLS = [
  'React', 'Node.js', 'Python', 'Django', 'Figma',
  'AWS', 'Machine Learning', 'SQL', 'Java', 'Spring Boot'
]

// Replace with backend API call for real data
const MOCK_PROJECTS = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'Build a modern React storefront with payment integration.',
    category: 'Web',
    skills: ['React', 'Node.js'],
    budgetMin: 500,
    budgetMax: 1500,
    deadline: '2025-11-05',
    createdAt: '2025-10-10'
  },
  {
    id: 2,
    title: 'Mobile Fitness Tracker',
    description: 'Flutter app for workouts and health data sync.',
    category: 'Mobile',
    skills: ['Flutter', 'Firebase'],
    budgetMin: 800,
    budgetMax: 2000,
    deadline: '2025-12-01',
    createdAt: '2025-10-12'
  },
  {
    id: 3,
    title: 'Data Model Optimization',
    description: 'Optimize large-scale ML model for predictions.',
    category: 'AI',
    skills: ['Python', 'Machine Learning'],
    budgetMin: 700,
    budgetMax: 1200,
    deadline: '2025-11-20',
    createdAt: '2025-10-15'
  }
  // Add more sample projects if desired
]

function ProjectBrowse() {
  // Form state for filters
  const [category, setCategory] = useState('')
  const [skills, setSkills] = useState([])
  const [minBudget, setMinBudget] = useState('')
  const [maxBudget, setMaxBudget] = useState('')
  const [deadline, setDeadline] = useState('')
  // Projects to display
  const [projects, setProjects] = useState(MOCK_PROJECTS)
  const [filtered, setFiltered] = useState(MOCK_PROJECTS)

  // Update filtered projects when filters change
  useEffect(() => {
    let filteredList = projects.filter(project => {
      // Category
      if (category && project.category !== category) return false
      // Skills (at least one selected skill matches)
      if (skills.length > 0 && !skills.some(skill => project.skills.includes(skill))) return false
      // Budget
      if (minBudget && project.budgetMax < parseInt(minBudget)) return false
      if (maxBudget && project.budgetMin > parseInt(maxBudget)) return false
      // Deadline
      if (deadline && project.deadline > deadline) return false
      return true
    })
    setFiltered(filteredList)
  }, [category, skills, minBudget, maxBudget, deadline, projects])

  // For real integration: fetch projects from backend API on page load
  // useEffect(() => {
  //   api.get('/projects').then(res => setProjects(res.data)).catch(() => setProjects(MOCK_PROJECTS))
  // }, [])

  return (
    <div className="container max-w-6xl mx-auto mt-10 px-3">
      <h1 className="text-3xl font-bold mb-5 text-blue-800 dark:text-blue-100">Browse Projects</h1>

      {/* Filter Bar */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-5 mb-8 flex flex-wrap gap-4 items-end">
        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
          <select
            className="input"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="">All</option>
            {ALL_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
        {/* Skills */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Skills</label>
          <select
            multiple
            className="input"
            value={skills}
            onChange={e => setSkills(Array.from(e.target.selectedOptions, opt => opt.value))}
            style={{ minHeight: 80 }}
          >
            {ALL_SKILLS.map(skill => <option key={skill} value={skill}>{skill}</option>)}
          </select>
        </div>
        {/* Budget Min/Max */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Min Budget ($)</label>
          <input
            type="number"
            className="input"
            min={0}
            value={minBudget}
            onChange={e => setMinBudget(e.target.value)}
            placeholder="Any"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Max Budget ($)</label>
          <input
            type="number"
            className="input"
            min={0}
            value={maxBudget}
            onChange={e => setMaxBudget(e.target.value)}
            placeholder="Any"
          />
        </div>
        {/* Deadline */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Deadline before</label>
          <input
            type="date"
            className="input"
            value={deadline}
            onChange={e => setDeadline(e.target.value)}
          />
        </div>
        {/* Clear Filters */}
        <button
          className="ml-auto btn-primary"
          onClick={() => {
            setCategory('')
            setSkills([])
            setMinBudget(''); setMaxBudget(''); setDeadline('')
          }}
        >
          Clear Filters
        </button>
      </div>

      {/* Projects List */}
      {filtered.length === 0 && (
        <div className="text-center p-8 text-gray-500">No projects found matching your filter criteria.</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map(project => (
          <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-2xl transition">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">{project.category}</span>
              <span className="text-gray-400 text-xs">{new Date(project.createdAt).toLocaleDateString()}</span>
            </div>
            <h2 className="text-lg md:text-xl font-bold mb-1 text-gray-900 dark:text-gray-100">{project.title}</h2>
            <p className="mb-3 text-gray-700 dark:text-gray-300">{project.description}</p>
            <div className="mb-1 text-sm text-blue-700 dark:text-blue-200">
              <strong>Required Skills:</strong> {project.skills.join(', ')}
            </div>
            <div className="mb-1 text-sm">
              <strong>Budget:</strong> ${project.budgetMin} – ${project.budgetMax}
            </div>
            <div className="mb-2 text-sm">
              <strong>Deadline:</strong> {new Date(project.deadline).toLocaleDateString()}
            </div>
            <div className="flex gap-4 mt-3">
              <Link
                to={`/projects/${project.id}`}
                className="btn-primary"
              >
                View
              </Link>
              <Link
                to={`/dashboard/bid/${project.id}`}
                className="px-4 py-2 rounded bg-purple-600 hover:bg-purple-800 text-white font-semibold"
              >
                Bid Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectBrowse
