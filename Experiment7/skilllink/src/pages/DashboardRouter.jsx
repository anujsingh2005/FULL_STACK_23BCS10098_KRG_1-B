import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

import EmployerDashboard from '../components/dashboard/EmployerDashboard'
import FreelancerDashboard from '../components/dashboard/FreelancerDashboard'
import AdminDashboard from '../components/admin/AdminDashboard'

import ProjectCreate from '../components/employer/ProjectCreate'
import ProjectBids from '../components/employer/ProjectBids'

import ProjectList from '../components/freelancer/ProjectList'
import BidModal from '../components/freelancer/BidModal'
import ProfileForm from '../components/freelancer/ProfileForm'
import EarningsDashboard from '../components/freelancer/EarningsDashboard'

import AuditLogs from '../components/admin/AuditLogs'
import UserManagement from '../components/admin/UserManagement'
import CategoryManagement from '../components/admin/CategoryManagement'

import NotFound from '../components/common/NotFound'

export default function DashboardRouter() {
  const { user } = useContext(AuthContext)
  if (!user) return <Navigate to="/auth/login" replace />

  // Render ONLY the routes for the actual role
  return (
    <main className="p-4">
      {user.role === 'EMPLOYER' && (
        <Routes>
          <Route path="/" element={<EmployerDashboard />} />
          <Route path="projects/new" element={<ProjectCreate />} />
          <Route path="projects/:id/bids" element={<ProjectBids />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
      {user.role === 'FREELANCER' && (
        <Routes>
          <Route path="/" element={<FreelancerDashboard />} />
          <Route path="projects" element={<ProjectList />} />
          <Route path="bid/:id" element={<BidModal />} />
          <Route path="profile" element={<ProfileForm />} />
          <Route path="earnings" element={<EarningsDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
      {user.role === 'ADMIN' && (
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="categories" element={<CategoryManagement />} />
          <Route path="audit-logs" element={<AuditLogs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </main>
  )
}
