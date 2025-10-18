import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded focus:outline-none"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? '🌙' : '🌞'}
    </button>
  )
}
