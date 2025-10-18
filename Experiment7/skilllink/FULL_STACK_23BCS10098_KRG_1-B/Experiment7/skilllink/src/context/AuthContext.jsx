import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Replace with real JWT/session code. For demo, set a default user:
    setUser({ email: 'demo@user.com', role: 'EMPLOYER' })
  }, [])

  const login = async ({ email, password }) => {
    // Replace with real auth call
    setUser({
      email,
      role: email === 'admin@site.com' ? 'ADMIN' :
            email === 'employer@site.com' ? 'EMPLOYER' : 'FREELANCER'
    })
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
