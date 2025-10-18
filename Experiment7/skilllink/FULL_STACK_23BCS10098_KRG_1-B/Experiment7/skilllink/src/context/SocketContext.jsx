import React, { createContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'

export const SocketContext = createContext(null)

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const s = io(import.meta.env.VITE_SOCKET_URL || 'http://localhost:8080', {
      auth: { token: localStorage.getItem('token') }
    })
    setSocket(s)
    return () => s.close()
  }, [])

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}
