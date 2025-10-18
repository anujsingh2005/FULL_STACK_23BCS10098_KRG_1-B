import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ProjectBrowse from '../pages/ProjectBrowse'
import DashboardRouter from '../pages/DashboardRouter'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import EmailVerify from '../components/auth/EmailVerify'
import NotFound from '../components/common/NotFound'
import ProjectDetails from '../pages/ProjectDetails'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectBrowse />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/email-verify" element={<EmailVerify />} />
      <Route path="/dashboard/*" element={<DashboardRouter />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
    </Routes>
  )
}
