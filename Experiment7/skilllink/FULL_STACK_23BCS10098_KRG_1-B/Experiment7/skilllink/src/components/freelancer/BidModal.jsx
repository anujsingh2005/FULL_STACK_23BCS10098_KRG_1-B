import React from 'react'
import { useParams, Link } from 'react-router-dom'

function BidModal() {
  const { id } = useParams()
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white dark:bg-gray-800 shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Bid on Project (ID: {id})</h2>
      <form>
        <div className="mb-2">
          <label className="block font-medium mb-1">Bid Amount</label>
          <input type="number" className="input" placeholder="Your bid in $" required />
        </div>
        <div className="mb-2">
          <label className="block font-medium mb-1">Timeline (days)</label>
          <input type="number" className="input" placeholder="Delivery time in days" required />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Proposal Message</label>
          <textarea className="input" placeholder="Explain why you're the best fit..." required />
        </div>
        <button type="submit" className="btn-primary w-full">Submit Bid</button>
      </form>
      <Link to="/projects" className="btn-primary mt-4 block text-center">Back to Projects</Link>
    </div>
  )
}
export default BidModal
