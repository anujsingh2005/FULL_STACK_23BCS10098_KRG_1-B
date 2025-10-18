import React from 'react'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl mb-2 text-gray-800 dark:text-gray-100">Page Not Found</h2>
      <p className="text-gray-500 mb-6">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="btn-primary">Back to Home</a>
    </div>
  )
}

export default NotFound
