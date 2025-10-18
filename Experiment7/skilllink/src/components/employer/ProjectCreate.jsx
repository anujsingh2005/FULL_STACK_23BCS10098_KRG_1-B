import React, { useState } from 'react'

function ProjectCreate() {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle project creation logic here
  }

  return (
    <form className="bg-white dark:bg-gray-800 p-6 rounded shadow"
          onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Create Project</h2>
      <input
        name="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="input mb-3"
        placeholder="Title"
        required
      />
      <button type="submit" className="btn-primary w-full">Create</button>
    </form>
  )
}
export default ProjectCreate
