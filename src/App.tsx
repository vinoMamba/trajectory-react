import { useState } from 'react'
import './App.css'

export const App = () => {
  const [theme, setTheme] = useState("dark")
  const handleClick = (theme: 'dark' | 'light' | '') => {
    setTheme(theme)
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.remove('light')
      root.classList.add('dark')
    } else if (theme === 'light') {
      root.classList.remove('dark')
      root.classList.add('light')
    } else {
      root.classList.remove('dark')
      root.classList.remove('light')
    }
    localStorage.setItem('theme', theme)
  }
  return (
    <div className="App">
      {JSON.stringify(theme)}
      <button onClick={() => handleClick('dark')}>dark</button>
      <button onClick={() => handleClick('light')}>light</button>
      <button onClick={() => handleClick('')}>跟随系统</button>
    </div>
  )
}

