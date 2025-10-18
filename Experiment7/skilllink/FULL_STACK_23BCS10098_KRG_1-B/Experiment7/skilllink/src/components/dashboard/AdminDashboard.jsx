import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeProjects: 0,
    transactions: 0,
    flagged: 0,
    resolvedDisputes: 0
  })
  const [projectChart, setProjectChart] = useState([])
  const [transactionsChart, setTransactionsChart] = useState([])

  useEffect(() => {
    // Fetch dashboard statistics
    api.get('/admin/dashboard-stats').then((res) => {
      setStats(res.data.stats)
      setProjectChart(res.data.projectChart)
      setTransactionsChart(res.data.transactionsChart)
    }).catch(() => {
      // fallback for demo:
      setStats({
        totalUsers: 256,
        activeProjects: 32,
        transactions: 87,
        flagged: 4,
        resolvedDisputes: 3
      })
      setProjectChart([
        { month: 'Jan', projects: 8 },
        { month: 'Feb', projects: 5 },
        { month: 'Mar', projects: 7 },
        { month: 'Apr', projects: 12 }
      ])
      setTransactionsChart([
        { status: 'Initiated', count: 23 },
        { status: 'Released', count: 54 },
        { status: 'Refunded', count: 10 }
      ])
    })
  }, [])

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-1">Admin Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-4">Manage users, projects, disputes, and platform stats at a glance.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <StatsCard title="Total Users" value={stats.totalUsers} to="/dashboard/users" />
        <StatsCard title="Active Projects" value={stats.activeProjects} to="/dashboard/projects" />
        <StatsCard title="Transactions" value={stats.transactions} to="/dashboard/transactions" />
        <StatsCard title="Flagged Items" value={stats.flagged} to="/dashboard/reports" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-5 rounded shadow">
          <h2 className="font-semibold mb-4">New Projects (last 4 months)</h2>
          <ResponsiveContainer width="100%" height={230}>
            <BarChart data={projectChart}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="projects" name="Projects" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded shadow">
          <h2 className="font-semibold mb-4">Transactions by Status</h2>
          <ResponsiveContainer width="100%" height={230}>
            <BarChart data={transactionsChart} layout="vertical">
              <XAxis type="number" />
              <YAxis dataKey="status" type="category"/>
              <Tooltip />
              <Bar dataKey="count" name="Count" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

function StatsCard({ title, value, to }) {
  return (
    <Link to={to} className="bg-white dark:bg-gray-800 rounded p-4 shadow hover:shadow-md transition focus:outline-none block">
      <div className="text-sm text-gray-400">{title}</div>
      <div className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{value}</div>
    </Link>
  )
}

export default AdminDashboard
